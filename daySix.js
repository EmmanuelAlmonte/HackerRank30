function processData(input) {
    //Enter your code here
    // This gets turned into an array consisting of the strings in input seperated by each new line.
    input = input.split('/n')
    
    for(let i = 1; i < input.length; i++){
        let splitWord = input[i].split('')
        
        let evenIndex = ''
        let oddIndex = ''

        for(let x = 0; x < splitWord.length; x++){
            if(x % 2 == 0) {
                evenIndex += splitWord[x]
            } else {
                oddIndex += splitWord[x]
            }
        }
        console.log(even + ' ' + odd)
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

