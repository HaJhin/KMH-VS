// [1] 람다식 함수 정의하기.
function method1(a,b) {
    return a+b;
}
    // 람다식 함수
const method2 = (a,b) => { return a + b; }

// [2] 람다식 함수 호출하기.
    // 선언적 함수 호출
console.log(method1(2,3)); // 5
    // 람다식 함수 호출, 함수명이 없어서 호출 x
    // 람다식 함수를 호출하기 위해 상수를 호출 O
console.log(method2(2,3)); // 5

// [3] 람다식 함수의 매개변수와 리턴값
const getName = name => { 
    return `안녕, ${name}`
}

console.log(getName('마키아토')); // 안녕, 마키아토

const isEven = num => console.log(num);

isEven(123);

// [4] 람다식 함수의 활용처
const words = ['사과' , '수박' , '딸기' , '바나나']
    // 배열내 모든 요소를 하나씩 출력하시오.
    // 방법1
for(let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
    // 방법2 , 람다함수를 상수에 대입하고 forEach 적용.
words.forEach((element) => {console.log(element)});
    // 방법2 다른 시점 , 람다함수를 상수에 대입하고 forEach 적용.
const method3 = element => console.log(element)
words.forEach(method3);

    // 방법3 : map
words.map(element => console.log(element));

    // 방법3 : forEach 와 map의 차이점
let newWords = words.map(element => {return `${element}과일`});
console.log(newWords); // ['사과과일' , '수박과일' , '딸기과일' , '오렌지과일']

// 실습1 : x와 y를 매개변수를 받아서 뺄셈의 결과를 반환하는 람다 함수 정의 , 호출
// 람다식 정의
const minus = (x,y) => {return x-y;}
// 람다식 호출
console.log(minus(5,3));

// 실습2 : const score = [92 , 10 , 18 , ... ]의 모든 요소를 하나씩 출력하는 forEach 함수 사용
const scores = [92 , 72 , 35 , 86]
scores.forEach((element) => {console.log(element)});

// 실습3 : const socres = [92 , 72 , 35, 86]
// 이 배열의 모든 요소에 5점씩 추가한 새로운 배열을 map 함수로 구현하기

let plusScores = scores.map((element) => {return element+5});
console.log(plusScores);

