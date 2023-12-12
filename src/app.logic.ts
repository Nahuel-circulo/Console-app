import fs from 'fs'
import { yarg } from './plugins/args.plugin';

const {b:base,l:limit,s:showTable} = yarg

let outputmessage = '';

const headerMessae = `
============================
        Tabla del ${base}
============================
`;

for (let i = 1; i <= limit; i++) {
  outputmessage += `${base} x ${i} = ${base * i}\n`;
}

outputmessage = headerMessae + outputmessage;

if (showTable) {
  console.log(outputmessage)
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFile(`${outputPath}/tabla-${base}.txt`, outputmessage, (err) => {
    if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
})