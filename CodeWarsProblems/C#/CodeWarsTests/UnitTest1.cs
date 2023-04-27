namespace CodeWarsTests;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        Assert.AreEqual(Program.DoubleInteger(2), 4);
    }
}


public class Program 
{
    public static int DoubleInteger(int n)
    {
        return n * 2;
    }
}