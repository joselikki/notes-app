const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note');
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
        console.log('Listing all the notes')
    }
})

//add, remove, read, list



console.log(yargs.argv)