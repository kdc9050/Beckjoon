// 최대공약수를 계산하는 함수
function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {
    // 두 분수를 더함
    var newNumer = numer1 * denom2 + numer2 * denom1;
    var newDenom = denom1 * denom2;

    // 최대공약수를 구함
    var gcdValue = gcd(newNumer, newDenom);

    // 기약 분수로 만듦
    newNumer /= gcdValue;
    newDenom /= gcdValue;

    return [newNumer, newDenom];
}

/*
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/