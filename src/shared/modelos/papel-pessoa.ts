import {AbstractEntity} from "../../core/AbstractEntity";
import {Pessoa} from "./pessoa";
import {TipoPessoa} from "./tipo-pessoa";
import {UnidadeOperacional} from "./unidade-operacional";

export class PapelPessoa extends AbstractEntity {
    pessoa: Pessoa;

    tipoPessoa: TipoPessoa;

    unidadeOperacional: UnidadeOperacional;
}