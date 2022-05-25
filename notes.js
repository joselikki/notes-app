const fs = require('fs')
const chalk = require('chalk');

//chalk color formats
const green = chalk.green
const blue = chalk.blue
const red = chalk.red
const yellow = chalk.yellow

const getNotes = () =>{
    return "Your notes....!"
}

// Adding notes
const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicates = notes.filter(note => note.title === title)
   
    if(duplicates.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes, title)
        console.log(green(`Note "${title}" saved successfully!`))

    } else{
        console.log(red(`Note "${title}" already exists! \nNot added`))
    } 
}

// removing notes
const removeNote = (title) =>{
    const notes = loadNotes()
    const filteredNotes = notes.filter(note => note.title !== title)

    if (notes.length === filteredNotes.length){
        console.log(red.inverse(`Note "${title}" does not exist!`))

    }else {
        saveNotes(filteredNotes)
        console.log(yellow(`Note "${title}" has been removed!`))
    }
}

// Saving notes
const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFile('notes.json', dataJSON, err =>{
        if (err) throw err;
    })
}

// Loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(err){
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}