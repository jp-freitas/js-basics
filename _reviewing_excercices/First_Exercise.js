function calculate(note) {
    let noteFixed = note.toFixed(2);

    let noteA = noteFixed >= 90 && noteFixed <= 100;
    let noteB = noteFixed >= 80 && noteFixed <= 89;
    let noteC = noteFixed >= 70 && noteFixed <= 79;
    let noteD = noteFixed >= 60 && noteFixed <= 69;
    let noteF = noteFixed < 60 && noteFixed >= 0;

    let finalNote;

    if (noteA) {
        finalNote = "A";
    } else if (noteB) {
        finalNote = "B";
    } else if (noteC) {
        finalNote = "C";
    } else if (noteD) {
        finalNote = "D";
    } else if (noteF) {
        finalNote = "F";
    } else {
        finalNote = "Nota inválida";
    }

    return finalNote;
}

console.log(calculate(100));
console.log(calculate(-4));
console.log(calculate(104));
console.log(calculate(5));
console.log(calculate(69));
console.log(calculate(8));
console.log(calculate(98));
console.log(calculate(72));
console.log(calculate(03));
console.log(calculate(46));
console.log(calculate(28));
console.log(calculate(62));
console.log(calculate(78));