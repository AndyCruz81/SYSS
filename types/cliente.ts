export interface Cliente {
    IdPersona: number;
    IdTipoPersona: number;
    PrimerNombre: string;
    SegundoNombre: string | null;
    PrimerApellido: string;
    SegundoApellido: string | null;
    IdGenero: number;
    IdEstadoCivil: number;
    FechaNacimiento: string;
    IdNacionalidad: number;
    Identificacion: string;
    IdTipoDocumento: number;
    CorreoElectronico: string;
    Telefono: string;
    FechaCreacion: string;
    UsuarioCreacion: number;
}