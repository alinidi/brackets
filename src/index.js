module.exports = function check(str, bracketsConfig) {
  const pair = {};
  const stack = [];
  const openBrackets = [];

  for (const [open, close] of bracketsConfig) {
    pair[open] = close;
    openBrackets.push (open);
  }
  
  for (let i = 0; i < str.length; i++){
    const current = str[i];
    if (openBrackets.includes(current)){
      if (stack.length && stack [stack.length -1 ] === current){
        stack.pop();
      } else {
        stack.push(current);
      }
    } else{
      if (!stack.length || pair[stack.pop()] !== current) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
