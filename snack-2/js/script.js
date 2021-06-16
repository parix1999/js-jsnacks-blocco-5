var triangoloRettangolo = {
    base : 5,
    altezza : 10
}

console.log(triangoloRettangolo.base)

var Ipotenusa = Math.sqrt((triangoloRettangolo.base * triangoloRettangolo.base) +(triangoloRettangolo.altezza*triangoloRettangolo.altezza));
console.log(Ipotenusa);

// calcolo del perimetro:
var sommaPerimetro = Ipotenusa + triangoloRettangolo.base + triangoloRettangolo.altezza;
console.log(sommaPerimetro)
// Calcolo area:
var area = (triangoloRettangolo.base * triangoloRettangolo.altezza) / 2;
console.log(area);