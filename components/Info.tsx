'use client';

import { LoginButton } from '@telegram-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

function LoadingPlaceholder() {
  return (
    <div>Loading...</div>
  );
}

export function Info({ botUsername }: { botUsername: string }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingPlaceholder/>;
  }

  const user = session?.user as User;

  if (status === 'authenticated') {
    return (
      <div>

        <p>You are signed in as</p>&nbsp;
        <p>{user.name}</p>

        <Button
          onClick={() => {
            signOut();
          }}
        >
          {'Sign out'}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <p>You are not signed in</p>
      <LoginButton
        botUsername={botUsername}
        onAuthCallback={(data) => {
          signIn('telegram-login', { callbackUrl: '/' }, data as any);
        }}
      />
    </div>
  );
}
