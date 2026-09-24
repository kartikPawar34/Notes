import Note from "../Model/Note.js";

export async function getAllNotes(req,res){
 try{
  const notes = await Note.find()
  res.status(200).json(notes)
 }catch(error){

  console.error("ERROR IN getAllcontroller!!!",error);
  res.status(500).json({message : "Internal Server Error!! "})
 }
}

export async function createNote(req,res){
  try {
    const{title,content} = req.body;
    const note = new Note({title, content});

    const saveNote = await note.save();
    res.status(201).json(saveNote);
  } catch (error) {
    console.error("ERROR IN createNoteRoute",error);
    res.status(500).json({message: "INTERNAL SERVER ERROR!!!"})
  }
}

export async function updateNote(req,res){
  try {
    const {title,content} = req.body;
    const updatenote =  await Note.findByIdAndUpdate(req.params.id,{title,content},{new : true});
    if(!updateNote){
      return res.status(404).json({message:"Note is not found"})
    }
    res.status(200).json(updateNote)
    
  } catch (error) {
    console.error('ERROR in UpdateingRoute',error);
    res.status(500).json({message : "INTERNAL SERVER ERROR"});
  }
}

export async function deleteNote(req,res){
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if(!deleteNote){
      return res.status(404).json({message : "ERROR note not found"});
    }

    res.status(200).json(deleteNote);
  } catch (error) {
    console.error("ERROR occure on deletenoteroutes",error);
    res.status(500).json({message : "INTERNAL SERVER ERROR"})
  }
}