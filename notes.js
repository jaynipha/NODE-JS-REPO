const fs = require('fs');
const getNotes =  ()=> {
    return 'your notes . . .'
}
//ADD NOTES
const addNotes = (title, body)=> {
 const notes = loadNotes();
 //const duplicateNotes = notes.filter((notes)=> notes.title === title);
const duplicNote = notes.find((notes)=> notes.title ===title);
 if(!duplicNote){

 notes.push({
    title:title,
    body:body,
 })
 saveNotes(notes);
 console.log('new note added')
} else {
    console.log ('note title already taken')
}
}
//REMOVE NOTES
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
        //const notes =loadNotes();
  
    }
    
//listing note function
const listNotes = ()=> {
    const notes = loadNotes()
    console.log('your notes')
    
    notes.forEach((note) => {
        console.log(note.title)   
    });
    
}

    
    //READ NOTES FUNCTION
    const readNotes = (title, body)=> {
        const notes = loadNotes()
        const notesToRead = notes.find((notes)=> notes.title === title);
        if(!notesToRead){
            notes.push({
                title:title,
                body:body,
             })
             saveNotes(notes);
             console.log('no notes found')
            } else {
                console.log ('here are the notes you called')
            }
            
    }
    
    
    





module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}

