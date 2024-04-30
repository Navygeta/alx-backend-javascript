function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) {
    return '';
  }
  return [...set]
    .filter((el) => (el !== undefined ? el.startsWith(startString) : ''))
    .map((ele) => (ele !== undefined ? ele.slice(startString.length) : ''))
    .join('-');
}

module.exports = cleanSet;
