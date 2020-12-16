// Learn more about F# at http://docs.microsoft.com/dotnet/fsharp
// See the 'F# Tutorial' project for more help.

// Define a function to construct a message to print

open System
open Fuchu

let from whom =
    sprintf "from %s" whom

[<EntryPoint>]
let main args = 
    let exitCode = defaultMainThisAssembly args
    
    Console.WriteLine("Press any key")
    Console.ReadLine() |> ignore

    // return the exit code
    exitCode 
