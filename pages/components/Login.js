import Image from "next/image";

const Login = ( { signIn } ) => {
  return (
    <>
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
    </>
  );
};

export default Login;
