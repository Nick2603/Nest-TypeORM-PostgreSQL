import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configuration';

@Injectable()
export class ConfigWrapperService {
  constructor(
    private readonly configService: ConfigService<ConfigurationType>,
  ) {}

  get appPort(): number {
    return this.configService.get('appPort', { infer: true });
  }

  get dbName(): string {
    return this.configService.get('dbName', { infer: true });
  }

  get dbUser(): string {
    return this.configService.get('dbUser', { infer: true });
  }

  get dbPassword(): string {
    return this.configService.get('dbPassword', { infer: true });
  }

  get dbHost(): string {
    return this.configService.get('dbHost', { infer: true });
  }

  get dbPort(): number {
    return this.configService.get('dbPort', { infer: true });
  }
}
