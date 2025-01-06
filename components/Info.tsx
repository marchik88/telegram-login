'use client';

import { LoginButton } from '@telegram-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

interface TelegramAuthData {
  id: number; // Telegram user ID
  first_name: string;
  last_name?: string; // Optional
  username?: string; // Optional
  photo_url?: string; // Optional
  auth_date: number;
  hash: string;
}

function LoadingPlaceholder() {
  return <div>Loading...</div>;
}

interface InfoProps {
  botUsername: string;
}

export function Info({ botUsername }: InfoProps) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingPlaceholder/>;
  }

  const user = session?.user as User | undefined;

  if (status === 'authenticated' && user) {
    return (
      <div>
        <p>You are signed in as</p>&nbsp;
        <p>{user.name}</p>
        <Button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div>
      <p>You are not signed in</p>
      <LoginButton
        botUsername={botUsername}
        onAuthCallback={(data: TelegramAuthData) => {
          const authData: Record<string, string> = {
            id: data.id.toString(),
            first_name: data.first_name,
            last_name: data.last_name || '',
            username: data.username || '',
            photo_url: data.photo_url || '',
            auth_date: data.auth_date.toString(),
            hash: data.hash,
          };

          signIn('telegram-login', { callbackUrl: '/' }, authData);
        }}
      />
    </div>
  );
}
