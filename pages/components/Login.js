import Image from "next/image";

const Login = ({ signIn }) => {
  return (
    <>
      <section className="m-5">
        <div id="logo">
          <Image src="./logo.svg" alt="ListeningNow" width={600} height={600} />
        </div>
        <div id="login" className="my-5 text-center space-y-4">
          <h1>¿Qué estás escuchando ahora?</h1>
          <div className="flex justify-center">
            <button
              onClick={() => signIn()}
              className="bg-[#1DB954] p-3 rounded-full flex items-center space-x-2 hover:bg-[#17a348] hover:transition hover:duration-300 hover:ease-in-out"
            >
              <Image
                src="/icons/Spotify_Icon_RGB_White.png"
                alt="Spotify"
                width={30}
                height={30}
              />
              <span>Iniciar sesión</span>
            </button>
          </div>
        </div>
      </section>
      <section className="container m-5">
        <div className="flex flex-col space-y-5 m-10">
          <h1 className="text-4xl">¿Qué es ListeningNow?</h1>
          <p className="text-xl">
            ListeningNow es un servicio que te permite ver y mostrar qué canción
            estás escuchando en Spotify a más personas. Vincula tu cuenta de
            Spotify para generar el código o enlace del reproductor embebido
            para compartir.
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
