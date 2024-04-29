function cleanSet(set, startString) {
  const values = Array.from(set);
  const filteredValues = values.filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.substring(startString.length)).join('-');
}

export default cleanSet;
