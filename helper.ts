export const isSequence = (val: string) => {
  const lowerCased = val.toLowerCase();
  let isSeq = true;
  for (let i = 0; i < lowerCased.length; i++) {
    if (i < lowerCased.length - 1) {
      const currChar = lowerCased.charCodeAt(i);
      const nextChar = lowerCased.charCodeAt(i + 1);
      if (nextChar - currChar !== 1) {
        isSeq = false;
        break;
      }
    }
  }
  return isSeq;
};

export const isReversedSequence = (val: string) => {
  const lowerCased = val.toLowerCase();
  let isRevSeq = true;
  for (let i = 0; i < lowerCased.length; i++) {
    if (i < lowerCased.length - 1) {
      const currChar = lowerCased.charCodeAt(i);
      const nextChar = lowerCased.charCodeAt(i + 1);
      if (currChar - nextChar !== 1) {
        isRevSeq = false;
        break;
      }
    }
  }
  return isRevSeq;
};