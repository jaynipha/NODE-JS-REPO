const fs = require('fs');

const getNotes = function getNotes(){

    return 'your notes . . .'
}
const addNotes = function(title, body){
 const notes = loadNotes();

 notes.push({
    title:'title',
    body:'body'
 })
 console.log(notes);

}
saveNotes(notes);
const saveNotes = function(notes){
 const dataJson = JSON.stringify(notes);
 fs.writeFileSync('notes.Json', dataJson);
}
    const loadNotes = function(){
        try{
            const dataBuffer = fs.readFileSync('notes.JSON');
            const dataJson = dataBuffer.toString()
            return JSON.parse(dataJson)
        }    
        catch (e) {
        return[]
       
        }
    }

module.exports = {
    getNotes : 'getNotes',
    addNotes : 'addNotes'
}


module.exports = getNotes;