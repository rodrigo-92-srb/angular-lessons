export interface Celular{
    id: number;
    nome: string;
    descricao?: string; // ? siginifica que atributo descricao é opcional
    esgotado: boolean;
}