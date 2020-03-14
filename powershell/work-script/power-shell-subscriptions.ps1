
<#

    Link to azure script: https://gallery.technet.microsoft.com/scriptcenter/Export-Azure-Resource-092b9c2a

    #Requires -Version 5 
    #Requires -Module PackageManagement,PowerShellGet 
    #Requires -Module AzureRM.Profile,AzureRM.Resources

#>

 
 
<# 
    # Install the Azure Modules only if you don't have Visual Studio installed 
    # if you have Visual Studio, use the Web Platform Installer 
    Install-Module -Name AzureRM -force 
 
    # Login to Azure, you will be prompted for your creds 
    Add-AzureRmAccount 
#> 

 
# once the csv files are saved on the desktop 
# Open files, insert Table, tick 'my table has headers' 
# format the size of the columns 
# Save as excel document 

# Get-AzureRmSubscription | Export-Csv "./mycsv.csv"

param (
    [string]$filePathWithName, [string]$fileDestinationOutPut
)


function filterRoleDefinitionName ($roleDefinitionName) {
    $roleDefinitions = @(
        "", "", "", ""
    )

    return @($roleDefinitions | Where-Object { $roleDefinitionName -like $_ }).Count -eq 0
}

$isLoggedIn = Get-AzureRmSubscription

if (-not $isLoggedIn) { Add-AzureRmAccount } 

$source = Import-Csv $filePathWithName

$accumulator = @()

foreach ($item in $source) {

    Write-Verbose -Message "Changing to Subscription $($item.Name)" -Verbose 

    Select-AzureRmSubscription -TenantId $item.TenantId -Name $item.Id -Force  
    $Name     = $_.Name 
    $TenantId = $_.TenantId 

    Get-AzureRmRoleAssignment -IncludeClassicAdministrators `
    | Select-Object RoleDefinitionName, DisplayName, SignInName, ObjectType, Scope, `
        @{name='TenantId'; expression = {$TenantId}}, @{name='SubscriptionName'; expression = {$Name}} `
    | ForEach-Object { $accumulator += $_ }
}

$accumulator | Where-Object { filterRoleDefinitionName $_.RoleDefinitionName } | Export-Csv -Path $fileDestinationOutPut
