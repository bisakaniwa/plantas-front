export interface Plantinha {
    id?: number;
    tipo: string;
    genero: string;
    especie: string;
    especificacao?: string;
    nomePopular?: string;
    imagem?: string;
    detalhe?: string;
}

export interface Cuidados extends Plantinha {
    id?: number;
    plantaId: number;
    substrato?: string;
    rega?: string;
    iluminacao?: string;
    temperatura?: string;
    umidade?: string;
    ventos?: string;
}