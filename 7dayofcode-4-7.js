let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;

while(intentos < 3) {
    let numeroUsuario = parseInt(prompt("Ingrese un número entre 0 y 10"));
    if (numeroSecreto === numeroUsuario) {
        alert("Adivinaste el número.");
        break;
    } else {
        intentos++;
        let intentosRestantes = 3 - intentos;
        if (intentosRestantes > 0) {
            alert(No adivinaste el número, te quedan ${intentosRestantes} ${(intentos === 1) ? "intento" : "intentos"});
        } else {
            alert(No adivinaste. El número era ${numeroSecreto})
        }
    }
}