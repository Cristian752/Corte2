export class Covidcol {
    public id_de_caso?: number;
    public edad: number;
    public sexo: string;
    public ciudad_de_ubicaci_n: string;
    public estado: string;
    public atenci_n: number;

    constructor(raw: any){
        if(raw.hasOwnProperty('id_de_caso')){
            this.id_de_caso = raw.id_de_caso;
        }
        if(raw.hasOwnProperty('edad')){
            this.edad = raw.edad;
        }
        if(raw.hasOwnProperty('sexo')){
            this.sexo = raw.sexo;
        }
        if(raw.hasOwnProperty('ciudad_de_ubicaci_n')){
            this.ciudad_de_ubicaci_n = raw.ciudad_de_ubicaci_n;
        }
        if(raw.hasOwnProperty('estado')){
            this.estado = raw.estado;
        }
        if(raw.hasOwnProperty('atenci_n')){
            this.atenci_n = raw.atenci_n;
        }
    }
}