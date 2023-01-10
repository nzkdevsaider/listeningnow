import { useRouter } from "next/router";
import Player from "../components/Player";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Username = () => {
  
  const router = useRouter();
  const { username } = router.query;

  return <Player name={username} />;
};

export default Username;