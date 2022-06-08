const fs = require('fs')
const chalk = require('chalk');
const path = require('path')

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//chalk color formats
const green = chalk.green
const red = chalk.red
const yellow = chalk.yellow
const cyan = chalk.cyan

// Adding notes
const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
   
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(green(`Note "${title}" saved successfully!`))

    } else{
        console.log(red(`Note "${title}" already exists! \nNot added`))
    } 
}

// removing notes
const removeNote = title =>{
    const notes = loadNotes()
    const filteredNotes = notes.filter(note => note.title !== title)

    if (notes.length === filteredNotes.length){
        console.log(red.inverse(`Note "${title}" does not exist!`))

    }else {
        saveNotes(filteredNotes)
        console.log(yellow(`Note "${title}" has been removed!`))
    }
}

//Lisiting notes
const listNotes = () =>{
    const notes = loadNotes()
    if (notes.length > 0){
        console.log(green.inverse("Your Notes:"))
        notes.map(note => {
            console.log(cyan(`${note.title}`))
        })
    }else{
        console.log("There isn't any note!")
    }
}

//reading note
const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)

    if (noteToRead){
        console.log(green(`Note: ${noteToRead.title}`))
        console.log(cyan(noteToRead.body))
    } else {
        console.log(red(`Note "${title}" does not exist!`))
    }
}

// Saving notes
const saveNotes = notes =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFile( path.join(__dirname, '../notes.json'), dataJSON, err =>{
        if (err) throw err;
    })
}

// Loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(path.join(__dirname, '../notes.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(err){
        return []
    }
}


// Editting a note
const editNote = async (title) => {

    const notes = loadNotes()
    const noteToEdit = notes.find(note => note.title == title)

    if (noteToEdit){
        console.log(`Title: ${noteToEdit.title}`)
        console.log(`Body: ${noteToEdit.body}`)
        getUserInput(data => {
            console.log("  ")
            console.log(noteToEdit.body + "\n" + data)
        } )
    }else {
        console.log(red(`Note "${title}" does not exist!`))
    }
}

const getUserInput = (callback) => {
    rl.question("Insert aditional text: ", (data) => {
        rl.close();
        callback(data)
        })
}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
    editNote
}