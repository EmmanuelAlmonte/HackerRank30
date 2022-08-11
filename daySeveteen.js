// Solution
class Calculator {
    power(n, p) {
        
            if(n !== Math.abs(n) || p !== Math.abs(p)) {
                return ('n and p should be non-negative')
            }
            return n ** p
    }
}
