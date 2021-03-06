
<#
    No PowerShell scripting in this course

    In this course I need to see powerShell at work... 
#>

# How to get version of powershell
$PSVersionTable 

# How to get all snapins... 
Get-PSSnapin

# Get snapins that are available to me
Get-PSSnapin -Registered


# Find a module

Find-Module psteachingtools

# To get commands on their noun do 
Get-Command -noun vegetable

# To get help on a command use 
Get-Help Get-Vegetable

# Get-Member 
# Will get all the properties and methods of objects
Get-Help Get-Member 

# piping every object in get-vegetable into Get-Member
Get-Vegetable | Get-Member 


$vegies = Get-Vegetable | Select-Object -Property Name, Count, CookedState, IsRoot

Write-Host $vegies

# How to select all properties
$vegies2 = Get-Vegetable | Select-Object -First 5 -Property *

# Select only vegetables only on IsRoot

$vegiesIsRoot = $vegies2 | Where-Object -Property IsRoot -eq $True | Select-Object -Property *

Write-Host $vegiesIsRoot 

# If you want to get unique names use 
# -Unique

<#
    Need to understand that when I do

    Get-Vegetable | Select Name -Unique -> still returns a list of Vegtable objects 

    If I want the text value and nothing else then use

    Get-Vegetable | Select -Unique -ExapndProperty Name
#>

# Group objects on color

$groupedVegies = Get-Vegetable | Group-Object -Property Color

$redVegies = $groupedVegies | Where-Object -Property Name -eq red

$groupOfRedVegies = ($redVegies).Group

<#
    Understanding ForEach-Object

    Cmdlet emits a bunch of objects, for each do something, 
    then finally pass results onto next pipe!

    cannot confuse with alias of ForEach-Object and with
    enumerator foreach(){}


    Advanced ForEach-Object

    -Begin {} : commands that only run once before anything is processed

    -Process {} : commands that run once for each incoming objec, 
                  only block where $_ can be used to access current object in loop

    -End {} : commands that run once at the end after everything is process

#>

# ForEach test... write script to get children of current file location

<#
    Out-File -> take output and send it to file 
    Out-Gridview -> output to graphical user interface 
    Out-Printer -> output to printer for print 
#>

<#
    Parameter binding:   
#>