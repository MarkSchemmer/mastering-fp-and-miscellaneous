

$test = Get-ChildItem | select -Property Name 
# Notes for PowerShell scripting... for beginning scripting... 
# Have to start 

# By default powershfell will not run scripts, you have to specify the full path... 
# Will have to change the execution-policy, by default this set to restricted 
# You can set the execution-policy Remote-Signed which run your own scripts or any  script that has been signed

# A better approach is All-Signed, which only 

# Command to change Execution-Policy is 
# Set-ExecutionPolicy -Type-of-Policy

# To get Execution policy 
# Get-ExecutionPolicy

# PowerShell scope

# when you run a script a script create it's own scope 

# You reference something;
# PowerShell looks in the current scope 
    # If it finds it - Success !
    # Else it looks to the parent 
    # if still no success looks to the grandparent and so on... 
    # Looks up the scope hiarchy until it finds it... 


# It's okay to reference global values such as PsDrive and some cmdlets have a scope parameter -Scope 


# Why do we script -> Automate repetive and low value tasks
# Ensure Consitency, the can be run by everyone

<#
        This is block comment



#>


