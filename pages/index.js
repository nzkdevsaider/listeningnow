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
      <main className="flex flex-col items-center justify-center h-screen bg-black text-white">
        {session ? <Logged signOut={signOut} /> : <Login signIn={signIn} />}
      </main>
      <footer className="flex flex-col items-center justify-center bg-black text-white p-5">
        <div className="text-sm">
          <p>
            ListeningNow no está afiliado con Spotify. Spotify es una marca
            registrada de Spotify AB. Este sitio web no tiene fines de lucro.
          </p>
        </div>
      </footer>
    </>
  );
}
