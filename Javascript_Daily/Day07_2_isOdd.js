/* 문제 7-2. isOddLength
문자열을 입력받아 그 길이가 홀수인지 여부를 리턴해야 합니다. */


function isOddLength(word) {
    let wordLength = word.length;
    if(wordLength % 2 == 1){
        return true;
    }else{
        return false;
    }

  }
  console.log(isOddLength('nice2'))
  