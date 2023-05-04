import mongoose from "mongoose";
const { schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      default: false,
    },
    roomNumbers: [{ number: Number, unavailabledates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
