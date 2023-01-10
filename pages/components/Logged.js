import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Logged = () => {
  const { data: session } = useSession();

  return (
    <>
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
          <p className="bg-slate-600 mx-auto text-center p-3 rounded-lg">
          <Link href={`/embed/${session?.token?.name}`} className="text-xl">
            {process.env.NEXT_PUBLIC_WEBSITE_URL}/embed/{session?.token?.name}
          </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Logged;
