import { SecureAdmin } from './../../admin/model/admin';
import { AuthService } from './auth.service';
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private _authService: AuthService) {
        super({
            usernameField: 'login'
        });
    }

    async validate(login: string, password: string): Promise<SecureAdmin> {
        const admin = await this._authService.validateAdmin(login, password);

        if (!admin) {
            throw new UnauthorizedException();
        }
        return admin;
    }
}