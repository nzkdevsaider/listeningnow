import Player from "./Player";

const Logged = ({ signOut, session }) => {
  return (
    <>
      <div className="m-5">
        <h1>Logeado</h1> <button onClick={() => signOut()}>Sign out</button>
        <p>Como: {session?.token?.name}</p>
      </div>
      <Player />
    </>
  );
};

export default Logged;
