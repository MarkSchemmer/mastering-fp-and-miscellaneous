using System;

namespace MyApp // Note: actual namespace depends on the project name.
{

    internal class Program
    {

        public string ReverseString(string s) => s.ToCharArray().Reverse().Aggregate("", (a, c) => a + c);

        public static int[] TwoOldestAges(int[] ages)
        {
            var sortedAges = ages.OrderByDescending(x => x).ToArray();
            return new int[] { sortedAges[0], sortedAges[1] };
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}