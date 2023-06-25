class card {

    constructor(name, cost) {

        this.name = name;
        this.cost = cost;

    }
}

class unit extends card {

    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;

    }

    attack(unit_target) {
        //reduce target res by power
        console.log("antes unit_target.res: " + unit_target.res);
        console.log("power: " + this.power);
        unit_target.res -= this.power;
        console.log("despues unit_target.res: " + unit_target.res);

    }
}

class effect extends card {

    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;

    }

    play(unit_target, stat, magnitude) {

        if (stat = "Resiliencia") {
            console.log("unit_target.res: " + unit_target.res);
            console.log("magnitude: " + magnitude);
            console.log("stat: " + stat);
            unit_target.res += magnitude;
            console.log("incrementa res a " + unit_target.res);
        }
        else if (stat = "Poder") {
            unit_target.power += magnitude;
            console.log("incrementa power a " + unit_target.power);
        }

    }

}

console.log("********** Turno 1");
console.log("Create ninja_rojo unit");
const ninja_rojo = new unit("Ninja Cinturón Rojo", 3, 3, 4);

console.log("Create Algoritmo dificil");
const algo_dificil = new effect("Algoritmo dificil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", 3);

console.log("Create Rechazo de promesa");
const rechazo_promesa = new effect("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", -2);


console.log("Create Programacion Pareja");
const programacion_pareja = new effect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "Poder", +2);


console.log("********** Turno 1");
console.log("Player 1 juega algo_dif en Ninja Rojo");
algo_dificil.play(ninja_rojo, algo_dificil.stat, algo_dificil.magnitude);

console.log("ninja rojo, resiliencia: " + ninja_rojo.res + ", poder = " + ninja_rojo.power);

console.log("********** Turno 2");
console.log("Create ninja_negro unit");
const ninja_negro = new unit("Ninja Cinturón Negro", 4, 5, 4);


console.log("********** Turno 2");
console.log("Player 2 juega rechazo de promesa en Ninja Rojo");
rechazo_promesa.play(ninja_rojo, rechazo_promesa.stat, rechazo_promesa.magnitude);

console.log("********** Turno 3");
console.log("Player 1 juega programacion en pareja en Ninja Rojo");
programacion_pareja.play(ninja_rojo, programacion_pareja.stat, programacion_pareja.magnitude);

console.log("********** Turno 3");
console.log("Player 1 tiene ataque Ninja Rojo Ninja Negro");
ninja_rojo.attack(ninja_negro);




