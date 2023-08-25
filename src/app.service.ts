import { Injectable } from '@nestjs/common';

export interface InitialPath {
  status: boolean;
  company: string;
}

@Injectable()
export class AppService {
  getHello(): InitialPath {
    return {
      status: true,
      company: 'Elisio Mualumene',
    };
  }
}
