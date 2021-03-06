
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

param (
    [System.Object]$location, $newFileName
)
#$location must be a path object... 
$nestedChildren = Get-ChildItem ($location).Path -Recurse

$finalResult = $nestedChildren | `
    ForEach-Object -Begin { $finalRes = @() } -Process {
        $customObj = @{};
        $currentItemInFile = Get-Item $_.FullName
        $customObj.Path = $_.FullName
        $customObj.Name = $_.Name
        $customObj.IsFolder = $currentItemInFile.PSIsContainer

        $finalRes += $customObj
    } -End { 
        $finalRes 
    } `
    | Export-Csv test1.csv



    # A short more compact version...
    $res2 = Get-ChildItem ($location).Path -Recurse `
    | Select-Object {
        $it = Get-Item $_.FullName
       New-Object psobject -Property @{
            Path = $it.FullName
            Name = $it.Name   
            IsFolder = $it.PSIsContainer
        } `
        | Select-Object Name, IsFolder
    } `
    | Export-Csv -NoTypeInformation test1.csv