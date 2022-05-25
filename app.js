const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//color formats

const green = chalk.green
const blue = chalk.blue
const red = chalk.red
const yellow = chalk.yellow

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function(){
        console.log('Listing out all the notes')
    }
})

//add, remove, read, list


yargs.parse()