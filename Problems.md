# JavaScript Programming Problems and Solutions

## 1. FizzBuzz Problem
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

## 2. Palindrome Checker
```javascript
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

## 3. Reverse a String
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
```

## 4. Factorial Calculator
```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

## 5. Sum of Array Elements
```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

## 6. Find Maximum and Minimum
```javascript
function findMaxMin(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}
console.log(findMaxMin([1, 2, 3, 4, 5])); // { max: 5, min: 1 }
```

## 7. Unique Values in an Array
```javascript
function uniqueValues(arr) {
    return [...new Set(arr)];
}
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

## 8. Count Vowels in a String
```javascript
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("hello world")); // 3
```

## 9. Prime Number Checker
```javascript
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```

## 10. Sorting Algorithm
```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

## 11. Generate Random Password
```javascript
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
console.log(generatePassword(8));
```

## 12. Anagram Checker
```javascript
function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```

## 13. Two Sum Problem
```javascript
function twoSum(arr, target) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

## 14. Find Longest Word
```javascript
function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
```

## 15. Flatten a Nested Array
```javascript
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
```

## 16. Implement a Queue
```javascript
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.isEmpty()); // false
```

## 17. Create a Simple Calculator
```javascript
function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operator";
    }
}
console.log(calculator(5, 3, '+')); // 8
```

## 18. Event Countdown Timer
```javascript
function countdown(date) {
    const target = new Date(date).getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = target - now;
        if (difference <= 0) {
            clearInterval(timer);
            console.log("Time's up!");
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}
countdown("2024-12-31T23:59:59");
```

## 19. Convert Roman to Integer
```javascript
function romanToInt(roman) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = map[roman[i]];
        const next = map[roman[i + 1]];
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}
console.log(romanToInt("XIV")); // 14
```

## 20. Local Storage Todo App
```javascript
// Add a task
function addTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get all tasks
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Example usage
addTask("Learn JavaScript");
console.log(getTasks());
