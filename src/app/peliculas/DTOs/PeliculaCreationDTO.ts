export interface PeliculaCreationDTO 
{
    titulo: string;
    resumen: string;
    triler: string;
    enCine: Boolean;
    poster: File;
    fechaLanzamiento: Date;    
}

export interface PeliculaDTO 
{
    titulo: string;
    resumen: string;
    triler: string;
    enCine: Boolean;
    poster: string;
    fechaLanzamiento?: Date;    
}