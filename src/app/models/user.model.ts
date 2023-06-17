export class User {
    id_usuario?: any;
    nombre_completo?: string;
    correo?: string;
    rol?: string;
    roles?: {
        id_rol: number;
        nombre: string;
    };
}
