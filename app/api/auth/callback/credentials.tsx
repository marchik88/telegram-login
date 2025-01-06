"use client";

import { signIn } from "next-auth/react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export default function TelegramAuth() {
  const handleTelegramAuth = async (user: TelegramUser) => {
    try {
      const res = await signIn("credentials", {
        id: user.id.toString(),
        hash: user.hash,
        username: user.username,
        first_name: user.first_name,
        photo_url: user.photo_url,
        redirect: true,
        callbackUrl: "/protected",
      });
      console.log(res);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg font-semibold">Telegram Authentication</h1>
          <TelegramLoginButton
            botName="marchugan_telegram_auth_bot"
            dataOnauth={handleTelegramAuth}
          />
        </div>
      </main>
    </div>
  );
}
