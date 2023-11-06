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

export const is_n_chars_repeated_by_x_times = (
  input: string,
  n: number,
  x: number
) => {
  let curr = 0,
    next = 0,
    repeated = 0;
  for (let i = 0; i + n < input.length; i += n) {
    for (let j = 0; j < n; ++j) {
      curr += input.charCodeAt(i + j);
      next += input.charCodeAt(i + j + n);
    }
    repeated += curr === next ? 1 : -1;
  }
  return repeated >= x - 1;
};

console.log(is_n_chars_repeated_by_x_times('cxcxcx', 2, 3));
console.log(is_n_chars_repeated_by_x_times('ababab', 2, 3));
console.log(is_n_chars_repeated_by_x_times('121212', 2, 3));
console.log(is_n_chars_repeated_by_x_times('686868', 2, 3));
console.log();
console.log(is_n_chars_repeated_by_x_times('cxfgfg', 2, 3));
console.log(is_n_chars_repeated_by_x_times('ababcx', 2, 3));
console.log(is_n_chars_repeated_by_x_times('126868', 2, 3));
console.log(is_n_chars_repeated_by_x_times('681212', 2, 3));
console.log(is_n_chars_repeated_by_x_times('abab12ab', 2, 3));

//  examples that would match this criteria
//  cxcxcx
//  ababab
//  121212
//  686868

//  examples that would not match this criteria
//  cxfgfg
//  ababcx
//  126868
//  681212
//  abab12ab
function isRepeatingPattern2(input: string, minRepeats: number): boolean {
  const pattern = new RegExp(`^(..)\\1{${minRepeats - 1},}$`);
  return pattern.test(input);
}


function isRepeatingPattern(input: string): boolean {
  // Use a regular expression to match the repeating pattern
  const pattern = /^(..)\1+$/;
  return pattern.test(input);
}

// Test cases
const matchingExamples = ['cxcxcx', 'ababab', '121212', '686868'];
const nonMatchingExamples = [
  'cxfgfg',
  'ababcx',
  '126868',
  '681212',
  'abab12ab'
];

console.log('Matching Examples:');
matchingExamples.forEach((example) => {
  console.log(`${example}: ${isRepeatingPattern(example)}`);
});

console.log('\nNon-Matching Examples:');
nonMatchingExamples.forEach((example) => {
  console.log(`${example}: ${isRepeatingPattern(example)}`);
});
