export interface UserDto {
    id: number;
    email: string;
    username: string;
    active: boolean;
}

export interface CreateUserDto {
    email: string;
    password: string;
    info?: Info;
    address?: Address;
}

export interface UpdateUserDto {
    id: number;
    email: string;
    password: string;
    info?: Info;
    address?: Address;
}

export interface Info {
    firstName: string;
    lastName: string;
    birthDate: number;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
}
