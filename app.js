//const validator = require('validator');
const getNotes = require('./notes');
const yargs = require('yargs');
const { demandOption } = require('yargs');
 const command = process.argv[2]
console.log(getNotes());
//console.log(validator.isURL('josephjenny@gmail.com'))


// if(command ==='add'){
//     console.log('adding notes....')

// }

//CUSTOMIZE YARGS VERSION
//yargs.version('1.0.2');

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
    handler: function(argv){
        console.log('title:' + argv.title);
        console.log('body:' + argv.body);
    }
},
)

yargs.command({
    command:"remove",
    describe:"remove a new note here",
    handler: function(){
        console.log('removing a new note')
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
    handler: function(){
        console.log('read your note')

    }
})

yargs.parse();

console.log(process.argv[2])
//console.log(yargs.argv);