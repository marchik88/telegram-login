"use client";

import { signIn } from "next-auth/react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export default function TelegramAuth() {
  const handleTelegramAuth = async (user: TelegramUser) => {
    console.log('user', user)
    try {
      await signIn("credentials", {
        id: user.id.toString(),
        hash: user.hash,
        username: user.username,
        first_name: user.first_name,
        photo_url: user.photo_url,
        redirect: true,
        callbackUrl: "/protected",
      });
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <TelegramLoginButton
      botName="marchugan_telegram_auth_bot"
      dataOnauth={handleTelegramAuth}
    />
  );
}
