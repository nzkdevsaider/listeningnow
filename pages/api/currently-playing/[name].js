import dbConnect from "../../../lib/dbConnect";
import Playing from "../../../models/Playing";
import { getUserCurrentlyPlaying } from "../../../lib/currently-playing";

export default async function handler(req, res) {
  const {
    query: { name },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its name */:
      try {
        const user = await Playing.findOne({ name });

        if (!user) {
          return res.status(200).json({
            success: false,
            playing: null,
            message: "El usuario no se ha registrado en ListeningNow.",
          });
        }

        const response = await getUserCurrentlyPlaying(user.accessToken);
        const playing = await response.json();

        if (!playing) {
          return res.status(200).json({
            success: false,
            playing: null,
            message:
              "El usuario no está reproduciendo nada o el acceso se ha perdido.",
          });
        }

        return res.status(200).json({ playing });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}