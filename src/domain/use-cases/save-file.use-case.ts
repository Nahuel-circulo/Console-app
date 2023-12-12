
import fs from 'fs'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

  constructor(
    /* repository: StorageRepository */
  ) { }

  execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }: Options): boolean {
    try {

      // la creacion del archivo deberia estar en un DataSource
      fs.mkdirSync(fileDestination, { recursive: true });

      fs.writeFile(`${fileDestination}/${fileName}.txt`, fileContent, (err) => {
        if (err) throw err;
      })

      return true;
    } catch (error) {

      console.error(error)
      return false;

    }
  }
}