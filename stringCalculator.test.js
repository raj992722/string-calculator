
const StringCalculator = require("./stringCalculator");



describe("StringCalculator", ()=>{
    let calculator;
    beforeEach(()=>{
        calculator = new StringCalculator();
    });

    test("add: should return 0 for an empty string", ()=>{
        expect(calculator.add("")).toBe(0);
    });

    test("add: should return the number itself for a single number string",()=>{
        expect(calculator.add('1')).toBe(1);
        expect(calculator.add('5')).toBe(5);
    });

    test("add: should return the sum for two comma-separated numbers",()=>{
        expect(calculator.add('1,5')).toBe(6);
        expect(calculator.add("10,2")).toBe(12);
    })
})