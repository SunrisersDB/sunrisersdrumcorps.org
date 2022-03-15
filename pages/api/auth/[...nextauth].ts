import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions, Theme } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../../../lib/prisma";
import EmailProvider from "next-auth/providers/email";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    EmailProvider({
      name: "Magic Link",
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      // FIXME -- Doesn't work, all mail comes from hi@bananabrann.dev
      // from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
    brandColor: "#F87C39",
    logo: "https://sunrisers.blob.core.windows.net/web-assets/logo-text.svg",
  },
};
