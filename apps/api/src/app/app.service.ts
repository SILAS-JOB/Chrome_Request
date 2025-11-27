import { Injectable } from '@nestjs/common';
import { Order as ord } from './model/request.model';


@Injectable()
export class AppService {
  getData(): string {
    return ('Hello API');
  }

  



}
