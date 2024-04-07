import { ConfigModuleSetUp } from './config/config.module';
import { Module } from '@nestjs/common';
import { TypeOrmModuleSetUp } from './database/type-orm.module';
import { UsersModule } from './user/users.module';
import { ConfigWrapperModule } from './config/config-wrapper.module';
import { TicketsModule } from './ticket/tickets.module';
import { UnhandledExceptionHandlerModule } from './cqrs/unhandled-exception.handler.module';

@Module({
  imports: [
    ConfigModuleSetUp,
    ConfigWrapperModule,
    TypeOrmModuleSetUp,
    UsersModule,
    TicketsModule,
    UnhandledExceptionHandlerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
