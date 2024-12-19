let MN = ['베놈' , '아이언맨' , '조커' , '배트맨'];
let MR = [4 , 8 , 9 , 6];
let outHTML = `<table>`;

for (let i = 0; i < MN.length; i++) {
    let names = MN[i];
    
    outHTML += `<tr> <td> ${ names } </td>`

    // 영화 평점만큼 별 출력 빈칸은 흰 별
    let starHTML = ``
    for (let s = 1; s <= 10; s++) {
        // star(별)은 1부터 10까지 1씩 증가 반복 { 별 만점이 10점 만점 }
        if(MR[i] >= s) {
            // 현재 스타보다 평점이 더 크면
            starHTML += `★`
        } else {
            starHTML += `☆`
        }
    }
    outHTML += `<td> ${starHTML} </td> </tr>  `
} // for ed
outHTML += '</table>'
    // (3) DOM 객체를 이용한 html에 변수값 출력하기
let exampleDIV1객체 = document.querySelector(`#exampleDIV1`);
exampleDIV1객체.innerHTML = outHTML;