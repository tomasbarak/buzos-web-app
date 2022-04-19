const fs = require('fs')

const file = fs.readFileSync('/home/barak/Documentos/nasheee.txt')

let mails = []
let line = '"'
for(let i = 0; i < file.length; i++){
    let actualChar = String.fromCharCode(file[i])

    if(file[i] === 10){
        line += '"'
        mails.push(line)
        console.log(line)
        line = '"';
    }else{
        line += actualChar;
    }
}

let exportString = '[\n' + mails.join(',\n') + '\n]' 



fs.writeFileSync('/home/barak/Documentos/exports.json', exportString, { flag: 'w+' })