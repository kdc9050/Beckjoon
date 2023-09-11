function solution(money) {
    const americanoPrice = 5500;
    const maxAmericano = Math.floor(money / americanoPrice);
    const remainingMoney = money % americanoPrice;
  
    return [maxAmericano, remainingMoney];
  }

  //아메리카노