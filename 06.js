// function sumTwoSmallestNumbers(numbers) {  
//     const minOne = Math.min(...numbers);
//     const indexMinOne = numbers.indexOf(minOne);
//     numbers.splice(indexMinOne,1);
//     const minTwo = Math.min(...numbers);
//     return minOne+minTwo;
//   }

//   console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

  function sumTwoSmallestNumbers(numbers) {  
    const sorted = numbers.sort((a,b) => a-b);
    return sorted[0] + sorted[1];
  }

  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))