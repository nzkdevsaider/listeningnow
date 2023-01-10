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
          <button
            onClick={() => signIn()}
            className="bg-[#1DB954] p-3 rounded-full"
          >
            Iniciar sesión
          </button>
        </div>
      </section>
      <section className="container m-5">
        <div className="flex flex-col space-y-5 m-10">
          <h1 className="text-4xl">¿Cómo usar ListeningNow en otros sitios?</h1>
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
