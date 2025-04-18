class StringCalculator {
    // method will be implemented here
    add(numbers){
        if(numbers === ""){
            return 0;
        }
        // default delimiterRegex
        let delimiterRegex = /[,\n]/;
        const numberArray = numbers.split(delimiterRegex);
        // let sum=0;
        // for(const numStr of numberArray){
        //     sum += parseInt(numStr,10);
        // }
        // using reduce for summation
        return numberArray.reduce((sum,numStr)=>{
            const trimmedStr = numStr.trim();
            // skip potential empty strings resulting from split (e.g., "1, \n2")
            if(trimmedStr === "") return sum;
            const num = parseInt(trimmedStr,10);

            return sum + (isNaN(num) ? 0 : num);
        },0)


        
    }
}

module.exports = StringCalculator;