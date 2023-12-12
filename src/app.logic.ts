import fs from 'fs'

let outputmessage = '';
const base = 5;

const headerMessae = `
============================
        Tabla del ${base}
============================
`;

for (let i = 1; i <= 10; i++) {
  outputmessage += `${base} x ${i} = ${base * i}\n`;
}

outputmessage = headerMessae + outputmessage;
console.log(outputmessage)

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFile(`${outputPath}/tabla-${base}.txt`, outputmessage, (err) => {
    if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
})