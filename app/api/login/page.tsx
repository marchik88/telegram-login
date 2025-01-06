"use client";

import TelegramAuth from "@/components/TelegramAuth";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-lg font-semibold">Login</h1>
      <TelegramAuth/>
    </div>
  );
}
