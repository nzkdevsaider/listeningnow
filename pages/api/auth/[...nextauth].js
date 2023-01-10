import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import dbConnect from "../../../lib/dbConnect";
import PlayingModel from "../../../models/Playing";

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-currently-playing",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session(session, user) {
      const { name, accessToken } = session.token;

      try {
        await dbConnect();
        const checkExistence = await PlayingModel.findOne({ name: name });

        if (checkExistence) {
          await PlayingModel.findOneAndUpdate(
            { name: name },
            { accessToken: accessToken },
            { new: true }
          );
        } else {
          await PlayingModel.create({
            name: name,
            accessToken: accessToken,
          });
        }
      } catch (error) {
        console.log(error);
        return;
      }
      session.user = user;
      return session;
    },
  },
});
