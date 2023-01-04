import { Injectable } from '@nestjs/common';

// Services são responsáveis por prover uma lógica de negócio

@Injectable()
export class AppService {
  getStatus(): any {
    return { message: 'Este API está online' , status: 200 };
  }
}
