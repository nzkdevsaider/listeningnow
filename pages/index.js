import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./components/Login";
import Logged from "./components/Logged";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>ListeningNow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        {session ? <Logged signOut={signOut} /> : <Login signIn={signIn} />}
      </main>
    </>
  );
}
