/* 문제 4-1 isGreaterThan

두 개의 수를 입력받아 두번째 수가 첫번째 수보다 큰지 여부를 리턴해야 합니다.

입력

인자 1 : num1

- `number` 타입의 수

인자 2 : num2

- `number` 타입의 수
- `boolean` 타입을 리턴해야 합니다.
- 같은 수를 입력받은 경우, `false`를 리턴해야 합니다. */


function isGreaterThan(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    if (num1 < num2){
      return true;
    } else{
      return false;
    }
  }

  // 삼항연산도 가능 
  function isGreaterThan(num1, num2) 
{
  return num1 < num2 ? true : false;
}

// Boolean 값이므로 굳이 True False 안 넣어도 된다.
function isGreaterThan(num1, num2) 
{return (num1 < num2)};

