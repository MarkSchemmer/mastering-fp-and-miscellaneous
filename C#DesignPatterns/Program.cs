using System;

namespace C_DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = new Addor();
            var test2 = new Addor();

            Console.WriteLine(test.add());

            Console.WriteLine(
                Object.ReferenceEquals(test, test2)
            );

            Console.WriteLine(
                Object.ReferenceEquals(test.getInstance(), test2.getInstance())
            );


            // Addor1 tests 
            var addor1Test2 = new Addor1();

            var addor1Test3 = new Addor1();

            // Proves singletong works... 
            var finalTest = Object.ReferenceEquals(addor1Test2.getInstance(), addor1Test3.getInstance());
            Console.WriteLine(finalTest);
            // Addor1 type of checking... 
            Console.WriteLine("Hello World!");
        }


            public abstract class SingletonBase<T>
     where T : SingletonBase<T>, new()
    {
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
         public Addor() {

        }

        static Addor () {

        }
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
