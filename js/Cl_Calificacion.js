export default class Cl_Calificacion{
    constructor(nombre, notafinal){
        this.nombre = nombre;
        this.notafinal = notafinal;
    }

    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }

    set notafinal(n){
        this._notafinal = +n;
    }
    get notafinal(){
        return this._notafinal;
    }

    Calificacion(){
        if(this.notafinal >= 90 && this.notafinal <= 100){
            return "A";
        }
        else if(this.notafinal >= 80 && this.notafinal <= 89){
            return "B";
        }
        else if(this.notafinal >= 70 && this.notafinal <= 79){
            return "C";
        }
        else if(this.notafinal >= 60 && this.notafinal <= 69){
            return "D";
        }
        else if(this.notafinal >= 0 && this.notafinal <= 59){
            return "F";
        }
    }

}