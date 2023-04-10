import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      username: string;
      email: string;
      token: string;
    } & DefaultSession["user"];
  }
}
