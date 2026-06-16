//Given a list of customer IDs with duplicates, return a deduplicated list preserving original order.
let customerIDs = [123, 456, 123, 789, 456, 101];
const result = [...new Set(customerIDs)];
console.log(result);

A Set stores only unique values. As I iterate through the array, I add each ID to the Set only if it hasn't been seen before. Since I 
process elements in their original sequence, the resulting array preserves the original order while removing duplicates. The time
 complexity is O(n) and the space complexity is O(n).