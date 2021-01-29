import * as redisStore from 'cache-manager-redis-store';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TerminusModule } from '@nestjs/terminus';
import { join } from 'path';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Environment } from './config/configTypes';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { GqlJwtAuthGuard } from './auth/auth.guard';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { applyResolversEnhanceMap, resolvers, ResolversEnhanceMap } from 'src/prisma-typegraphql';

const enhanceMap: ResolversEnhanceMap = {
    User: {
        users: [(...args) => console.log(args)],
    }
}

@Module({
    imports: [
        // Load .env variables
        ConfigModule.forRoot({ isGlobal: true }),
        // Serve static files from $APP_ROOT/client directory
        ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
        // Healthcheck,
        TerminusModule,
        // Prisma
        PrismaModule,
        // Graphql
        GraphQLModule.forRootAsync({
            imports: [ConfigModule, PrismaModule],
            inject: [ConfigService, PrismaService],
            useFactory: (
                configService: ConfigService,
                prismaService: PrismaService,
            ) => {
                // FOR TESTING, WILL MOVE
                applyResolversEnhanceMap(enhanceMap);

                return ({
                    autoSchemaFile: 'schema.gql',
                    context: ({ ...ctx }) => ({ ...ctx, prisma: prismaService }),
                    // installSubscriptionHandlers: true,
                    ...(configService.get<Environment>('APP_ENVIRONMENT') === Environment.Production ? {
                        playground: false,
                        debug: false,
                    } : {}),
                });
            },
        }),
        // Application Modules
        AuthModule,
    ],
    controllers: [HealthController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: GqlJwtAuthGuard,
        },
        AppService,
        ...resolvers as any[],
    ],
})
export class AppModule { }
