export const calcualteAvgRate = (arrayOfRe) => {
    let sumOfRate = 0;


    if (arrayOfRe && arrayOfRe.length !== 0) {
        const countOfRate = arrayOfRe.length;
        arrayOfRe.forEach(element => {
            sumOfRate = sumOfRate + element.rate
        });
        const result = sumOfRate / countOfRate
        return result
    }


}