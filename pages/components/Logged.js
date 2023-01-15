import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Logged = () => {
  const { data: session } = useSession();

  return (
    <section className="container mx-32 space-y-8">
      <div className="flex flex-row justify-center items-center space-x-5">
        <img
          className="rounded-full object-cover h-[50px] w-[50px]"
          src={session?.token?.picture}
        />
        <h2>¡Listo! Tu cuenta ({session?.token?.name}) ha sido vinculada.</h2>
        <button
          className="bg-green-600 p-2 rounded-lg"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </button>
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl">Intrucciones de incrustación</h1>
        <p className="text-xl">
          Para embeber el reproductor que va a mostrar en tiempo real lo que
          estás escuchando en Spotify, debes copiar el siguiente enlace y
          añadirlo a su código de incrustación o plataforma.
        </p>
        <div className="flex flex-row justify-center bg-slate-600 mx-auto text-center p-3 space-x-2 rounded-lg">
          <Link href={`/embed/${session?.token?.name}`} className="text-xl">
            <p className="m-auto">
              {process.env.NEXT_PUBLIC_WEBSITE_URL}/embed/
              {session?.token?.name}
            </p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
            <line x1="10" y1="14" x2="20" y2="4" />
            <polyline points="15 4 20 4 20 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Logged;
