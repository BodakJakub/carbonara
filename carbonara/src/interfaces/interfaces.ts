export interface IConfig {
  config: string;
  getConfig: (path: string) => any;
}

export interface IReader {
  filePath: any;
  readHtml: () => any;
}
