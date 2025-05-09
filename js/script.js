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
    }
  }

  // output
  document.getElementById("result").innerText = 
    `Quotient: ${quotient}, Remainder: ${remainder}`;
}

