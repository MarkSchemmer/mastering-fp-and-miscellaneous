$pathToModule = "C:\Users\Administrator\Desktop\repros\mastering-fp-and-miscellaneous\CodeWarsProblems\powershell";
$moduleName = "problems";
$mod = "$($pathToModule)\$($moduleName).psm1";

# won't run if the module has already been loaded...
# Import-Module $problemModulePath;

# Need to use the -Force key word to reload no matter what...
# Remember when the module is 
Import-Module -Force $mod;

<#

    Note: When using "$PSScriptRoot" key word that goes directly to the current 
    directory that you're in right now in that file. 

    So if I call here 

    it would do to: "C:\Users\Administrator\Desktop\repros\mastering-fp-and-miscellaneous\CodeWarsProblems\powershell"

#>

Get-Module; # will output all moduels here in powershell console. 

#Test and also take note.
Write-Host "script root" $PSScriptRoot;

Describe "Testing Strong Number as demo test: " {
    It "145 is strong" {
        $res = strongNumber(145); # should be Strong
        $res | Should -Be "STRONG!!!!";
    }
}

Describe "Testing maxTriSum" {
    It "testing set [ 3,2,6,8,2,3 ] -> 17 " {
        $set = @(3,2,6,8,2,3);
        $res = maxTriSum($set);
        $res | Should -Be 17;

        $res2 = maxTriSumRefactored($set);
        $res2 | Should -Be 17;

    }

    It "testing set [ 2,1,8,0,6,4,8,6,2,4 ] -> 18" {
        $set = @(2,1,8,0,6,4,8,6,2,4);
        $res = maxTriSum($set);
        $res | Should -Be 18;

        $res2 = maxTriSumRefactored($set);
        $res2 | Should -Be 18;
    }

    It "testing set [ -7,12,-7,29,-5,0,-7,0,0,29 ] -> 41 " {
        $set = @(-7,12,-7,29,-5,0,-7,0,0,29)
        $res = maxTriSum($set);
        $res | Should -Be 41;

        $res2 = maxTriSumRefactored($set);
        $res2 | Should -Be 41;
    }
}

Describe "Testing overTheRoad" {
    It "overTheRoad 1 3" {
        overTheRoad 1 3 | Should -Be 6
        overTheRoad 3 3 | Should -Be 4
        overTheRoad 2 3 | Should -Be 5
        overTheRoad 3 5 | Should -Be 8
        overTheRoad 7 11 | Should -Be 16
    }
}

Describe "Test choose-best-sum" {

    It "running fixed tests" {
        function testing($t, $k, $ls, $expect) 
        {
            $ans = choose-best-sum $t $k $ls
            $ans | Should -Be $expect
        }
    
        function fixed()
        {   
            $ts = @(50, 55, 56, 57, 58)
            testing 163 3 $ts 163
            $ts = @(50)
            testing 163 3 $ts -1
            $ts = @(91, 74, 73, 85, 73, 81, 87)
            testing 230 3 $ts 228
            $tt = @(100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89);
            testing 230 4 $tt 230
        }

        fixed
    }
}