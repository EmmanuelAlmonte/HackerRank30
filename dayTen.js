// I didn't Include the code HackerRank provides


const decToBin = dec => {
  return (dec >>> 0).toString(2)
}

const charCount = (str, letter) => {
  let oneCount = 0;
  let maxOneCount = 0
  for (let i=0; i<str.length; i++) {
      if(str.charAt(i) == letter){
          oneCount += 1
          if(oneCount > maxOneCount){
              maxOneCount = oneCount
          }
      }
      else {
          oneCount = 0
          
      }
  }
  return maxOneCount
}


function main() {
  const n = parseInt(readLine().trim(), 10);
  const inputConverted = decToBin(n)
  console.log(charCount(inputConverted, 1))
}
