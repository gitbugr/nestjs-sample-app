import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return '<h1>Hey! What\'s up</h1>';
    }
}
