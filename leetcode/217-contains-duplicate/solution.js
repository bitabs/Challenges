var Solution = (() => {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  function containsDuplicate(nums) {
    const set = new Set(nums);

    return set.size < nums.length;
  }

  /** Test 1 */
  console.assert(true, containsDuplicate([]));

  /** Test 2 */
  console.assert(true, containsDuplicate([1, 2, 3]));

  /** Test 3 */
  console.assert(true, containsDuplicate([1, 2, 1]));
})();
