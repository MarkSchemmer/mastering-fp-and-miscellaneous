export const sumOfDifferences = arr => arr
                                       .sort((a, b) => b - a)
                                       .map((i, index) => i - arr[index + 1] || 0)
                                       .reduce((acc, cur) => acc + cur, 0);


