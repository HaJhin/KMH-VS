// [1] 매개변수 X , 반환값 X
function func1() {
    console.log('func1 execute');
}

// [2] 매개변수 O , 반환값 X , 함수정의
function func2(x,y) {
    console.log(`func2.execute ${x+y}`);
}
func2(2,3);

// [3] 매개변수 o , 반환값 o , 함수정의
function func3(x,y) {
    console.log(`func3 execute`)
    let result = x + y
    return result;
}
let a = func3(3,5); // 인수값이란 함수 호출 시 전달하는 값
console.log(a); // 8

// [4] 매개변수 X , 반환값 O , 함수 정의
function func4( ) {
    console.log(`func4 execute`);
    return 10;
}

let b = func4();

console.log(b); // 10

// [실습1] 주어진 숫자가 홀수인지 짝수인지 반환하는 함수를 만들기

function 홀짝(x) {
    let result = x%2 === 0;
    if (result) {
        return "짝수입니다."
    } else {
        return "홀수입니다."
    }
}

console.log(홀짝(2));
console.log(홀짝(3));

// [실습2] 주어진 배열에서 가장 큰 수를 반환하는 함수 만들기

function findmax(arr) {
let max = 0; // 최댓값 변수 0으로 초기화
for (let i = 0; i < arr.length; i++) {
    // i는 0부터 마지막 인덱스까지 1씩 증가 반복
    if (arr[1] > max) {
        // 만약에 i번째 요소가 최댓값 변수보다 크면
        max = arr[i]; // i번째 요소를 최댓값 변수에 대입
    }
} // for ed
return max; // 배열 내 가장 큰 값 반환
} // f ed

let array1 = [3,5,2,1];
console.log(findmax(array1));

let array2 = [100,200,400,300];
console.log(findmax(array2));

// [실습3] 주어진 배열을 오름차순으로 정렬하여 반환하는 함수 만들기
    // 함수명 : arrOrderBy() , 매개변수 : 배열1개 , 반환값 : 정렬된 배열 1개
function arrOrderBy(arr) {
    for(let i = 0; i < arr.length; i++) {
        // i는 0부터 배열의 마지막 인덱스까지 1씩 증가 반복
        // for 중첩
        for(let i2 = i+1; i2 < arr.length; i2++) {
            if(arr[i] > arr[i2]) {
                // 만약에 i번째 요소가 i2번째 요소보다 크면
                // 스왑! : 두 변수간의 값의 위치 교체
                let temp = arr[i];
                arr[i] = arr[i2];
                arr[i2] = temp;
            }
        }
    } // for ed
    return arr; // 반환
} // f ed

let array3 = [10,3,5,8,11];

console.log(arrOrderBy(array3))

// [if 11번 문제 , 실습4] 3개의 정수를 오름차순 또는 내림차순하여 정렬해서 console.log() 함수로 출력하시오.

let v1 = 5;
let v2 = 9;
let v3 = 2;

if(v1 > v2) { // 첫번째 값이 두번째 값보다 크면 스왑
    let temp = v1; v1 = v2; v2 = temp;
}
if(v1 > v3) {
    let temp = v1; v1 = v3; v3 = temp;
}
if(v2 > v3) {
    let temp = v2; v2 = v3; v3 = temp;
}

console.log(`${v1} , ${v2} , ${v3}`);