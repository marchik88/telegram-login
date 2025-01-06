import type { Metadata } from 'next';
import { AuthProvider } from './auth-provider';
import { Info } from "@/components/Info";

export const metadata: Metadata = {
  title: 'Telegram Auth',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
      <body>
      <Info botUsername="marchugan_telegram_auth_bot"/>
      <main>{children}</main>
      </body>
      </html>
    </AuthProvider>
  );
}
