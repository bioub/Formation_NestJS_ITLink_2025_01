import { Module } from '@nestjs/common';

@Module({
    providers: [
        {
            provide: 'CONFIG',
            useValue: {
                searchFields: ['name']
            }
        }
    ],
    exports: ['CONFIG']
})
export class ConfigModule {

}
