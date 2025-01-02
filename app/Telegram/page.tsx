"use client";

import { useState } from "react";
import Image from "next/image";
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'

export default function TelegramAuth() {
  const [user] = useState({
    first_name: '',
    photo_url: ''
  });


  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg font-semibold">Telegram Authentication</h1>
          {user ? (
            <div className="text-center">
              <h2 className="text-xl">Welcome, {user?.first_name}!</h2>
              {user?.photo_url && (
                <Image
                  src={user?.photo_url}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              )}
            </div>
          ) : (
            <TelegramLoginButton
              botName="marchugan_telegram_auth_bot"
              dataOnauth={(user: TelegramUser) => console.log(user)}
            />
          )}
        </div>
      </main>
      <footer
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Next.js
        </a>
      </footer>
    </div>
  );
}
