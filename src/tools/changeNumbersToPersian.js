import { numberToWords, digitsEnToFa, verifyIranianNationalId } from '@persian-tools/persian-tools';

export default function ChangeNumbersToPersina(num) {
    const changeToPersian = digitsEnToFa(num) + " " + "هزار تومان"
    return changeToPersian
}

export const ChangeNumberToPersianForPhone = (num) => {
    const changeToPersian = digitsEnToFa(num);
    return changeToPersian
}

