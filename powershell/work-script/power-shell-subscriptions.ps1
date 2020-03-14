
<#

        [2:16 PM] Alex Triantafillidis (HCL America Inc)
        it goes through subs and expots to csv, then save as xl
        [2:17 PM] Alex Triantafillidis (HCL America Inc)
        only thing left is to import the subscriptions from a csv instead directly from azure
        [MSFT-CE-CXG-M365-CommercePurchase-INT-01.xlsx]

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
 
 
# # Loop through all Subscriptions that you have access to and export the Role information 
# Get-AzureRmSubscription | foreach-object { 
 
#     Write-Verbose -Message "Changing to Subscription $($_.Name)" -Verbose 
 
#     Select-AzureRmSubscription -TenantId $_.TenantId -Name $_.Id -Force 
#     $Name     = $_.Name 
#     $TenantId = $_.TenantId 
 
 
#     Get-AzureRmRoleAssignment -IncludeClassicAdministrators | Select RoleDefinitionName,DisplayName,SignInName,ObjectType,Scope, 
#         @{name='TenantId';expression = {$TenantId}},@{name='SubscriptionName';expression = {$Name}} -OutVariable ra 
 
#     # Also export the individual subscriptions to excel documents on your Desktop. 
#     # One file per subscription 
#     $ra | Export-Csv -Path $home\Desktop\$Name.csv -NoTypeInformation 
 
# } 
 
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

    # why do we need line 73
    Select-AzureRmSubscription -TenantId $item.TenantId -Name $item.Id -Force  
    $Name     = $_.Name 
    $TenantId = $_.TenantId 

    Get-AzureRmRoleAssignment -IncludeClassicAdministrators `
    | Select-Object RoleDefinitionName, DisplayName, SignInName, ObjectType, Scope, `
    @{name='TenantId';expression = {$TenantId}},@{name='SubscriptionName';expression = {$Name}} -OutVariable ra

    $ra | ForEach-Object { $accumulator += $_ }
}

$accumulator | Where-Object { filterRoleDefinitionName $_.RoleDefinitionName } | Export-Csv -Path $fileDestinationOutPut
