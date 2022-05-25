const fs = require('fs')
const chalk = require('chalk');

//color formats

const green = chalk.green
const blue = chalk.blue
const red = chalk.red
const yellow = chalk.yellow

const getNotes = () =>{
    return "Your notes....!"
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicates = notes.filter(note => note.title === title)
   
    if(duplicates.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes, title)

    } else{
        console.log(red(`Note "${title}" already exists! \nNot added`))
    } 
}

const saveNotes = (notes, title) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFile('notes.json', dataJSON, err =>{
        if (err) throw err;
        else{
            console.log( green( `Note "${title}" saved successfully!`))
        }
    })
}


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
    addNote: addNote
}