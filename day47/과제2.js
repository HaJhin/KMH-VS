let 좌석 = ['빈좌석','빈좌석','예약석','빈좌석','예약석','예약석'];

let seatHTML = ``;
    for (let i = 0; i < 좌석.length; i++) {
        // index는 0부터 마지막 인덱스까지 1씩 증가 반복 , 6회
        // index번째 값을 <div>로 구성하기
        seatHTML += `<span style = "color : ${좌석[i] == '빈좌석' ? 'blue' : 'red'}"> ${좌석[i]} </span>`
        // 2배수 마다 줄바꿈 처리
        if ((i+1)%2 === 0) {
            seatHTML += `<br/>`
        }
    } // for ed

    // (3) 특정 html 선택자로부터 마크업 객체를 가져와서 html 대입


    // (3) DOM 객체를 이용한 html에 변수값 출력하기
let exampleDIV2객체 = document.querySelector(`#exampleDIV2`);
exampleDIV2객체.innerHTML = seatHTML;