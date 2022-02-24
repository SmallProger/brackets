module.exports = function check(str, bracketsConfig) {
  let findedIndexes = new Set();

  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let item of bracketsConfig) {
      if (str[i] == item[0] && !findedIndexes.has(i)) {
        let index = str.findIndex((elem, index) => {
          if (!findedIndexes.has(index) && elem == item[1] && index > i) {
            return true;
          } else return false;
        });
        if (index == -1) return false;
        findedIndexes.add(index);
      }
    }
  }
  if (findedIndexes.size != Math.floor(str.length / 2)) return false;
  return true;
};
