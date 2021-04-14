export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export function roll(max) { // -- funkcija kuri isridena skaiciu
    let x = Math.floor(Math.random() * Math.floor(max));
    if (x === 0) {
        x = 1;
    }
    return x;
}

export function result() {
    let x;
    x = roll(6);
    return x;
}
