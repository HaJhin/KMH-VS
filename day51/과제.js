// 실습 1 : https://reqres.in/ 에서 GET 요청하여 console에 출력
// 요청 URL : 'https://reqres.in//api/users/2'

fetch('https://reqres.in/api/users/2' , {method : 'GET'})
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error);});

// 실습 2 : https://reqres.in/ 에서 POST 타입으로 요청하여 console에 출력
// 요청 URL : 'https://reqres.in//api/users/'
// 보낼 데이터 : { "name":"morpheus" , "job" : "Leader"}
const board1 = { "name":"morpheus" , "job" : "Leader"}; // 임의의 게시물 객체
const newOption1 = {                                     // (1) fetch 함수의 전송 옵션
    method1 : 'POST' ,                                // 1. http 메서드 선택(GET/POST/PUT/DELETE 중)
    headers : {'Content-Type' : 'application/json'} , // 2. 보낼자료의 형식 설정 {'Content-Type' : 'application/json'}
    body : JSON.stringify(board1)                          // 3. 보낼 자료 , JSON.stringify(객체)함수 : JSON 타입 -> 문자열 타입
}
fetch('https://reqres.in/api/users' , newOption1)
    .then( response => response.json())
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
fetch('https://reqres.in/api/users/2' , newOption2)
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})

// 실습 4 : https://reqres.in/에서 DELETE 방식을 요청하여 응답을 console에 출력
// 요청 URL : 'https://reqres.in//api/users/2'

const newOption3 = {
    method : 'DELETE' , // <-- 전송할 메서드 속성 : DELETE
} // ed
fetch('https://reqres.in/api/users/2' , newOption3)
    // .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => {console.log(error)})