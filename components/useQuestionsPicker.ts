import * as JSONData from '@/assets/test.json';
import { QuestionType } from '@/components/questions/QuestionTypes';

const categories = {
    car: JSON.parse(JSON.stringify(JSONData[0])), // 3
    driver: JSON.parse(JSON.stringify(JSONData[1])), // 10 max: 
    //environment: JSON.parse(JSON.stringify(JSONData[2])),
    //first_aid: JSON.parse(JSON.stringify(JSONData[3])),
    mechanical: JSON.parse(JSON.stringify(JSONData[4])), // 4
    //miscellaneous: JSON.parse(JSON.stringify(JSONData[5])),
    road: JSON.parse(JSON.stringify(JSONData[6])), // 7
    safety: JSON.parse(JSON.stringify(JSONData[7])), // + traffic => 8
    traffic: JSON.parse(JSON.stringify(JSONData[8])), // + safety => 8
    users: JSON.parse(JSON.stringify(JSONData[9])) // 8
};

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

const shuffleArr = (arr: QuestionType[]) => {
    const array = [...arr];

    let i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}

export const getNumbers = (quantity: number, maxRange: number) => {
    let returnArr: number[] = [];
    while (returnArr.length < quantity) {
      const number = getRandomInt(maxRange);
      if (returnArr.indexOf(number) === -1 ) returnArr.push(number)
    }
    return returnArr;
}

export const getQuestions = () => {
    const questionArr: QuestionType[] = [];
    // max 20 for all
    const carNumbers = getNumbers(3, 20);
    carNumbers.forEach((carNumber)=> {
        //categories.driver[1].questions.length
        questionArr.push(categories.car[1].questions[carNumber]);
    })

    const driverNumbers = getNumbers(10, 20);
    driverNumbers.forEach((driverNumber)=> {
        //categories.driver[1].questions.length
        questionArr.push(categories.driver[1].questions[driverNumber]);
    })

    const mechanicalNumbers = getNumbers(4, 20);
    mechanicalNumbers.forEach((mechanicalNumber)=> {
        //categories.driver[1].questions.length
        questionArr.push(categories.mechanical[1].questions[mechanicalNumber]);
    })

    const roadNumbers = getNumbers(7, 20);
    roadNumbers.forEach((roadNumber)=> {
        //categories.driver[1].questions.length
        questionArr.push(categories.road[1].questions[roadNumber]);
    })

    const safetyAndTrafficNumbers = getNumbers(8, 40);
    const satefyAndTrafficArr: QuestionType[] = [...categories.safety[1].questions, ...categories.traffic[1].questions];
    const shuffledSafetyAndTrafficArr: QuestionType[] = shuffleArr(satefyAndTrafficArr);
    safetyAndTrafficNumbers.forEach((safetyAndTrafficNumber)=> {
        //categories.driver[1].questions.length
        questionArr.push(shuffledSafetyAndTrafficArr[safetyAndTrafficNumber]);
    })

    const usersNumbers = getNumbers(8, 20);
    usersNumbers.forEach((usersNumbers)=> {
        //categories.driver[1].questions.length
        questionArr.push(categories.users[1].questions[usersNumbers]);
    })

    const returnArr = shuffleArr(questionArr)

    return returnArr;
}
