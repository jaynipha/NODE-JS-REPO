const fs = require('fs');
const getNotes =  ()=> {
    return 'your notes . . .'
}

const addNotes = (title, body)=> {
 const notes = loadNotes();
 const duplicateNotes = notes.filter((notes)=> notes.title === title);

 if(duplicateNotes.length ===0){

 notes.push({
    title:title,
    body:body,
 })
 saveNotes(notes);
 console.log('new note added')
} else {
    console.log ('note title taken')
}
}
//remove notes
const removeNote = (title, body)=> {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes)=> notes.title !== title);
    if(notes.length > notesToKeep.length){
        console.log('notes removed')

    }else {
          console.log('no note found')
    }
saveNotes(notesToKeep);
}

const saveNotes = (notes)=> {
 const dataJSON = JSON.stringify(notes);
 fs.writeFileSync("notes.json", dataJSON);
 
}

    const loadNotes = ()=> {
       
        try{
            const dataBuffer = fs.readFileSync("notes.json");
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        }    
        catch (e) {
        return[]
       
        }
        const notes =loadNotes();
  
    }
    

    
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNote: removeNote
}

