import {EnumEstado} from "../enuns/enum-estado";

export class Endereco {
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: EnumEstado;
    cep: string;
    numero: string;
}