import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      issuer: process.env.KEYCLOAK_ISSUER,
      clientSecret: process.env.KEYCLOAK_SECRET!,
    }),
  ],

  callbacks: {
    session({ session, token, user }) {
      console.log("session", session);
      console.log("token", token);
      console.log("user", user);
      // session.user.token = token.email!;
      return { session, token, user } as any;
    },
  },
});
