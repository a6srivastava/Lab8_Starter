// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Write unit tests for the following functions: isPhoneNumber, isEmail, isStrongPassword and isDate, and isHexColor 
// You should write at least 6 tests for each function the tests should test edge cases as well as normal cases, and thoughroughly test the functions
// You should use the expect function to test the functions
// You should use the toBe function to test the functions
describe('Unit Test Me Functions', () => {
    // Unit tests for isPhoneNumber function
    describe('isPhoneNumber', () => {
      test('should return true for valid phone number', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
        expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
        expect(functions.isPhoneNumber('111(123) 456-7890')).toBe(true);
      });
  
      test('should return false for invalid phone number', () => {
        expect(functions.isPhoneNumber('2')).toBe(false);
        expect(functions.isPhoneNumber('(123 4$#56-7890')).toBe(false);
        expect(functions.isPhoneNumber('*****')).toBe(false);
      });
  
      test('should return false for empty string', () => {
        expect(functions.isPhoneNumber('')).toBe(false);
      });
    });
  
    // Unit tests for isEmail function
    describe('isEmail', () => {
      test('should return true for valid email', () => {
        expect(functions.isEmail('test@example.com')).toBe(true);
        expect(functions.isEmail('absrivas@gmail.com')).toBe(true);
      });
  
      test('should return false for invalid email', () => {
        expect(functions.isEmail('test@example')).toBe(false);
        expect(functions.isEmail('test@.com')).toBe(false);
      });
  
      test('should return false for empty string', () => {
        expect(functions.isEmail('')).toBe(false);
      });
    });
  
    // Unit tests for isStrongPassword function
    describe('isStrongPassword', () => {
      test('should return true for strong password', () => {
        expect(functions.isStrongPassword('Password1')).toBe(true);
        expect(functions.isStrongPassword('LoberJuice')).toBe(true);

      });
  
      test('should return false for weak password', () => {
        expect(functions.isStrongPassword('pass+')).toBe(false);
        expect(functions.isStrongPassword('1Password')).toBe(false);
      });
  
      test('should return false for password with special character', () => {
        expect(functions.isStrongPassword('Password@1')).toBe(false);
      });
    });
  
    // Unit tests for isDate function
    describe('isDate', () => {
      test('should return true for valid date', () => {
        expect(functions.isDate('12/31/2023')).toBe(true);
        expect(functions.isDate('10/11/1023')).toBe(true);
      });
  
      test('should return false for invalid date', () => {
        expect(functions.isDate('113/32/2023')).toBe(false);
        expect(functions.isDate('12/31/23')).toBe(false);
        expect(functions.isDate('/31/23')).toBe(false);
      });
  
      test('should return false for empty string', () => {
        expect(functions.isDate('')).toBe(false);
      });
    });
  
    // Unit tests for isHexColor function
    describe('isHexColor', () => {
      test('should return true for valid color', () => {
        expect(functions.isHexColor('#FFFFFF')).toBe(true);
        expect(functions.isHexColor('#FFF')).toBe(true);
        expect(functions.isHexColor('FFFFFF')).toBe(true);
      });
  
      test('should return false for invalid color', () => {
        expect(functions.isHexColor('#FFFFF')).toBe(false);
        expect(functions.isHexColor('#ZZZ')).toBe(false);
      });
  
      test('should return false for empty string', () => {
        expect(functions.isHexColor('')).toBe(false);
      });
    });
  });