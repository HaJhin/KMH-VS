// 1. 학생 이름 배열
let SA = ['김교주' , '박영춘' , '에르핀'];
// 2. 학생 점수 배열
let SS = [50,35,20];
// 3. 점수의 시각화
let outHTML = ``;
outHTML += '<div> 이름 점수시각화 <br/>'
for (let i= 0; i < SA.length; i++ ) {
    let names = SA[i];

    outHTML += ` ${names} :  `
    let pointHTML = ``;
    for (let s = 0; s < 50; s++) {
        if (SS[i] > s) {
            pointHTML += '●';
        } else {
            pointHTML += '○';
        }
    }
     outHTML += `${pointHTML} <br/> </div>`
}

let exampleDIV1객체 = document.querySelector(`#exampleDIV1`);
exampleDIV1객체.innerHTML = outHTML;
