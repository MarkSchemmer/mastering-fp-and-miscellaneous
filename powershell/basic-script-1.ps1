

# Start with command that works in console
$computerName = $env:COMPUTERNAME
# logging computer name to PowerShell console
Write-Host -ForegroundColor Green $computerName

$data = Get-EventLog System -EntryType Error -Newest 100 -ComputerName $computerName `
| Group-Object -Property Source -NoElement

# Create a HTML report 
$title = " My test report here... "
$footer = "<h1>Report ran on $(Get-Date)</h1>"
$computerNameInHeader = "<h1>$computerName</h1>"

$currentPath = (Get-Location).Path
$fileName = "test.html"
$fileToCreate = "$currentPath\$fileName"
$data | Sort-Object -Property Count, Name -Descending `
      | Select-Object Count, Name `
      | ConvertTo-Html -Title $title -PreContent $computerNameInHeader -PostContent $footer `
      | Out-File $fileToCreate

# Invoke the file and open it.
code $fileToCreate # Opens file in vscode 
<#  
    Now I can parameters to the script, so then 
    I change the name of file maybe or what else I want different.  
#>
