import { createParamDecorator, ExecutionContext, Injectable, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '@sentry/node';
import { GraphQLError } from 'graphql';
import { PrismaService } from 'src/prisma/prisma.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        private reflector: Reflector,
        protected prismaService: PrismaService
    ) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        return true;
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return await super.canActivate(context) as boolean;
    }
}

@Injectable()
export class GqlJwtAuthGuard extends JwtAuthGuard {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const returnValue = await super.canActivate(context);
        return returnValue;
        const request = this.getRequest(context);
        if (request.user) {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id: request.user.id
                }
            });
        }
        return returnValue;
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}

export const CurrentUser = createParamDecorator(
    (_: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    },
);
