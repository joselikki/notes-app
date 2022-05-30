# notes-app ✍️

Take daily small notes from the terminal.
Made with Node.js 
<br>
<br>

# Installation
<br>

```sh
$ git clone https://github.com/joselikki/notes-app.git  
$ cd notes-app
$ npm install -g .
```

# Usage

Once you installed the notes-app, you can verify it's working by running:

```sh
$ note --version
```

See list of commands:

```sh
$ note --help
```
<br>

## Commands:
<br>

Adding a new note 📝 <br>
<br>
_Note's title must be unique_
```sh
$ note add --title="<note title>" --body="<note body>"
```


Reading a note 📄
```sh
$ note read --title="<note title>"
```
Removing a note 🗑
```sh
$ note remove --title="<note title>"
```
 Listing all the notes 📒
```sh
$ note list
```
<br>

___

Made by Jose Paredes 👨‍🚀