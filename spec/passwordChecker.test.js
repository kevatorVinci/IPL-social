// Description: This file contains all the test cases for the app.js file.

import { Main } from "../src/passwordChecker.js";

describe("password validation", function () {
  const main = new Main();

  it("Password must be at least 8 characters long", function () {
    expect(main.isValidPassword("1234567")).toBe(false);
  });

 
  it("should return false if the password does not contain a special character", function () {
    expect(main.isValidPassword("123456789")).toBe(false);
  });

  it("should return false if the password does not contain a number", function () {
    expect(main.isValidPassword("abcdefgh")).toBe(false);




});

});







