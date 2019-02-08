import fs = require('fs');
import pathModule = require('path');

import { IConfig } from './interfaces/interfaces';

export default class Config implements IConfig {
  public config: string;
  constructor(config: string) {
    this.config = config;
  }
  
  getConfig(path: string) {
    const content: string = fs.readFileSync('../test_json/config.json', 'utf-8');
    const contentJson = JSON.parse(content);
    const contentNormalized = pathModule.normalize(contentJson.input);
    return contentJson.input;
  }
}