/* 문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

입력

인자 1 : str
string 타입의 문자열
인자 2 : from
string 타입의 문자
from.length는 1
인자 3 : to
string 타입의 문자
to.length는 1

출력
string 타입을 리턴해야 합니다.

입출력 예시
let output = test4('loop', 'o', 'e');
console.log(output); // --> 'leep' */

function test4(str, from, to) {
    let result ='';
    for(let i = 0; i < str.length; i++){
        if(str[i] === from){
            result += to;
        } else{
            result += str[i];
        }
    }
    return result;
  }