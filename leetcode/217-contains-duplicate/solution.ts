var Solution = (() => {
  function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size < nums.length;
  }

  /** Test 1 */
  console.assert(true, containsDuplicate([]));

  /** Test 2 */
  console.assert(true, containsDuplicate([1, 2, 3]));

  /** Test 3 */
  console.assert(true, containsDuplicate([1, 2, 1]));
})();
