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
    // unique use case
    vector<int> test1{10, 20, 30};
    bool test1Dup = Solution::containsDuplicate(test1);
    printf("Output 1: %s\n", test1Dup ? "true" : "false");

    printf("===============\n");

    // duplicate case
    vector<int> test2{10, 20, 30, 10};
    bool test2Dup = Solution::containsDuplicate(test2);
    printf("Output 2: %s", test2Dup ? "true" : "false");

    return 0;
}