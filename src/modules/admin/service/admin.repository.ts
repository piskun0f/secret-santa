import { Admin } from './../model/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRepository {
    private readonly _admins: Array<Admin>;

    constructor() {
        this._admins = [
            {
                id: 1,
                login: 'admin',
                password: 'superpassword'
            },
        ];
    }

    async findByLogin(login: string): Promise<Admin | undefined> {
        return this._admins.find(admin => login == admin.login);
    }
}
