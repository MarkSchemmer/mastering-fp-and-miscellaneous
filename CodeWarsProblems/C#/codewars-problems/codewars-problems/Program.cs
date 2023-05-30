using System;

namespace MyApp // Note: actual namespace depends on the project name.
{

    internal class Program
    {

        public string ReverseString(string s) => s.ToCharArray().Reverse().Aggregate("", (a, c) => a + c);

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}