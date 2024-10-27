module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const pairs = Object.fromEntries(bracketsConfig);
  const openBrackets = bracketsConfig.map(([open, _]) => open);
  
  for (const char of str) {
    if (openBrackets.includes(char)) {
      if (pairs[char] === char && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
