import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";

export class ClienteDto {

    
    @IsString({ message:  'Não é um nome válido'})
    @MinLength(3, { message: 'O campo nome deve ter nom mínimo 3 caracteres'})
    @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres'})
    nome: string;

    @IsString({ message:  'Não é um sobrenome válido'})
    @MinLength(3, { message: 'O campo sobrenome deve ter nom mínimo 3 caracteres'})
    @MaxLength(30, { message: 'O campo sobrenome deve ter no máximo 30 caracteres'})
    sobrenome: string;

    @IsString({ message: 'Não é uma idade válido'})
    @MinLength(1, { message: 'O campo idade deve ter no mínimo 1 caracteres'})
    idade: string;

    @IsString({ message: 'Não é um genero válido'})
    genero: string;

    @IsString({ message: 'Não é um CPF válido'})
    @MinLength(10, { message: 'O campo CPF deve ter no mínimo 10 caracteres'})
    @MaxLength(11, { message: 'O campo CPF deve ter no máximo 11 caracteres'})
    cpf: string;

    @IsString({ message: 'Não é um RG válido'})
    @MinLength(8, { message: 'O campo RG deve ter no mínimo 8 caracteres'})
    @MaxLength(11, { message: 'O campo RG deve ter no máximo 11 caracteres'})
    rg: string;

    @IsString({ message: 'Não é um Telefone válido'})
    @MinLength(8, { message: 'O campo Telefone deve ter no mínimo 8 caracteres'})
    @MaxLength(20, { message: 'O campo Telefone deve ter no máximo 20 caracteres'})
    telefone: string;

    @IsString({ message: 'Não é um email válido'})
    @MinLength(8, { message: 'O campo email deve ter no mínimo 8 caracteres'})
    @MaxLength(80, { message: 'O campo email deve ter no máximo 80 caracteres'})
    email: string;

    @IsString({ message: 'Não é um endereco válido'})
    @MinLength(30, { message: 'O campo endereco deve ter no mínimo 30 caracteres'})
    @MaxLength(100, { message: 'O campo endereco deve ter no máximo 100 caracteres'})
    endereco: string;

    @IsString({ message: 'Não é um estado civil válido'})
    @MinLength(5, { message: 'O campo estado civil deve ter no mínimo 5 caracteres'})
    @MaxLength(30, { message: 'O campo estado civil deve ter no máximo 30 caracteres'})
    estadoCivil: string;


}