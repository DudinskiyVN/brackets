module.exports = function check(str, bracketsConfig) {
  // your solution
  let subStr = '';
  for (let i = 0; i < str.length; i++) {
  if (str[i] == '(' ||  str[i] == '[' || str[i] == '{' || (str[i] == '|' && subStr[subStr.length-1] !== '|' )) { subStr = subStr + str[i]; continue;}
  if (str[i] == ')' && subStr[subStr.length-1] == '(' ) { subStr = subStr.slice(0, -1); continue;}
  if (str[i] == ']' && subStr[subStr.length-1] == '[' ) { subStr = subStr.slice(0, -1); continue;}
  if (str[i] == '}' && subStr[subStr.length-1] == '{' ) { subStr = subStr.slice(0, -1); continue;}
  if (str[i] == '|' && subStr[subStr.length-1] == '|' ) { subStr = subStr.slice(0, -1); continue;}
  }  
  return (subStr == '');
  }
