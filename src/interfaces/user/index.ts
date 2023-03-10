import { ReactNode } from "react";

export interface IUserProvidersProps{
    children: ReactNode
}

export interface IAddressCreate{
    cep: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement: string
}

export interface IUserRaw{
    name: string,
    email: string,
    cpf: string,
    cellPhone: string,
    birthDate: string,
    description: string,
    cep: string,
    state: string,
    city: string,
    street: string,
    number: string,
    complement: string,
    isAdvertiser: boolean,
    password: string,
    confirmPassword: string
}

export interface IUserCreate{
    name: string,
    email: string,
    cpf: string,
    cellPhone: string,
    birthDate: string,
    description: string,
    address: IAddressCreate,
    isAdvertiser: boolean,
    password: string,
    confirmPassword: string
}

export interface IUserUpdate{
    name?: string,
    email?: string,
    cpf?: string,
    cellPhone?: string,
    birthDate?: string,
    description?: string,
    address?: IAddressCreate,
    isAdvertiser?: boolean,
    password?: string,
    confirmPassword?: string
}

export interface IUserLogin{
    email: string,
    password: string
}

