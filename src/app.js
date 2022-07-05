#! /usr/bin/env node

const notes = require('./notes.js')
const yargs = require('yargs')

let title = {
    describe: 'Note title',
    demandOption: true,
    type: 'string',
    alias: 't',
}

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: title,
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
            alias: 'b',
        },
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    },
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: title,
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    },
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: title,
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    },
})

//Edit note commnad

yargs.command({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
        title: title,
    },
    handler: (argv) => {
        notes.editNote(argv.title)
    },
})

//Rename command
yargs.command({
    command: 'rename',
    describe: 'Rename a note',
    builder: {
        title: title,
        new: {
            describe: 'New title',
            demandOption: true,
            type: 'string',
            alias: 'n',
        },
    },
    handler: (argv) => {
        notes.reNote(argv.title, argv.new)
    },
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: () => {
        notes.listNotes()
    },
})

yargs.parse()
