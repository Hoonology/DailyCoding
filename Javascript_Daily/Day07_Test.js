/* 문제 1. compareNumbers
두 개의 수를 입력받아 조건별로 다른 메시지를 리턴해야 합니다.

- `string` 타입을 리턴해야 합니다.
- `num1` 이 `num2` 보다 클 경우에는 `num1은(는) num2보다 큽니다` 를 리턴해야 합니다.
- `num1` 이 `num2` 보다 작을 경우에는 `num1은(는) num2보다 작습니다` 를 리턴해야 합니다.
- `num1` 이 `num2` 와 같을 경우에는 `두 수는 같습니다` 를 리턴해야 합니다 */

function compareNumbers(num1, num2) {
    if(num1 > num2) {
      return num1 + "은(는) " + num2 + "보다 큽니다";
    } else if (num1 < num2){
      return num1 + "은(는) " + num2 + "보다 작습니다";
    } else{
      return "두 수는 같습니다";
    }
  }