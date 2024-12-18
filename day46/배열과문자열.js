// [1] 배열 변수 선언
let pointArray = [100,50,30];
// [2] 배열 변수의 전체 요소 호출
console.log(pointArray); // [100,50,30]
// [3] 특정한 위치의 요소 호출
console.log(pointArray[1]); // 두번째 위치한 50 호출
// [4] 배열의 전체 요소 수정
pointArray = ['유재석','강호동','신동엽']
console.log(pointArray);
// [5] 배열의 특정 요소 값 수정
pointArray[1] = '강호동2';
console.log(pointArray);
// [6] 배열의 요소 추가/삽입
pointArray.push('서장훈');
console.log(pointArray);

pointArray.splice(1,0,'하하'); // 두번째 인덱스에 하하라는 요소 삽입
console.log(pointArray);

pointArray.splice(1,1); // 두번째 요소에서 1개를 삭제
console.log(pointArray);

pointArray.splice(0,3); // 첫번째 요소에서부터 3개를 삭제
console.log(pointArray); 

let searchIndex = pointArray.indexOf('서장훈');
console.log(searchIndex);

searchIndex = pointArray.indexOf('유재석');
console.log(searchIndex); // -1 찾을 값인 유재석이 존재하지 않으므로 -1 반환

searchIndex = pointArray.includes('서장훈');
console.log(searchIndex); // true

searchIndex = pointArray.includes('유재석');
console.log(searchIndex); // false

// 실습1 : 점수 3개를 하나의 배열에 저장하시오.
// 배열 내 점수들의 합계와 평균을 계산

let sum1 = Number(prompt('첫번째 점수 입력'));
let sum2 = Number(prompt('두번째 점수 입력'));
let sum3 = Number(prompt('세번째 점수 입력'));

let numArray = [sum1,sum2,sum3];

let result1 = numArray[0] + numArray[1] + numArray[2];
console.log(result1);
let result2 = result1 / 3;
console.log(result2);

// 실습2 : 새로운 학생명을 입력받아 배열 내 이미 존재하면 true 아니면 false를 출력하시오.
// let 학생목록 = ['유재석','강호동','신동엽']

let 학생목록 = ['유재석','강호동','신동엽'];
let 학생명 = prompt('학생명 : ');
let 검색결과 = 학생목록.includes(학생명) ? '중복입니다.' : '중복이 아닙니다.';
console.log(검색결과);