class StringCalculator {
    // method will be implemented here
    add(numbers){
        if(numbers === ""){
            return 0;
        }

        return parseInt(numbers,10);
    }
}

module.exports = StringCalculator;