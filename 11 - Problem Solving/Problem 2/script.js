// Imagine you've been assigned to write a program for a school that needs to determine which test was the hardest for the students. Your program should be able to take in an object as an argument that has a list of students with their respective lists of grades. The output of the program should be able to clearly tell the user which test was the hardest (lowest class average).

const grades = {
    Ron: [90, 89, 99, 87, 100, 74],
    Leslie: [78, 74, 92, 87, 77, 81],
    Tom: [77, 61, 89, 47, 57, 83],
    Andy: [35, 54, 44, 58, 39, 41]
}


//find the length of our array
const numGrades = grades[Object.keys(grades)[0]].length;

//do a loop for that length
function hardestTest(grades) {
    const subjectTotalArr = [];
    for (let i = 0; i < numGrades; i++) {
        let subjectTotal = 0;
        let numOfStudents = 0;
        for (student in grades) {
            //get each grade per person and add them together
            subjectTotal += grades[student][i];
            //total number of students for average
            numOfStudents++;
        }
        subjectTotalArr.push(Math.floor(subjectTotal / numOfStudents));
    }
    const hardestTest = Math.min(...subjectTotalArr);
    const indexHardestTest = subjectTotalArr.indexOf(hardestTest) + 1;
    console.log(`The hardest test of all with an average of ${hardestTest} is test number ${indexHardestTest}!`);
}

hardestTest(grades);
