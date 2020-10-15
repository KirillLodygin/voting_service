export const randNumArr = () => {
    let arr = [];
    let firstNum = Math.floor(Math.random() * 6);
    arr[0] = firstNum;
    arr[1] = (firstNum & 1) ? --firstNum : ++firstNum;
    return arr;
};