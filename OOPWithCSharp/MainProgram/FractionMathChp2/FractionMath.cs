using System;

/*
        The concepts of Object Oriented Programming... 

        - Inheritance
            This is basically how subclasses can in herite methods and properties from base classes.

        - Encapulation
            This is the use of access modifiers, where we can control what access other classes have 
            to the the other classes they collaborate with. 

        - Abstraction
            I think this is generally the use of the "abstract" keyword, which allows us to organize our ideas
            All other classes inherit from  
*/

namespace OOPWithCSharp
{
    public class Fraction 
    {
        public int num { get; set; }
        public int den { get; set; }
        public Fraction(int n, int d) 
        {
            if (d == 0) throw new Exception("Can't have a denominator of 0.");

            this.num = n;
            this.den = d;
        }

        public override string ToString()
        {
            return $"{num}/{den}";
        }

        /*

        COMPLETED: 
            - Basic add functionality for the fraction class

        TODOS: 
            - Different denominators
                if they have different denomicators, I need to make a method for
                finding the least common denominator. 

                        * Create algorithm for finding GCF
                        * Create an algorithm for finding the Least common multiple... 
                        * Then multiply the GCF with the great denominator
                          then now you have you're new set of denominators.

            - Automatically check if fraction can be reduced to lowest terms
            - Handle 0 numerator
        */

        public static Fraction operator +(Fraction a, Fraction b) 
        {
            if (a.den == b.den) 
            {
                var newNumerator = a.num + b.num;
                var denominator = a.den;
                return new Fraction(newNumerator, denominator);
            } 
            else 
            {
                var lcm = LeastCommonMultiple(a.den, b.den);
                var multiplyerA = lcm / a.den;
                var multiplyerB = lcm / b.den; 
                var newNumeratorA = a.num * multiplyerA;
                var newNumeratorB = b.num * multiplyerB;
                return new Fraction(newNumeratorA + newNumeratorB, lcm);
            }
        }

        public static int GreatestCommonFactor(int a, int b) 
        {
            int greater = a > b ? a : b;
            Console.WriteLine($"greater: {greater}");
            int greatestFacotor = 2;
            var half = Math.Ceiling((decimal)(greater / 2));
            Console.WriteLine($"half: {half}");
            for (var i = 2; i <= half; i++) 
            {
                if (a % i == 0 && b % i == 0) 
                {
                    greatestFacotor = i;
                }
            }

            return greatestFacotor;
        }

        public static int LeastCommonMultiple(int a, int b) 
        {
            int gcf = GreatestCommonFactor(a, b);

            int aa = a / gcf;

            return b * aa;
        }
    }
}