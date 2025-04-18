class StringCalculator {
    // method will be implemented here
    _parseAndSum(numberString, delimiterRegex){
        const numberArray = numberString.split(delimiterRegex);
        let sum =0;
        
        for(const numStr of numberArray){
            const trimmedStr = numStr.trim();
            if(trimmedStr === "" ) continue;
            const num = parseInt(trimmedStr,10);

            if(isNaN(num)) continue;

            sum+=num;
        }

        return sum;
    }


    add(numbers){
        if(numbers === ""){
            return 0;
        }
        // default delimiterRegex
        let delimiterRegex = /[,\n]/;
        // const numberArray = numbers.split(delimiterRegex);

        let numbersPart = numbers;

        if(numbers.startsWith('//')){
            const delimiterEndIndex = numbers.indexOf('\n');
            if(delimiterEndIndex !== -1){
                // Extract delimiter (between // and \n)
                const delimiter = numbers.substring(2,delimiterEndIndex);
                // update numbersPart to be string after \n
                numbersPart = numbers.substring(delimiterEndIndex + 1);
                // Escape the delimiter if its special regex character
                const escapeRegex =(s)=> s.replace(/[-\/\\^$*+?.()|{}[\]]/g,"\\$&");
                delimiterRegex = new RegExp(escapeRegex(delimiter))
            }
        }
        // let sum=0;
        // for(const numStr of numberArray){
        //     sum += parseInt(numStr,10);
        // }
        // using reduce for summation
        // return numberArray.reduce((sum,numStr)=>{
        //     const trimmedStr = numStr.trim();
        //     // skip potential empty strings resulting from split (e.g., "1, \n2")
        //     if(trimmedStr === "") return sum;
        //     const num = parseInt(trimmedStr,10);

        //     return sum + (isNaN(num) ? 0 : num);
        // },0)
        return this._parseAndSum(numbersPart,delimiterRegex);

        
    }
}

module.exports = StringCalculator;