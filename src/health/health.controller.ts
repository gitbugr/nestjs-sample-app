import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DNSHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private dns: DNSHealthIndicator,
        private configService: ConfigService,
    ) { }

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([
            () => this.dns.pingCheck('main-site', this.configService.get<string>('APP_URL')),
        ]);
    }
}
