// I didn't Include the code HackerRank provides

// Converts Base10 to Base2
const decToBin = dec => {
  return (dec >>> 0).toString(2)
}

// Counts how many times a character or letter occur consecutively.
const charCount = (str, letter) => {
  let oneCount = 0
  let maxOneCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      oneCount += 1
      // If the current count is greater than the largest consecutive character count then
      // Replace Max to current count
      if (oneCount > maxOneCount) {
        maxOneCount = oneCount
      }
    } else {
      // If the current character is not the letter reset current count
      oneCount = 0
    }
  }
  return maxOneCount
}

function main () {
  const n = parseInt(readLine().trim(), 10)
  const inputConverted = decToBin(n)
  console.log(charCount(inputConverted, 1))
}
