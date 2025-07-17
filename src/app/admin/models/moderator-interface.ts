export interface ModeratorDto {
    id: number;
    email: string;
    active: boolean;
    firstName: string;
    lastName: string;
    role: string;
}

export interface CreateModeratorDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UpdateModeratorDto {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
