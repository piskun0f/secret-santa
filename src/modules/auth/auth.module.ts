import { AdminModule } from './../admin/admin.module';
import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';

@Module({
    imports: [AdminModule, PassportModule, AuthModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
