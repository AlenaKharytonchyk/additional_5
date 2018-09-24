module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.lenth % 2 === 1)
    return false;

  var openArr = [];
  var endArr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    const brackets = bracketsConfig[i];
    openArr.push(brackets[0]);
    endArr.push(brackets[1]);
  }

  var flag = false;

  do {
    for (let i = 0; i < openArr.length; i++) {
      const open = openArr[i];
      const close = endArr[i];
      var skip = false;
      flag = false;

      for (let j = 0; j < str.length; j++) {
        const possibleEnd = str[j];
        const possibleStart = str[j - 1];

        if (possibleEnd === close && possibleStart === open) {
          str = str.substring(0, j - 1) + str.substring(j + 1, str.length)
          flag = true;
          skip = true;
          break;
        }
      }

      if (skip) break;
    }

      if (str.length === 0) return true;

    }while (flag);
     
    return false;
  
}
