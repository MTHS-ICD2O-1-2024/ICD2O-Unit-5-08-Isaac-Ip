// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function performs simplified long division.
 */
function calculate() {
  const dividend = parseInt(document.getElementById("value-1").value);
  const divisor = parseInt(document.getElementById("value-2").value);

  let remainder = dividend;
  let quotient = 0;
  // process
  if (dividend > 0 && divisor > 0) {
    for (; remainder >= divisor; quotient++) {
      remainder -= divisor;
    }create a program, using a loop and an if statement, that:

    it does long division on 2 positive integers, while simplified long division
    
    keep subtracting until the number you are left with is smaller that the number you are dividing by and then break and show the remainder
  }

  // output
  document.getElementById("result").innerText = 
    `Quotient: ${quotient}, Remainder: ${remainder}`;
}

