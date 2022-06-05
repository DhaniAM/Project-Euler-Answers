// Multiples of 3 or 5
function findSum3or5(max) {
	let sum = 0;
	for (let i = 1; i < max; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}
// let resSum3or5 = findSum3or5(1000);
// document.querySelector("#multiple3or5").innerHTML = resSum3or5;
// 233168


// ========================================================================================
// Even Fibonacci Numbers
function findSumEvenFibonacciBefore(n) {
	let firstNum = 0;
	let secondNum = 1;
	let result;
	let sum = 0;
	for (let i = 1; i >= 1; i++) {
		result = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = result;

		if (result > n) {
			break;
		} else if (result % 2 === 0) {
			sum += result;
		}
	}
	return sum;
}
// let resSumEvenFibonacci = findSumEvenFibonacciBefore(4000000);
// document.querySelector("#even-fibonacci").innerHTML = resSumEvenFibonacci
// 4613732


// ======================================================================================
// largest prime factor
function findLargestPrimeFactor(num) {
	let highestPrime;
	let numberToDivide = num;
	for (let i = 2; i <= numberToDivide; i++) {
		if (numberToDivide % i === 0) {
			// change the max value to iterate
			numberToDivide /= i;
			highestPrime = i;
			if (numberToDivide === 1) {
				break;
			} else {
				i = 2;
			}
		}
	}
	return highestPrime;
}
// let resLargestPrimeFactor = findLargestPrimeFactor(600851475143);
// document.querySelector("#largest-prime-factor").innerHTML = resLargestPrimeFactor;
// 6857


// ======================================================================================
// Largest Palindrome Product
function largestPalindromeProduct(min, max) {
	let firstNum = min;
	let secondNum = min;
	let sum = 0;
	let isPalindrome = false;
	let maxPalindrome = 0;
	let comparationArray = [];
	let range = max - min;
	let sumString;
	let arrayLength;
	for(let n = 0; n <= range; n++) {
		for (let m = 0; m <= range; m++) {
			sum = (firstNum + n) * (secondNum + m);
			sumString = sum.toString();
			for (let i of sumString) {
				comparationArray.push(i);
			}
			arrayLength = comparationArray.length;
			isPalindrome = checkIsPalindrome(comparationArray, arrayLength);
			if (isPalindrome) {
				if(sum > maxPalindrome) {
					maxPalindrome = sum;
				} 
			}
			// reset
			sum = 0;
			sumString = [];
			comparationArray = [];
		}
	}
	function checkIsPalindrome(array, length) {
		// if array is odd
		if (array[0] === array[length-1]) {
			if (array[1] === array[length-2]) {
				// if array is odd
				if (length % 2 !== 0) {
					return true;
				// if array is even
				} else if (length % 2 === 0) {
					if (array[2] === array[length-3]) {
						return true
					}
				}
			}
		}
	}
	return maxPalindrome;
}
// let resLargestPalindromeProduct = largestPalindromeProduct(100, 999);
// document.querySelector("#largest-palindrome").innerHTML = resLargestPalindromeProduct;
// 906609


// ======================================================================================
// Smallest Multiple
function findSmallestMultiple(max) {
	let num = 0;
	let isDone = false;
	while (isDone == false) {
		num++;
		for (let i = 1; i <= max; i++) {
			if (num % i === 0) {
				if (i === max) {
					isDone = true;
				}
			} else {
				break;
			}
		}
	}
	return num;
}
// let resFindSmallestMultiple = findSmallestMultiple(20);
// document.querySelector("#smallest-multiple").innerHTML = resFindSmallestMultiple;
// 232792560


// ======================================================================================
// Sum Square DIfference
function findSumSquareDifference(max) {
	function findSumSquare(max) {
		let sumSquare = 0;
		for (let i = 1; i <= max; i++) {
			sumSquare += i ** 2;
		}
		return sumSquare;
	}
	function findSquareSum(max) {
		let sum = 0;
		for (let i = 1; i <= max; i++) {
			sum += i;
		}
		let squareSum = sum ** 2;
		return squareSum;
	}
	return findSquareSum(max) - findSumSquare(max);
}
// let resFindSumSquareDifference = findSumSquareDifference(100);
// document.querySelector("#sum-square-difference").innerHTML = resFindSumSquareDifference;
// 25164150


// ======================================================================================
// 10001st Prime
function findPrimeNumber(n) {
	let isDone = false;
	let primeCounter = 0;
	let num = 2;
	while (!isDone) {
		// check is prime (can only divide by 1 or by itself)
		let i = 2; //divider
		while (i <= num) {
			// if can be divided, then it's not Prime
			if (num % i === 0 && num !== i) {
				// reset and stop the loop, check next num again
				num++;
				i = 2;
				break;
			// if can't be divided and i is already equal to num, then it's prime
			} else if (i === num) {
				primeCounter++;
				// if primeCounter equal to n we ask, then it's finished
				if (primeCounter === n) {
					isDone = true;
					break;
				} else {
					// if not equal, then reset, break loop, check next num again
					num++;
					i = 2;
					break;
				}
			// if it can't be divided and i still not equal num
			} else {
				i++;
			}
		}
	}
	return num;
}
// let resFindPrimeNumber = findPrimeNumber(10001);
// document.querySelector("#prime-number-10001").innerHTML = resFindPrimeNumber;
// 104743
