import mongoose from "mongoose";

const PlayingSchema = new mongoose.Schema({
  name: String,
  accessToken: String,
});

const PlayingModel =
  mongoose.models.Playing || mongoose.model("Playing", PlayingSchema);

export default PlayingModel;