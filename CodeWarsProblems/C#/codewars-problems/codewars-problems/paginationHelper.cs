using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codewars_problems
{

    //public class Page<T>
    //{
    //    public int pageNumber;
    //    public List<T> itemsOnPage;

    //    public Page(int pgNumb, List<T> items) 
    //    {
    //        this.pageNumber = pgNumb;
    //        this.itemsOnPage = items;
    //    }
    //}

    public class ComplexItem<T>
    {
        public T item;
        public Guid ID;

        public ComplexItem(T item)
        {
            this.item = item;
            this.ID = new Guid();
        }
    }

    public class PaginationHelper<T>
    {


        public class Page<T>
        {
            public int pageNumber;
            public List<ComplexItem<T>> itemsOnPage;

            public Page(int pgNumb, List<ComplexItem<T>> items)
            {
                this.pageNumber = pgNumb;
                this.itemsOnPage = items;
            }
        }

        // TODO: Complete this class

        /// <summary>
        /// Constructor, takes in a list of items and the number of items that fit within a single page
        /// </summary>
        /// <param name="collection">A list of items</param>
        /// <param name="itemsPerPage">The number of items that fit within a single page</param>
        /// 

        private IList<ComplexItem<T>> list;
        private List<Page<T>> pages = new List<Page<T>>();
        private int itemsPerPage;
        public PaginationHelper(IList<T> collection, int itemsPerPage)
        {
            this.list = collection.Select((T i) => new ComplexItem<T>(i)).ToList();
            this.itemsPerPage = itemsPerPage;


            this.pages = this.generatePages(this.list);
        }

        private List<Page<T>> generatePages<T>(IList<ComplexItem<T>> l)
        {
            List<Page<T>> pgs = new List<Page<T>>();
            int pageNumb = 1;
            while (l.Count > 0)
            {
                var takingPart = l.Take(this.itemsPerPage).ToList();
                var nextPart = l.Skip(this.itemsPerPage);

                pgs.Add(new Page<T>(pageNumb, takingPart));


                pageNumb = pageNumb + 1;
                l = nextPart.ToList();
            }

            return pgs;
        } 

        /// <summary>
        /// The number of items within the collection
        /// </summary>
        public int ItemCount
        {
            get
            {
                return this.list.Count;
            }
        }

        /// <summary>
        /// The number of pages
        /// </summary>
        public int PageCount
        {
            get
            {
                return this.pages.Count;
            }
        }

        /// <summary>
        /// Returns the number of items in the page at the given page index 
        /// </summary>
        /// <param name="pageIndex">The zero-based page index to get the number of items for</param>
        /// <returns>The number of items on the specified page or -1 for pageIndex values that are out of range</returns>
        public int PageItemCount(int pageIndex)
        {
            try
            {
                return this.pages[pageIndex].itemsOnPage.Count;
            } 
            catch(Exception e)
            {
                return -1;
            }
        }

        /// <summary>
        /// Returns the page index of the page containing the item at the given item index.
        /// </summary>
        /// <param name="itemIndex">The zero-based index of the item to get the pageIndex for</param>
        /// <returns>The zero-based page index of the page containing the item at the given item index or -1 if the item index is out of range</returns>
        public int PageIndex(int itemIndex)
        {
            try
            {
                ComplexItem<T> itemToFind = this.list[itemIndex - 1];

                if (itemToFind == null) { throw new Exception(""); } 

                var pageItem = this.pages.FirstOrDefault((Page<T> pg) =>
                {
                    return pg.itemsOnPage.Any((ComplexItem<T> item) => {
                        ComplexItem<T> i = item;
                        if (i == null) { return false; }

                        return i.ID.Equals(itemToFind.ID);
                     });
                });

                if (pageItem == null) { throw new Exception("");  }

                return pageItem.pageNumber;
            } 
            catch (Exception e)
            {
                return -1;
            }
        }
    }
}
