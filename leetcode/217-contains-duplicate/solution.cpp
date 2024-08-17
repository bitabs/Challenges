#include <vector>
#include <map>

using std::map;
using std::vector;

class Solution
{
public:
    bool static containsDuplicate(vector<int> &nums)
    {
        map<int, int> mp;

        // counter for each key
        for (int i : nums)
            mp[i]++;

        // detects duplicate if the value is more than 1
        for (auto m : mp)
        {
            if (m.second > 1)
                return true;
        }

        return false;
    }
};

int main()
{
    /** Test 1 */
    vector<int> test1{};
    printf("Output 1: %s\n", Solution::containsDuplicate(test1) ? "true" : "false");

    printf("===============\n");

    /** Test 2 */
    vector<int> test2{1, 2, 3};
    printf("Output 2: %s\n", Solution::containsDuplicate(test2) ? "true" : "false");

    printf("===============\n");

    /** Test 3 */
    vector<int> test3{1, 2, 1};
    printf("Output 3: %s", Solution::containsDuplicate(test3) ? "true" : "false");

    return 0;
}