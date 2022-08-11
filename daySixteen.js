// This challenge was not hard but it was restricting if you were using JS.
// Reason: You weren't allowed to use conditional problem being NaN doesn't throw an console.console.error;
// My solution was to create a function that threw an error 


function error() {
    throw new Error('asdf') 
}


function main() {
    const S = readLine();
    try{
        isNaN(parseInt(S)) ? error()  : console.log(parseInt(S))
        
       
    }    catch(e) {
        console.log('Bad String')
        
    }
}
