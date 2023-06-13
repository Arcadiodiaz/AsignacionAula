export class Asignacion {
    id?: any;
    fecha?: string;
    hora_inicio?: string;
    hora_fin?: string;
    aula?: string;
    usuario?: string;
    usuarios?: {
        id_usuario: number;
        nombre: string;
        apellido: string;
        correo: string;
        rol: number;
    };
    aulas?: {
        id_aula: number;
        nombre: string;
        capacidad: number;
        tipo: string;
        estado: string;
        bloque: string;
    };
}
