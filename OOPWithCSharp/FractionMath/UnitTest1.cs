using Microsoft.VisualStudio.TestTools.UnitTesting;
using OOPWithCSharp;
using System;

namespace FractionMath
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethodDummyTest1()
        {
            Assert.IsTrue(2 + 2 == 4, "2 + 2 equals 4. ");
        }
    }

    [TestClass]
    public class TestMathFractionClass 
    {
        [TestMethod]
        public void FractionMathTests() 
        {
            // var a = new Fraction(3, 5);
            int gcfTest1 = Fraction.GreatestCommonFactor(8, 12);
            Console.WriteLine(gcfTest1);
            Assert.IsTrue(Fraction.GreatestCommonFactor(8, 12) == 4, "GCF of 8 & 12 is 4. ");
            Assert.IsTrue(Fraction.GreatestCommonFactor(18, 27) == 9, "GCF of 18 & 27 is 9. ");
            Assert.IsTrue(Fraction.GreatestCommonFactor(50, 20) == 10, "GCF of 20 & 50 is 120");


            // Testing Least common multiple aka: LCM. 
            Assert.IsTrue(Fraction.LeastCommonMultiple(8, 12) == 24, "LCM of 8 & 12 is 24. ");
            Assert.IsTrue(Fraction.LeastCommonMultiple(10, 15) == 30, "LCM of 10 & 15 is 30. ");
            Assert.IsTrue(Fraction.LeastCommonMultiple(14, 20) == 140, "LCM of 14 & 20 is 140. ");


            var OneSixth = new Fraction(1, 6);
            var TwoFourths = new Fraction(2, 4);

            var EighthTwelfs = OneSixth + TwoFourths;

            Assert.IsTrue(EighthTwelfs.num == 8, "shold be 8th. ");
            Assert.IsTrue(EighthTwelfs.den == 12, "shoulbe be 12. ");
        }
    }
}
