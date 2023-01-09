import { getSession } from "next-auth/react";
import { getUserCurrentlyPlaying } from "../lib/currently-playing";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const response = await getUserCurrentlyPlaying(accessToken);
  const data = await response.json();

  return res.status(200).json(data);
};

export default handler;
