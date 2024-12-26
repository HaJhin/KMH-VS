// [1] fetch 함수를 이용한 GET 요청
/*
    fetch('요청할URL')                    <-- 자바의 컨트롤러URL 작성
        .then(respone => respone.json()) <--  요청 결과를 JSON 형식으로 변환
        .then(data => {실행문;})          <-- 요청 결과 후 실행할 코드 작성.
        .catch(error => {실행문;})        <-- 예외 발생 시 실행할 코드 작성.

    - 옵션
        {
            method : 'GET'/'POST'/'PUT'/'DELETE' ,          <-- 4중에 사용할 HTTP 메서드를 작성한다. 생략이 GET이 된다.
            headers : {'Content-Type' : 'application/json'} <-- 서버에게 보낼 자료를 json 형식으로 보내기.
            body : JSON.stringify(전송할객체),               <-- 서버에게 보낼 객체
        }
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// [2] fetch 함수를 이용한 GET 요청 , 샘플 게시물 1개 요청 , 3번 게시물
fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// [3] fetch 함수를 이용한 POST 요청, 임의의 게시물 저장/쓰기 요청
const board = {title : '새로운 제목' , body : '새로운내용' , userId : 1}; // 임의의 게시물 객체

const option1 = {                                     // (1) fetch 함수의 전송 옵션
    method1 : 'POST' ,                                // 1. http 메서드 선택(GET/POST/PUT/DELETE 중)
    headers : {'Content-Type' : 'application/json'} , // 2. 보낼자료의 형식 설정 {'Content-Type' : 'application/json'}
    body : JSON.stringify( )                          // 3. 보낼 자료 , JSON.stringify(객체)함수 : JSON 타입 -> 문자열 타입
}
fetch('https://jsonplaceholder.typicode.com/posts' , option1)
    .then( respone => respone.json())
    .then( data => console.log(data)) // {title : '새로운 제목' , body : '새로운 내용' . userId : 1. id : 101}
    .catch(error => {console.log(error)})

// [4] fetch 함수를 이용한 PUT 요청 , 임의의 게시물 수정 요청 , 임의 게시물 수정 요청
    // 1번 게시물의 수정할 정보 객체
const upBoard = { id : 1 , title : '수정할제목' , body : '수정할내용' , userId : 1}
    // PUT 옵션 객체
const option2 = {
    method : 'PUT' , // <-- method 전송할 http 메서드 선택(GET/POST/PUT/DELETE)
    header : {'Content-Type' : 'application/json'} , // <-- 전송할 데이터의 (JSON)타입 설정
    body : JSON.stringify(upBoard) // 전송할 객체를 문자열 타입으로 변환해서 보내기
} // end
fetch('https://jsonplaceholder.typicode.com/posts/1',option2)
    .then(r => r.json()) // <-- 응답 결과는 json 타입으로 변환
    .then(d => {console.log(d)}) // <-- 응답 결과가 도착했을때
    .catch( e => {console.log(e)}) // 예외가 발생했을때

// [5] fetch 함수를 이용한 DELETE 요청 , 임의의 게시물 삭제 요청
const option3 = {
    method : 'DELETE' , // <-- 전송할 메서드 속성 : DELETE
} // ed

fetch('https://jsonplaceholder.typicode.com/posts/1',option3)
    .then(r => r.json()) // <-- 응답 결과는 json 타입으로 변환
    .then(d => {console.log(d)}) // <-- 응답 결과가 도착했을때
    .catch( e => {console.log(e)}) // 예외가 발생했을때

// ---------------------------------------------------------------------------------------

// 실습 1 : https://reqres.in/ 에서 GET 요청하여 console에 출력
// 요청 URL : 'https://reqres.in//api/users/2'

fetch('https://reqres.in//api/users/2') 
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// 실습 2 : https://reqres.in/ 에서 POST 타입으로 요청하여 console에 출력
// 요청 URL : 'https://reqres.in//api/users/'
// 보낼 데이터 : { "name":"morpheus" , "job" : "Leader"}
const board1 = { "name":"morpheus" , "job" : "Leader"}; // 임의의 게시물 객체
const newOption1 = {                                     // (1) fetch 함수의 전송 옵션
    method1 : 'POST' ,                                // 1. http 메서드 선택(GET/POST/PUT/DELETE 중)
    headers : {'Content-Type' : 'application/json'} , // 2. 보낼자료의 형식 설정 {'Content-Type' : 'application/json'}
    body : JSON.stringify( )                          // 3. 보낼 자료 , JSON.stringify(객체)함수 : JSON 타입 -> 문자열 타입
}
fetch('https://jsonplaceholder.typicode.com/posts' , newOption1)
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// 실습 3 : https://reqres.in/에서 PUT 방식을 요청하여 응답을 console에 출력
// 요청 URL : 'https://reqres.in//api/users/2'
// 보낼 데이터 : { "name":"morpheus" , "job" : "zion resident"};

const newBoard1 = { "name":"morpheus" , "job" : "zion resident"}; // 임의의 게시물 객체
const newOption2 = {                                     // (1) fetch 함수의 전송 옵션
    method1 : 'PUT' ,                                // 1. http 메서드 선택(GET/POST/PUT/DELETE 중)
    headers : {'Content-Type' : 'application/json'} , // 2. 보낼자료의 형식 설정 {'Content-Type' : 'application/json'}
    body : JSON.stringify(newBoard1)                          // 3. 보낼 자료 , JSON.stringify(객체)함수 : JSON 타입 -> 문자열 타입
}
fetch('https://jsonplaceholder.typicode.com/posts/2' , newOption2)
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// 실습 4 : https://reqres.in/에서 DELETE 방식을 요청하여 응답을 console에 출력
// 요청 URL : 'https://reqres.in//api/users/2'

const newOption3 = {
    method : 'DELETE' , // <-- 전송할 메서드 속성 : DELETE
} // ed
fetch('https://jsonplaceholder.typicode.com/posts/2' , newOption3)
    .then( respone => respone.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})
