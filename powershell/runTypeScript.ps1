
param (
    [string]$fileName
)

tsc "$fileName.ts"
node "$fileName.js"

