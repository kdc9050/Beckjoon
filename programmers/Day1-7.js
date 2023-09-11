function solution(numbers) {
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
    const average = sum / numbers.length;
    return average;
  }

  //배열의 평균값