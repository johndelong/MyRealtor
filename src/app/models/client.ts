export interface IClient {
  $key?: string;
  // completed: boolean;
  // createdAt: number;
  // title: string;
}

export class Client implements IClient {
  constructor(
      public firstName: string,
      public lastName: string,
      public email: string
    ) {}
}
