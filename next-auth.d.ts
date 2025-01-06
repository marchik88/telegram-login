import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      first_name: string;
      username?: string;
      photo_url?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    first_name: string;
    username?: string;
    photo_url?: string;
  }
}
