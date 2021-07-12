import { Module, Global } from '@nestjs/common';

const API_KEY = '123456785';
const API_KEY_PROD = 'PROD2157412523SA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'Prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
