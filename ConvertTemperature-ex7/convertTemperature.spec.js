import convertTemperature from "./ConvertTemperature";

describe('convertTemperature', ()=> {
    it ('should convert from temperature from 0 Celsius to 32 Fahrenheit' , () =>{
        expect(convertTemperature(0)).toBe(32);
    });
    it ('should convert from temperature from 40 Celsius to 104 Fahrenheit' , () =>{
        expect(convertTemperature(40)).toBe(104);
    });
    it ('should convert from temperature from -40 Celsius to -40 Fahrenheit' , () =>{
        expect(convertTemperature(-40)).toBe(-40);
    });
    it ('should convert from temperature from 100 Celsius to 212 Fahrenheit' , () =>{
        expect(convertTemperature(100)).toBe(212);
    });
})