import NextAuth, { JWT } from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
import { Session } from "next-auth"

type GitHubAccount = {
  provider: string;
  type: string;
  access_token: string;
  expires_at: number;
  refresh_token?: string;
  token_type?: string;
  id_token?: string;
  scope?: string;
  session_state?: string;
};

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user,
      profile,
    }: {
      user: { name?: string | null; email?: string | null; image?: string | null };
      profile: { id: string; login: string; bio?: string };
    }) {
      const existingUser = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });

      const { id, login, bio } = profile;
      const { name, email, image } = user;

      if(!existingUser) {
        await writeClient.create({
          _type: 'author',
          id: id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        })
      }

      return true;
    },


    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT & { id?: string };
      account?: GitHubAccount | null;
      profile?: { id?: string } | null;
    }) {
      if (account && profile?.id) {
        const user = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile.id,
        });
    
        token.id = user._id;
      }
    
      return token;
    },
    
    
    async session({
      session, 
      token
    } : {
      session: Session;
      token: JWT & { id?: string };
    }
    
    ) {
      Object.assign(session, {id: token.id});
      return session;
    }
  }
})