import {AbstractEntity} from "../../core/AbstractEntity";
import {Contato} from "./contato";
import {Endereco} from "./endereco";

export class Pessoa extends AbstractEntity {
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    inscricaoEstadual: string;
    endereco: Endereco;
    contato: Contato;

}