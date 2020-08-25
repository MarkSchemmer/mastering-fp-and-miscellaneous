using System;
using System.Linq;
using System.Collections.Generic;

namespace FacotryPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            var productFacotry = new ConceteProductFacotry();
            var productList = new List<ProductType>()  { 
                ProductType.A, ProductType.B, ProductType.C
            }.Aggregate(new List<Product>(), (acc, cur) => {
                acc.Add(productFacotry.GenerateProduct(cur));
                return acc;
            }).ToList();

            productList.ForEach(p => p.ShowProduct());
        }
    }


    public enum ProductType { A, B, C }

    interface Product {
        void ShowProduct();
    }

    public class ProductA: Product {
        public ProductA() {}

        public void ShowProduct () => Console.WriteLine("I'm Product A");
    }

        public class ProductB: Product {
        public ProductB() {}

        public void ShowProduct () => Console.WriteLine("I'm Product B");
    }

        public class ProductC: Product {
        public ProductC() {}

        public void ShowProduct () => Console.WriteLine("I'm Product C");
    }

    abstract class BaseProductFactory 
    {
        public abstract Product GenerateProduct(ProductType type);
    }

    class ConceteProductFacotry 
    : BaseProductFactory 
    {
        public override Product GenerateProduct(ProductType type) {
            switch (type) 
            {
                case ProductType.A: {
                    return new ProductA();
                }

                case ProductType.B: {
                    return new ProductB();
                }

                case ProductType.C: {
                    return new ProductC();
                }

                default: {
                    throw new ArgumentException("Invalid argument was given: ");
                }
            }
        } 
    } 
}
