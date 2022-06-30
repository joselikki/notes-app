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

### Adding a new note 📝

```sh
$ note add --title="<note title>" --body="<note body>"

# Options
# title: -t , --title
# body: -b, --body

# title must be unique
```

### Reading a note 📄

```sh
$ note read --title="<note title>"

# Options
# title: -t, --title
```

### Removing a note 🗑

```sh
$ note remove --title="<note title>"

# Options
# title: -t, --title
```

### Renaming a note

```sh
$ note rename --title=<note title> --new=<new note title>

# Options
# title: -t, --title
# new title: -n, --new
```

### Editing a note

```sh
$ note edit --title=<note title>

#You will be asked for new data
#Insert new text and hit enter

# Options
# title: -t, --title
```

### Listing all the notes 📒

```sh
$ note list
```

<br>

---

Made by Jose Paredes 👨‍🚀
