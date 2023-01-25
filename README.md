# calculadorajs
Projeto de calculadora front-end utilizando funções em JavaScript.
```
const fs = require('fs').promises

async function getAllFiles(_path, files) {

    if (!files) files = []

    const listOfFiles = await fs.readdir(_path)

    for (let y in listOfFiles) {
        const stat = await fs.stat(`${_path}/${listOfFiles[y]}`)
        if (stat.isDirectory())
            await getAllFiles(`${_path}/${listOfFiles[y]}`)
        else
            files.push(`${_path}/${listOfFiles[y]}`)
    }



    return files
}

async function tratar(initialPath) {
    const files = await getAllFiles(initialPath)
    console.log(files)
    return files
}
tratar('path')
```
