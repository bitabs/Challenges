use std::collections::HashMap;

pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut map: HashMap<i32, i32> = HashMap::new();

    for num in &nums {
        // give me the value, else 0 if non-existent
        let value = map.entry(*num).or_insert(0);

        *value += 1;

        if *value > 1 {
            // duplicate found
            return true;
        }
    }

    // no duplicate found
    false
}

fn main() {
    /** Test 1 */
    let test1 = contains_duplicate(vec![]);
    assert_eq!(test1, false);

    /** Test 2 */
    let test2 = contains_duplicate(vec![1, 2, 3]);
    assert_eq!(test2, false);

    /** Test 3 */
    let test3 = contains_duplicate(vec![1, 2, 1]);
    assert_eq!(test3, true);
}
