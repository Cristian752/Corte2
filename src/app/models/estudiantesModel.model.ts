export class Agenda {
    public id_trabajo_agenda?: number;
    public fecha: string;
    public hora_inicio: string;
    public hora_fin: string;
    public id_espacio?: number;
    public id_trabajo?: number;

    constructor(raw: any){
        if(raw.hasOwnProperty('id_trabajo_agenda')){
            this.id_trabajo_agenda = raw.id_trabajo_agenda;
        }
        if(raw.hasOwnProperty('fecha')){
            this.fecha = raw.fecha;
        }
        if(raw.hasOwnProperty('hora_inicio')){
            this.hora_inicio = raw.hora_inicio;
        }
        if(raw.hasOwnProperty('hora_fin')){
            this.hora_fin = raw.hora_fin;
        }
        if(raw.hasOwnProperty('id_espacio')){
            this.id_espacio = raw.id_espacio;
        }
        if(raw.hasOwnProperty('id_trabajo')){
            this.id_trabajo = raw.id_trabajo;
        }
    }
}