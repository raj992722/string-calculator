class StringCalculator {
    // method will be implemented here
    add(numbers){
        if(numbers === ""){
            return 0;
        }
        const numberArray = numbers.split(',');
        let sum=0;
        for(const numStr of numberArray){
            sum += parseInt(numStr,10);
        }


        return sum;
    }
}

module.exports = StringCalculator;