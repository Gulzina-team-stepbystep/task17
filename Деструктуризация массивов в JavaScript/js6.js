function getDay() {
    return (new Date).getDate();
}

function getMonth() {
    return (new Date).getMonth();
}

function getYear() {
    return (new Date).getFullYear();
}

let arr = [2022, 04, 01];
let [year = getYear(), month = getDay(), day = getDay()] = arr;

console.log(year);
console.log(month);
console.log(day);