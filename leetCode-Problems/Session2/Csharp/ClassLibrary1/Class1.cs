namespace ClassLibrary1
{
    public class LeetCodeProblems
    {
        public int[] TwoSum(int[] nums, int target)
        {
            var seen = new Dictionary<int, int>();

            for (int i = 0; i < nums.Count(); i++) {
                int n = nums[i];
                int k = target - n;
                var result = seen.TryGetValue(k, out int v);
                if (result) {
                    return new int[] { i, v };
                }

                seen[n] = i;
            }

            return new int[] { };
        }
    }
}
