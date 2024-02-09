namespace ClassLibrary1
{

    using System;

    /// <summary>
    /// // int array -> find the 3rd highest value? 
    // let ar = [1, 10, 3, 8, 0, -50, -20, 40];
    /// </summary>
    /// 
    public class InterviewTest
    {
        public static int FindHighestThirdValue(int[] ar)
        {
            var n1 = 0;
            var n2 = 0;
            var n3 = 0;

            for (int i = 0; i < ar.Count(); i++)
            {
                var max = ar[i];
                var temp = n1;
                var temp2 = n2;

                if (max > n1)
                {
                    n1 = max;
                    n2 = temp;
                    n3 = temp2;
                }
                else if (max > n2)
                {
                    n2 = max;
                    n3 = temp2;
                }
                else if (max > n3)
                {
                    n3 = max;
                }
            }

            return n3;
        }
    }




























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
