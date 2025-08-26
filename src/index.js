module.exports = function reverse(n) {
  const number = Math.abs(n);
  const str = number.toString().split('').reverse().join('');
  return +str;
};
