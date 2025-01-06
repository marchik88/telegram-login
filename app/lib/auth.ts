import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Telegram",
      credentials: {
        id: { label: "Telegram ID", type: "text" },
        hash: { label: "Hash", type: "text" },
        first_name: { label: "First Name", type: "text", required: false },
        username: { label: "Username", type: "text", required: false },
        photo_url: { label: "Photo URL", type: "text", required: false },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { id, hash, ...rest } = credentials as {
          id: string;
          hash: string;
          [key: string]: string; // Index signature to allow string keys
        };

        const secret = process.env.TELEGRAM_BOT_TOKEN;

        if (!secret) {
          throw new Error("Telegram bot token is not set in environment variables");
        }

        // Construct data check string
        const dataCheckString = Object.keys(rest).sort().
          map((key) => `${key}=${rest[key]}`) // Type-safe indexing
          .join("\n");

        // Compute the hash
        const secretKey = crypto.createHash("sha256").update(secret).digest();
        const computedHash = crypto.createHmac("sha256", secretKey).
          update(dataCheckString).digest("hex");

        if (computedHash !== hash) {
          throw new Error("Invalid Telegram login");
        }

        // Return user object with required fields
        return {
          id,
          first_name: rest.first_name || "",
          username: rest.username || "",
          photo_url: rest.photo_url || "",
        };
      }

    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.first_name = user.first_name;
        token.username = user.username;
        token.photo_url = user.photo_url;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          first_name: token.first_name as string,
          username: token.username as string,
          photo_url: token.photo_url as string,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
