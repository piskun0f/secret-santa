import { SecureAdmin } from './../../admin/model/admin';
import { AdminRepository } from './../../admin/service/admin.repository';
import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {
    constructor(private _adminRepository: AdminRepository) {
    }

    async validateAdmin(login: string, password: string): Promise<SecureAdmin | undefined> {
        const admin = await this._adminRepository.findByLogin(login);
        if (admin && admin.password == password) {
            const {password, ...secureAdmin} = admin;
            return secureAdmin;
        }
        return undefined;
    }
}