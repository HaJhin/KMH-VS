// [1] 반복을 사용하는 이유
console.log('안녕하세요!');
console.log('안녕하세요!');
console.log('안녕하세요!');
console.log('안녕하세요!');
console.log('안녕하세요!');
    // 2.
for (let i = 1; i <=5; i++) {
    // i는 1부터 5까지 1씩증가 반복
    console.log('안녕하세요!');
}

// [2] 반복문 사용 시 중요한 점
    // 1. 1부터 5까지 출력하기
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);

// 1. 반복되는 코드 : console.log();
// 2. 반복되지 않는 코드 : 1~5
// 3. 반복되지 않는 코드 패턴/규칙 : 1부터 5까지 1씩 증가
    // 2. 반복문이 있을 때
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// [3] 1부터 10까지 누적합계

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// [4] 구구단 2단 출력

for (let i = 1; i <= 9; i++) {
    console.log('2 * ' + i + ' : ' + (2*i));
}

// [5] 구구단 전체 출력
for (let i = 2; i <= 9; i++) {
    for (let x = 1; x <= 9; x++) {
        console.log(i + ' X ' + x + ' : ' + (i*x));
    }
}

let outHTML = ``;
// [6] 직삼각형 출력
for (let i = 1; i <=5; i++) {
    for (let s = 1; s <= i; s++) {
        outHTML += `★`
    }
    outHTML += '<br/>'
} // for ed

let body마크업객체 = document.querySelector(`body`);
body마크업객체.innerHTML = outHTML;

// [7] 배열과 반복문의 관계
let 과일배열 = [`사과` , `포도` , `딸기`];
 // 과일배열 내 모든 요소 출력
for (let i = 0; i < 과일배열.length; i++) {
    console.log(과일배열[i]);
}

// [8] 반복문의 주요 키워드
// 1. continue;
for(let i = 1; i <= 5; i++) {
    if( i == 3) {
        continue;
    }
    console.log(i);
}