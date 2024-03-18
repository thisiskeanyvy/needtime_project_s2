using System;
using GodoMulti;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("1. Start Server");
        Console.WriteLine("2. Start Client");
        Console.Write("Choose option: ");
        int option = int.Parse(Console.ReadLine());

        switch (option)
        {
            case 1:
                Message.StartServer();
                break;
            case 2:
                Message.StartClient();
                break;
            default:
                Console.WriteLine("Invalid option.");
                break;
        }
    }
}