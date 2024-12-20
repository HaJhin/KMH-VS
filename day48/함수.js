// [1] 함수 정의 하기
function myFunc(x,y) {
    console.log('myFunc 실행');
    return true;
} // f ed

// [2] 함수를 실행하기
let result1 = myFunc(3,5);
console.log(result1);

console.log(myFunc(7,3));

// [3] 수학 1차함수 정의/만들기
function 함수1차(a,b,c) {
    let result = (a*b) + c; // 1차 함수
    return result;
} // f end 

// [4] 1차함수 실행하기
let result2 = 함수1차(3,2,7)
console.log(result2);

// [5] 믹서기 함수 만들기
function mixFunc(fruit) {
    let result = fruit + '쥬스';
    return result;
}

// [6] 믹서기 함수 사용하기
console.log(mixFunc('바나나'));
console.log(mixFunc('딸기'));

// [실습1] prompt() 함수로 두개의 정수를 입력받아 덧셈 함수에 입력받은 값을 전달하여 결과 출력

let n1 = Number(prompt('첫번째 수 입력'));
let n2 = Number(prompt('두번째 수 입력'));

function 덧셈함수(x,y) {
    let result = (x + y);
    return result;
}

console.log(덧셈함수(n1,n2));

// [실습2] 뺄셈함수, 곱셈 함수 구현

function 뺄셈함수(x,y) {
    let result = (x - y);
    return result;
}

console.log(뺄셈함수(n1,n2));

function 곱셈함수(x,y) {
    let result = (x * y);
    return result;
}

console.log(곱셈함수(n1,n2));