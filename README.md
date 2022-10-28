<p align="center"><a href="https://nodei.co/npm/leetcode-solver/"><img src="https://nodei.co/npm/leetcode-solver.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/leetcode-solver"> <img src="https://img.shields.io/npm/dm/leetcode-solver?label=downloads"> <img src="https://img.shields.io/npm/l/leetcode-solver"> <img src="https://img.shields.io/github/repo-size/meister03/leetcode-solver">

# Leetcode-solve
Util functions to solve common leetcode problems such as converting Integers to Roman numbers.

All Credits goes to [leetcode.com](https://leetcode.com/) for offering a wide range of code question/issues. The functions are linked with the leetcode link in the source code.

## API Documentation

`./Add/addNumberFromTwoArrayOfDigits`;
```js
addNumberFromTwoArrayOfDigits([1,2,3], [2,4,6]) 
// Output: [3,6,9]
// Description: Adds an array of digits to another array of digits
```
`./Add/addParanthesis`;
```js
addParanthesis("Hello World")
// Output: "(Hello World)"
// Description: Adds paranthesis to a string
```

`./Merge/mergeNdArrayWithSorting`;
```js
mergeNdArrayWithSorting([[1,2,3], [2,4,6], [1,2,3,4,5,6,7,8,9]])
// Output: [1,1,2,2,2,3,3,4,4,5,6,6,7,8,9]
// Description: Merges an array of arrays and sorts them
```
`./Merge/mergeTwoArraysWithSorting`;
```js
mergeTwoArraysWithSorting([1,2,3], [2,4,6])
// Output: [1,2,2,3,4,6]
// Description: Merges two arrays and sorts them
```

`./Remove/removeDuplicatesFromArray`;
```js
removeDuplicatesFromArray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])
// Output: [1,2,3,4,5,6,7,8,9]
// Description: Removes duplicates from an array
```

`./Remove/removeNumberFromArrayWithPosition`;
```js
removeNumberFromArrayWithPosition([1,2,3,4,5,6,7,8,9], 3)
// Output: [1,2,3,5,6,7,8,9]
// Description: Removes a number from an array at a specific position
```

`./Check/checkIfInputMatchesString`;
```js	
checkIfInputMatchesString("Hello World", "World")
// Output: true
// Description: Checks if a string matches another string
```

`./Check/isPalindromNumber`;
```js
isPalindromNumber(12321)
// Output: true
// Description: Checks if a number is a palindrom number
```

`./Check/checkParanthesis`;
```js
checkParanthesis("{Hello World}")
// Output: true
// Description: Checks if one of the following () [] {} are currectly placed
```


`./Convert/convertStringToInteger`;
```js
convertStringToInteger("123qisusiq")
// Output: 123
// Description: Converts a string to an integer
```

`./Convert/convertIntegerToRoman`;
```js
convertIntegerToRoman(10)
// Output: X
// Description: Converts an integer to a roman number
```
`./Convert/convertRomanToInteger`;
```js
convertRomanToInteger("X")
// Output: 10
// Description: Converts a roman number to an integer
```
`./Convert/reverseInteger`;
```js
reverseInteger(123)
// Output: 321
// Description: Reverses an integer
```

`./Convert/convertStringToNewRowString`;
```js
convertStringToNewRowString("HelloWorld", 3)
// Output: HlWleoodlwrd
// Description: Converts a string to a new row string
```

`./Get/getLongestCommonPrefix`;
```js
getLongestCommonPrefix(["Hello", "Hell", "Hella"])
// Output: "Hel"
// Description: Gets the longest common prefix from an array of strings
```

`./Get/getLongestPalindromicSubstring`;
```js
getLongestPalindromicSubstring("HelloWorld")
// Output: "ll"
// Description: Gets the longest palindromic substring from a string
```

`./Get/getLongestSubstringWithoutCharacterRepeat`;
```js
getLongestSubstringWithoutCharacterRepeat("HelloWorld")
// Output: "HeloWrd"
// Description: Gets the longest substring without character repeat from a string
```

`./Get/getMedianOfTwoArrays`;
```js
getMedianOfTwoArrays([1,2,3], [2,4,6])
// Output: 3
// Description: Gets the median of two arrays
```

`./Get/getNextPermutation`;
```js
getNextPermutation([1,2,3])
// Output: [1,3,2]
// Description: Gets the next permutation of an array
```

`./Get/getOccurencePositionsInString`;
```js
getOccurencePositionsInString("HelloWorld", "l")
// Output: [2,3,9]
// Description: Gets the occurence positions of a character/substring in a string
```
`./Get/getTwoSum`;
```js
getTwoSum([1,2,3,4,5,6,7,8,9], 10)
// Output: [1,9]
// Description: Gets the two position from array, which equals the provided value
```

The list of functions will be extended over the time. Feel free to contribute or open any pull request on issues.