let isRegisteredEarly = true;
let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge = 19;

//assigning race number to adults who registered early
if (isRegisteredEarly && runnerAge > 18) {
    raceNumber += 1000;
}

//assigning race times
if (isRegisteredEarly && runnerAge >= 18) {
    console.log(`Participant with race number ${raceNumber} will compete at 9.30 a.m.`);
} else if (!isRegisteredEarly && runnerAge > 18) {
    console.log(`Participant with race number ${raceNumber} will compete at 11.00 a.m.`);
} else if (runnerAge < 18) {
    console.log(`Youth registrant with race number ${raceNumber} will compete at 12.30 p.m. (regardless of registration)`);
}
