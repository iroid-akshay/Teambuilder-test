// Currency conversion utilities
const USD_TO_JPY_RATE = 147.14; // Current exchange rate as of 2024

/**
 * Convert USD price to Japanese Yen
 * @param {number} usdPrice - Price in USD
 * @returns {number} Price in JPY
 */
export const convertUSDToJPY = (usdPrice) => {
  return Math.round(usdPrice * USD_TO_JPY_RATE);
};

/**
 * Format price as Japanese Yen with proper formatting
 * @param {number} price - Price in USD
 * @returns {string} Formatted JPY price
 */
export const formatPriceToJPY = (price) => {
  const jpyPrice = convertUSDToJPY(price);
  return `¥${jpyPrice.toLocaleString('ja-JP')}`;
};

/**
 * Format price as Japanese Yen with compact formatting for smaller spaces
 * @param {number} price - Price in USD
 * @returns {string} Compact formatted JPY price
 */
export const formatPriceToJPYCompact = (price) => {
  const jpyPrice = convertUSDToJPY(price);
  // For very large numbers, use K notation (e.g., ¥14.7K instead of ¥14,714)
  if (jpyPrice >= 10000) {
    return `¥${(jpyPrice / 1000).toFixed(1)}K`;
  }
  return `¥${jpyPrice.toLocaleString('ja-JP')}`;
};

/**
 * Format JPY price with proper Japanese formatting
 * @param {number} jpyPrice - Price in JPY
 * @returns {string} Formatted JPY price
 */
export const formatJPYPrice = (jpyPrice) => {
  return `¥${jpyPrice.toLocaleString('ja-JP')}`;
};
