export interface SecureAdmin {
    id: number;
    login: string;
}

export interface Admin extends SecureAdmin {
    password: string;
}

