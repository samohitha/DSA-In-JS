/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 


 * 
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestPrice = Infinity; // Initialize to a very high value
  let maximumProfit = 0; // Initialize to 0

  for (let day = 0; day < prices.length; day++) {
    let currentPrice = prices[day];

    // Update lowestPrice if currentPrice is lower
    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    } else {
      // Calculate potential profit
      let currentProfit = currentPrice - lowestPrice;
      // Update maximumProfit if currentProfit is higher
      if (currentProfit > maximumProfit) {
        maximumProfit = currentProfit;
      }
    }
  }

  return maximumProfit; // Return the maximum profit
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (Buy at 1, sell at 6)
