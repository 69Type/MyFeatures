
// working strange with big strings

function stringSimilarity(str1, str2, gramSize = 2) {
  function getNGrams(s, len) {
    s = ' '.repeat(len - 1) + s.toLowerCase() + ' '.repeat(len - 1);
    let v = new Array(s.length - len + 1);
    for (let i = 0; i < v.length; i++) v[i] = s.slice(i, i + len);
    return v;
  }

  if (!str1?.length || !str2?.length) return 0.0;

  let s1 = str1.length < str2.length ? str1 : str2,
      s2 = str1.length < str2.length ? str2 : str1;

  let pairs1 = getNGrams(s1, gramSize),
      pairs2 = getNGrams(s2, gramSize),
      set = new Set(pairs1);

  let total = pairs2.length,
      hits = 0;
  for (let item of pairs2) {
    if (set.delete(item)) hits++;
  }
  return hits / total;
}
