function buyAndSellStockBrute(prices) {
  console.time('O(n^2)')
  let maxProfit = 0
  for (let i = 0; i <= prices.length - 1; i++) {
    for (let j = i; j <= prices.length - 1; j++) {
      const sum = prices[j] - prices[i]
      if (sum > maxProfit) {
        maxProfit = sum
      }
    }
  }

  console.timeEnd('O(n^2)')
  return maxProfit
}

function buyAndSellStock(prices) {
  console.time('O(n)')
  let maxProfit = 0
  let i = 0
  let j = 0
  while (j <= prices.length - 1) {
    const sum = prices[j] - prices[i]
    if (sum > maxProfit) {
      maxProfit = sum
    }

    if (prices[j] < prices[i]) {
      i = j
    }

    j++
  }

  console.timeEnd('O(n)')
  return maxProfit
}

console.log(buyAndSellStockBrute([6, 3, 1, 2, 5, 4]))
console.log(buyAndSellStock([6, 3, 1, 2, 5, 4]))
