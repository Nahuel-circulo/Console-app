import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('save-file.use-case', () => {

  /* afterEach(() => {
    fs.rmSync('outputs', { recursive: true });
  }); */

  test('should save file with default values', () => {

    const saveFile = new SaveFile()
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content'
    }

    const result = saveFile.execute(options)

    const fileExists = fs.existsSync(filePath)

    expect(result).toBe(true)
    expect(fileExists).toBe(true)

  })

  test('should save file with custom values', () => {


    const saveFile = new SaveFile();

    const options = {
      fileContent: 'custom content',
      fileDestination: 'custom-outputs',
      fileName: 'custom-file'
    }

    const filePath = `${options.fileDestination}/${options.fileName}.txt`

    const result = saveFile.execute(options)
    const fileExists = fs.existsSync(filePath)

    expect(result).toBe(true)
    expect(fileExists).toBe(true)

  })

})