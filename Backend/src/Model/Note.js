import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title : {
    type : String,
    require : true,
  },
  content: {
    type : String,
    required : true,
  },
},{timestamps: true}
)

const Note = mongoose.model("Note", NoteSchema)
export default Note