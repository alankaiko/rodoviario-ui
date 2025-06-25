import {AbstractEntity} from "../../core/AbstractEntity";
import {DocumentoFiscal} from "./documento-fiscal";
import {Pessoa} from "./pessoa";

export class NotaFiscalAgendamento extends AbstractEntity {
    numero: Number;

    serie: Number;

    chave: string;

    dataEmissao: Date;

    emissor: Pessoa;

    destinatario: Pessoa;

    comprador: Pessoa;

    correntista: Pessoa;

    terminalIntegradorRecepcao: Pessoa;

    terminalIntegradorDestino: Pessoa;

    documentoFiscal: DocumentoFiscal;

    pesoFiscal: Number;

    dataValidacao: Date;
}