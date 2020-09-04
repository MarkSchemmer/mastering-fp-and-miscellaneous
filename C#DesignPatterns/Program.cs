using System;
using System.Linq;
using System.Collections.Generic;

namespace C_DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = new Addor();
            var test2 = new Addor();

            // Console.WriteLine(test.add());

            // Console.WriteLine(
            //     Object.ReferenceEquals(test, test2)
            // );

            // Console.WriteLine(
            //     Object.ReferenceEquals(test.getInstance(), test2.getInstance())
            // );

            // Console.WriteLine(default(int));


            // Addor1 tests 
            var addor1Test2 = new Addor1();

            var addor1Test3 = new Addor1();

            // Proves singletong works... 
            var finalTest = Object.ReferenceEquals(addor1Test2.getInstance(), addor1Test3.getInstance());
            // Console.WriteLine(finalTest);
            // Addor1 type of checking... 

            var valArgs = new ValidateArgs();
            string[] args1 = new string[]{ "--count", "name"};
            var res = valArgs.Validate(args1);
            Console.WriteLine(
                res
            );


            string[] args2 = new string[] { "--name" };

            Console.WriteLine(
                valArgs.Validate(args2)
            );

            Console.WriteLine("Hello World!");
        }


        public static Dictionary<int, int> IntegerOcurrences(int[] arr) 
        {   
            Dictionary<int, int> resultSet = new Dictionary<int, int>(); 

            for (int i = 0; i < arr.Length; i++) {

                var containsInt = resultSet.ContainsKey(arr[i]);
                    if (containsInt) {
                        // increment value by one
                        resultSet[arr[i]] = resultSet[arr[i]] + 1;
                    } else {
                        // add key and set value to 1
                        resultSet.Add(arr[i], 1);
                    }
            }
            // return the dictionary 
            return resultSet;
        }

        public class ValidateArgs 
        {

            public bool isValidString (string s) 
            {
                if(s[0] == '-' && s[1] == '1') return true;
                return s.Length >= 3 && s.Length <= 10;
            }

            public bool isValidNum (int n) 
            {
                return n >= 10 && n <= 100;
            }


            public int Validate(string[] args)
            {
                args.ToList().ForEach(x => Console.WriteLine(x));
                var help = "help";
                var name = "--name";
                var count = "--count";

                var doesContainHelp = false;
                if (args.Length == 0) return -1;
                var ListArgs = args.Select(x => x.ToLower()).ToList();
                // Need to find errors
                string nextShouldBe = null;

                for (int i = 0; i < ListArgs.Count; i++) {

                    var val = ListArgs[i];
                    if(val.Contains(help)) { doesContainHelp = true; continue; }

                    // Command step
                    if (nextShouldBe == null && val == name) {
                        nextShouldBe = name;
                        continue;
                    } else if (nextShouldBe == null && val == count) {
                        Console.WriteLine("I'm here.");
                        nextShouldBe = count;
                        continue;
                    } else if(nextShouldBe == null) {
                        return -1;
                    }

                    // test step

                    if(nextShouldBe == count) {
                        var canConvert = int.TryParse(val, out int num);
                        Console.WriteLine(canConvert);
                        if (canConvert == true) {
                            if (!isValidNum(num)) return -1;

                            
                            nextShouldBe = null;
                            continue;
                        } else {
                            return -1;
                        }
                    }


                    if (nextShouldBe == name) {
                        if(!isValidString(val)) return -1;

                        nextShouldBe = null;
                        continue;
                    }
                }
                if (nextShouldBe != null && doesContainHelp == false) return -1;
                return doesContainHelp ? 1 : 0;
            }
        }


            public abstract class SingletonBase<T>
     where T : SingletonBase<T>, new()
    {

        protected SingletonBase() {

        }
        private static readonly object padlock = new object();
        private static T _instance = new T();
        public static T Instance
        {
            // Double thread check
            get
            {
                if (_instance == null)
                {
                    lock (padlock)
                    {
                        if (_instance == null)
                        {
                            Console.WriteLine("I'm called herer");
                            _instance = new T();
                        }
                    } 
                }

                return _instance;
            }
        }

        public T getInstance() 
        {
            return Instance;
        }
    }

    // Test

    public class Addor: SingletonBase<Addor>
    {

        public int a = 5;
        public int b = 5;

        public int add ()
        {
            return a + b;
        }
    }
    }

        public class Addor1
        {

            private static readonly object padlock = new object();
            private static Addor1 instance = null;
            public static Addor1 Instance
            {
                get 
                {
                    if (instance == null) 
                    {
                        lock (padlock) 
                        {
                            if (instance == null) 
                            {
                                instance = new Addor1();
                            }
                        }
                    }

                    return instance;
                }
            } 

            public Addor1 getInstance() {
                return Instance;
            }

            public int a = 5;
            public int b = 5;

            public int add ()
            {
                return a + b;
            }
        }
    }
