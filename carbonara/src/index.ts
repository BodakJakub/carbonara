import fs = require('fs');
import path = require('path');

import { IReader } from './interfaces/interfaces';
import Config from './Config';

class Reader implements IReader {
  public filePath: any;
  constructor(filePath: any) {
    this.filePath = filePath;
  }
  
  /**
   *
   * Reads from an html file
   * 
   * @param path - path to the file
   */
  
  public readHtml() {
    fs.readFile(this.filePath, (read, err) => {
      if (err) {
        throw err;
      }
      console.log(read)
    })
  }
  
  /**
   *
   * Gets current path
   *
   */
  
  private getPath() {
    return this.filePath;
  }
}

const configObj: any = new Config('../test_json/config.json');
const configPath: string = configObj.getConfig(configObj.config);
console.log('yxxx', configPath)

const reader = new Reader(path.relative(__filename, 'D:\Code\carbonara\test_html'));
  