const notes = require('./notes.js');
const yargs = require('yargs');
const { demandOption, string } = require('yargs');
 const command = process.argv[2]




if(command ==='add'){
    console.log('adding notes....')

}


yargs.version('1.0.2');

//create notes app using add,remove, list, delete
yargs.command({
    command:"add",
    describe:"add a new note here",
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string',
            

        },
    
    body:{
        describe:'note body',
        demandOption:'true',
        type:'string',

    },
},
    handler(argv){
        // console.log('title:' + argv.title);
        // console.log('body:' + argv.body);
        notes.addNotes(argv.title, argv.body)


    }
},
)




yargs.command({
    command:"remove",
    describe:"remove a new note here",
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: string,
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})




yargs.command({
    command:"list",
    describe:"list a new note here",
    handler: function(){
        console.log('listing all the notes here . .')
    }
})


yargs.command({
    command:"read",
    describe:"read a note here",
    handler(){
        console.log('read your note')

    }
})

yargs.parse();

console.log(process.argv[2])
//console.log(yargs.argv);

