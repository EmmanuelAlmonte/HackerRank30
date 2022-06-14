class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName,identification)
        this.scores = scores
    }
    calculate() {
        let average = 0
        for(let x = 0; x < this.scores.length; x++) {
            average += this.scores[x] 
        }
        average = average / this.scores.length
        if(average >= 90 && average <= 100) {
            return 'O'
        }
        else if (average >= 80 && average < 90) {
            return 'E'
        }
         else if (average >= 70 && average < 80) {
            return 'A'
        }
        else if (average >= 55 && average < 70) {
            return 'P'
        }
        else if (average >= 40 && average < 55) {
            return 'D'
        }
        else {
            return 'T'
        }
        
    }
}

