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

  // process
  let remainder = dividend;
  let quotient = 0;

  while (remainder >= divisor) {
    remainder -= divisor;
    quotient++;
  }

  // output
  document.getElementById("result").innerText = 
    `Quotient: ${quotient}, Remainder: ${remainder}`;
}
