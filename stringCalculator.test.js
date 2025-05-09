
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
    });

    test("add: should handle any amount of comma-separated numbers",()=>{
        expect(calculator.add("1,2,3,4,5")).toBe(15);
        expect(calculator.add("10,20,30,5")).toBe(65);
    });

    test('add: should handle newlines between numbers',()=>{
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1,2\n3")).toBe(6);
        expect(calculator.add("5\n5\n5")).toBe(15)
    });

    test("add: should support custom delimiters specified at the start",()=>{
        expect(calculator.add("//;\n1;2")).toBe(3);
        expect(calculator.add("//*\n1*2*3")).toBe(6);
        
    });

    test("add: shoulkd still support default delimiters when no custom one is specified",()=>{
        expect(calculator.add('1,2\n3')).toBe(6);
    });

    test("add: should throw an execption fo negative numbers",()=>{
        expect(()=>calculator.add("1,-2,3")).toThrow("negative numbers not allowed");
    });

    test("add: should throw an exception listing all negative numbers found",()=>{
        expect(()=>calculator.add("1,-2,-3,4")).toThrow("negative numbers not allowed -2,-3");
        expect(()=>calculator.add("//;\n1;-2;5;-10")).toThrow("negative numbers not allowed -2,-10");
    });

    test("add: should not throw for zero or positive numbers",()=>{
        expect(()=>calculator.add("1,2,0")).not.toThrow();
        expect(calculator.add("1,2,0")).toBe(3); // ensure still correct
    })
})