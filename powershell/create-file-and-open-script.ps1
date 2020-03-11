

$path = (Get-Location).Path

$fileName = Read-Host " Please input name of file: "

$filePathAndName = "$path\$fileName"

Out-File $filePathAndName

code $filePathAndName