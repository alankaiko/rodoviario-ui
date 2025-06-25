export abstract class AbstractEntity {
    codigo!: number;

    dateRegister!: Date;

    datacadastro: Date;

    bloqueioEdicao: boolean;

    idUsuarioBloqueio: number;

    dataBloqueio: Date;
}