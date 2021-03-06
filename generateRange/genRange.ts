// export const genRange = (min, max, step) => {
//     let current = min;
//     let arr = [ min ];
//     while (current+=step < max) {
//         current = current + step;
//         arr = [...arr, current];
//     }

//     return arr;
// }

const genRangeHelper = (max, step, current, acc) => {
    const nextStep = current + step;
    return nextStep <= max ? genRangeHelper(max, step, nextStep, [...acc, nextStep]) : acc;
}
  
  
export const genRange = (min, max, step) => genRangeHelper(max, step, min, [ min ]);

// Iterative faster appraoch... 


export const fastGenRange = (min, max, step = 1) => {
  let acc = [ min ];
  let current = min;
  while (current < max) {
    acc.push(current + step);
    current = current + step;
  }

  return acc;
}
