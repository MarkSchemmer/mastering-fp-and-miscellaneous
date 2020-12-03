
<#
    Your goal is to return multiplication table for number that is always an integer from 1 to 10.

    For example, a multiplication table (string) for number == 5 looks like below:

    1 * 5 = 5
    2 * 5 = 10
    3 * 5 = 15
    4 * 5 = 20
    5 * 5 = 25
    6 * 5 = 30
    7 * 5 = 35
    8 * 5 = 40
    9 * 5 = 45
    10 * 5 = 50
    
    P. S. You can use \n in string to jump to the next line.

#>

BeforeAll { 
    function Get-Planet ([string]$Name = '*') {
        $planets = @(
            @{ Name = 'Mercury' }
            @{ Name = 'Venus'   }
            @{ Name = 'Earth'   }
            @{ Name = 'Mars'    }
            @{ Name = 'Jupiter' }
            @{ Name = 'Saturn'  }
            @{ Name = 'Uranus'  }
            @{ Name = 'Neptune' }
        ) | ForEach-Object { [PSCustomObject] $_ }

        $planets | Where-Object { $_.Name -like $Name }
    }

    # Multi table function for js translation 
    function Multi-Table ([int] $n) {
        return (1..10 | ForEach-Object { "$($_) * $($n) = $($_ * $n)"; }) -join "\n";
    }

    function Multi-Table-Private ([int] $n) {

        function MT ([int] $n) {
            return (1..10 | ForEach-Object { "$($_) * $($n) = $($_ * $n)"; }) -join "\n";
        }

        return MT $n;
    }
}

# Dummy test for testing if Pester works... 
Describe 'Get-Planet' {
    It 'Given no parameters, it lists all 8 planets' {
        $allPlanets = Get-Planet
        $allPlanets.Count | Should -Be 8
    }
}


# Testing for multi table
Describe "Multi Table Tests" {
    It "Multi Table 5" {
        $res = Multi-Table 5;
        $res | Should -Be "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50";
    }

    It "Multi Table 1" {
        $res = Multi-Table 1;
        $res | Should -Be "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10";
    }
}

Describe "Multi Table Random Tests" {
    It "Tests" {


        function Multi-Table-Private ([int] $n) {
            return (1..10 | ForEach-Object { "$($_) * $($n) = $($_ * $n)"; }) -join "\n";
        }

        foreach ($randN in (((1..10) + (1..10)) | Sort-Object { Get-Random })) {

            $mySolution = Multi-Table-Private $randN;

            $endUserSolution = Multi-Table $randN;

            $endUserSolution | Should -Be $mySolution;
        }
    }
}