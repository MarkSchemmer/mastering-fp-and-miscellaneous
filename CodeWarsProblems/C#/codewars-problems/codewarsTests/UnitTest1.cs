using codewars_problems;

namespace codewarsTests
{
    public class Tests
    {
        private readonly IList<char> collection = new List<char> { 'a', 'b', 'c', 'd', 'e', 'f' };
        private PaginationHelper<char> helper;

        [SetUp]
        public void Setup()
        {
            helper = new PaginationHelper<char>(collection, 4);
        }

        [Test]
        public void PageCountTest()
        {
            Assert.AreEqual(2, helper.PageCount);
        }

        [Test]
        public void ItemCountTest()
        {
            Assert.AreEqual(6, helper.ItemCount);
        }

        [Test]
        public void PageItemCountTest()
        {
            Assert.AreEqual(4, helper.PageItemCount(0));
            Assert.AreEqual(2, helper.PageItemCount(1));
            Assert.AreEqual(-1, helper.PageItemCount(2));

        }

        [Test]
        public void PageIndexTest()
        {
            Assert.AreEqual(helper.PageIndex(5), 1);
            Assert.AreEqual(helper.PageIndex(2), 0);
            Assert.AreEqual(helper.PageIndex(20), -1);
            Assert.AreEqual(helper.PageIndex(-10), -1);
        }
    }
}