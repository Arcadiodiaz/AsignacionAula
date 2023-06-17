export class Assignment {
    id_asignacion?: any;
    fecha?: string;
    hora_inicio?: string;
    hora_fin?: string;
    aula?: string;
    usuario?: string;
    usuarios?: {
        id_usuario: number;
        nombre_completo: string;
        correo: string;
        rol: number;
    };
    aulas?: {
        id_aula: number;
        nombre: number;
        capacidad: number;
        tipo: string;
        estado: string;
        bloque: number;
    };
}
