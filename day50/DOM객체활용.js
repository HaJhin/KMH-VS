// [1] 할 일 목록(배열) 전역 변수 선언 , 샘플 데이터 포함
let 할일목록 = []


// [2] 할일코드(pk역할) 부여하기 위한 식별 번호 , auto_increment
let 식별번호 = 0;

// [3 C] 등록함수 정의 , 사용처 : 등록버튼을 클릭했을 때. / 매개변수 : X / 반환값 : X
function 등록함수() {
    // 1. HTML로부터 INPUT 마크업 DOM객체 가져오기
    const contInput = document.querySelector('.contInput'); console.log(contInput);
    // 2. 가져온 DOM객체의 VALUE 속성을 가져온다.
    const 할일내용 = contInput.value;
    // 3. 할일 객체를 구성
    const 할일 = {
        할일코드 : 식별번호 , 
        할일내용 : 할일내용 , 
        할일상태 : false
    }
    // 4. 구성한 객체를 배열에 저장한다.
    할일목록.push(할일);
    // 5. 객체 저장 완료시 할일코드가 +1 증가한다.
    식별번호++;
    // 6. 결과 및 종료
    alert('할일이 등록되었습니다.');
    contInput.value = '';
    출력함수();
    return;
} // f ed

// [4 R] 출력함수 정의 , 사용처 : JS가 실행될 때. / 매개변수 : X / 반환값 : X
function 출력함수() {
    // 1. HTML로부터 DIV 마크업 DOM 객체 가져오기
    const todoBottom = document.querySelector('.todoBottom');
    // 2. 출력할 HTML 문자열 구성하기
    let HTML = '';
        // (1) 할일목록(배열) 내 모든 요소를 하나씩 HTML 문자열로 만들기
        for (let i = 0; i < 할일목록.length; i++) {
            // - i는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복
            const 할일 = 할일목록[i]; // - i번째의 객체 꺼내기

            // `백틱 이용한 HTML 변수에 +=(누적) 대입하기. <div class = "contBox">

            // [삼항 연산자]를 이용한 객체 속성값에 따른 마크업의 클래스명 조작하기
            // - 만약에 할일 상태가 true이면 success 클래스명 대입하고 아니면 대입 X
            HTML += `<div class="contBox ${할일.할일상태 ? 'success' : '' }">
                        <div class="cont"> ${할일.할일내용} </div>
                            <div class="contBtns">
                            <button onclick="수정함수(${할일.할일코드})" class="updateBtn"> 수정 </button>
                             <button onclick="삭제함수(${할일.할일코드})" class="deleteBtn"> 삭제 </button>
                        </div>
                        </div>`
        }
    // 3. 가져온 마크업 객체에 출력할 HTML 문자열 대입하기
    todoBottom.innerHTML = HTML;
}

// [5 U] 수정함수 정의 , 사용처 : 수정버튼을 클릭했을 때. / 매개변수 : 수정할 일 코드 / 반환값 : X
function 수정함수(할일코드) {
    console.log(`${할일코드} 수정함수`);
    // (1) 배열 내 수정할 할 일 코드 객체 찾기
    for(let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].할일코드 == 할일코드) {
        // i번째의 할일코드 외 수정할일 코드와 같으면
        let 할일상태 = 할일목록[i].할일상태; // i번째 할일상태 꺼내기
        할일목록[i].할일상태 = !할일상태; // i번째 할일상태를 부정반대
        break;
        }
    }
    출력함수();
    return;
}

// [6 D] 삭제함수 정의 , 사용처 : 삭제버튼을 클릭했을 때. / 매개변수 : 삭제할 일 코드 / 반환값 : X
function 삭제함수(할일코드) {
    console.log(`${할일코드} 삭제함수`);
    // (1) 배열 내 삭제할 할일코드 객체 찾기
    for (let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].할일코드 == 할일코드) {
            할일목록.splice(i,1);
            // JS 배열 요소 추가 : 배열변수명.push(값) , JS 배열 요소 삭제 : 배열변수명.splice(삭제할 인덱스 , 갯수);
            break;
        }
    }
    출력함수();
    return;
}

