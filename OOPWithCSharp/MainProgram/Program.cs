using System;

/*
    
    This is the first exercise of the OOP with C# book chapter 1. 

    Even though my simple interpretation is simple, I still crafted this out my own. 

    I only pushed this exercise as much as the book itself pushed me. 
    
    Create an esteric atm machine in a simple loop with a predefined pin. 

    Have the be able to 


    When the program start you need to enter a pin and a name... 


    Withdraw

    Desposit

    Balance check

    Quit

*/

namespace OOPWithCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Chapter 1 basic atm machine.
            // ATMLoop();

            var a = new Fraction(3, 8);
            var b = new Fraction(2, 8);
            Log($"Fraction a: {a}");
            Log($"Fraction b: {b}");
            var c = a + b;
            Log($"Fraction c: {c}");

            // Console.WriteLine("End of Program. ");
        }

        public static void Log(string info) => Console.WriteLine(info);





        public static void ATMLoop() 
        {

            // Default Pin should 1234, if you pin does not equal program should exit. 

            int balance = 1000; // Starting balance is 1,000$. 
            int pin = 0, choice = 0;
            string Name = "";

            string topOfBox = "******************************************************************* \n";
            string Desposit = " 1: Desposit. \n";
            string Withdraw = " 2: Withdraw. \n";
            string CheckBalance = " 3: Check Balance. \n";
            string QuitProgram = " 4: Exit Program. \n ";
            string formatMenu = topOfBox + Desposit + Withdraw + CheckBalance + QuitProgram + topOfBox;

            string PleaseEnterName = "Please Enter your Name: ";
            string PleaseEnterYourPin = "Please enter your Pin: ";


            Action logBalance = () => Log($"Current balance: {balance}");


            // Need to prompt for Pin and Name. 
            // Then you need to start the transactions.

            Log(PleaseEnterName);
            Name = Console.ReadLine();

            Log(PleaseEnterYourPin);
            pin = Int32.Parse(Console.ReadLine());

            while (choice != 4) 
            {
                if (pin != 1234) 
                {
                    Log("Wrong pin entered, exiting program. ");
                    choice = 4;
                } 
                else 
                {
                    Log(formatMenu);
                    Log("Please enter command: ");
                    int newChoice = Int32.Parse(Console.ReadLine());
                    choice = newChoice;
                }

                switch(choice) 
                {
                    case 1: 
                    {
                        Log("Please enter amount to be desposited: ");
                        int amountDesposited = Int32.Parse(Console.ReadLine());
                        balance += amountDesposited;
                        logBalance();
                        break;
                    }
                    case 2: 
                    {
                        Log("Please enter how much to withdraw: ");
                        int amountToWithDraw = Int32.Parse(Console.ReadLine());
                        balance -= amountToWithDraw;
                        logBalance();
                        break;
                    }
                    case 3: 
                    {
                        logBalance();
                        break;
                    }
                    case 4: 
                    {
                        Log("Exiting Program. ");
                        choice = 4;
                        break;
                    }
                    default: 
                        Log("Exiting Program. ");
                        choice = 4;
                        break;
                }
            }
        }
    }
}
