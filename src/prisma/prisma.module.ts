import { DynamicModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

export const PRISMA_OPTIONS = 'PRISMA_OPTIONS';

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {
    static register(options: any): DynamicModule {
        return {
            module: PrismaModule,
            providers: [
                {
                    provide: PRISMA_OPTIONS,
                    useValue: options,
                },
                PrismaService,
            ],
            exports: [PrismaService]
        }
    }
}
