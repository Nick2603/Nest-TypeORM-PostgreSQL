import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigWrapperModule } from 'src/config/config-wrapper.module';
import { ConfigWrapperService } from 'src/config/config-wrapper.service';

export const TypeOrmModuleSetUp = TypeOrmModule.forRootAsync({
  imports: [ConfigWrapperModule],
  useFactory: (configWrapperService: ConfigWrapperService) => ({
    type: 'postgres',
    host: configWrapperService.dbHost,
    port: configWrapperService.dbPort,
    username: configWrapperService.dbUser,
    password: configWrapperService.dbPassword,
    database: configWrapperService.dbName,
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }),
  inject: [ConfigWrapperService],
});
