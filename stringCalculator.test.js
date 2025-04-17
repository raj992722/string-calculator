
const StringCalculator = require("./stringCalculator");



describe("StringCalculator", ()=>{
    let calculator;
    beforeEach(()=>{
        calculator = new StringCalculator();
    });

    test("add: should return 0 for an empty string", ()=>{
        expect(calculator.add("")).toBe(0);
    })
})