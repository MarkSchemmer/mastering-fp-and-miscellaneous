
<# 

        Link to problem: https://www.codewars.com/kata/550498447451fbbd7600041c/train/powershell

        Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

        Examples
        Valid arrays
        a = [121, 144, 19, 161, 19, 144, 19, 11]  
        b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
        comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

        a = [121, 144, 19, 161, 19, 144, 19, 11] 
        b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
        Invalid arrays
        If we change the first number to something else, comp may not return true anymore:

        a = [121, 144, 19, 161, 19, 144, 19, 11]  
        b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
        comp(a,b) returns false because in b 132 is not the square of any number of a.

        a = [121, 144, 19, 161, 19, 144, 19, 11]  
        b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]



        Steps for solving?

        - Need to make a squaring alroithm
        - Need to create a closure or memoization in powershell to be efficent

#>

# $HashTable = {};

Function ALL
{
    Param
    (
        $lista, $listb
    )
    BEGIN
    {
        $all = $true;
    }
 
    PROCESS
    {


     foreach ($item in $lista) {


          Write-Output $item;

         if (-not $listb.Contains($item)) {
             Write-Output "all should be false";
             $all = $false;
         }

     }   
    }
    END
    {
        $all;
    }
} 

function comp([int[]]$a1, [int[]]$a2)
{

    if ($null -eq $a1 -or $a1.Length -eq 0 -or $null -eq $a2 -or $a2.Length -eq 0) { return $false; } 


    $a1 = $a1 | ForEach-Object -Begin { $newSet = @(); } -Process { $newSet += ($_ * $_); } -End { $newSet } | Sort-Object -Descending;

    Write-Output $a1;

    Write-Output "new line here \n ";

    Write-Output $a2 | Sort-Object -Descending;



    Write-Output "Executing ALL";


    return ALL $a1 $a2;
}

[int[]] $_a1 =  121, 144, 19, 161, 19, 144, 19, 11 
[int[]] $_a2 =  231, 20736, 361, 25921, 361, 20736, 361, 121


comp $_a1 $_a2; 



<#
                function comp($a1, $a2) {
                    if ($a1.count -eq 0 -and $a2.count -eq 0) {
                        return $true
                    }
                    elseif ($a1.count -eq 0 -or $a2.count -eq 0) {
                        return $false
                    }
                    else {
                        $res = @()
                        foreach ($x in $a1) {
                            $res += $x*$x
                        }
                        if ((Compare-Object $res $a2).count -ne 0) {
                            return $false
                        }
                        else {return $true}
                    }
                }
 #>



 <#
            A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

            He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

            His mother looks out of a window 1.5 meters from the ground.

            How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

            Three conditions must be met for a valid experiment:
            Float parameter "h" in meters must be greater than 0
            Float parameter "bounce" must be greater than 0 and less than 1
            Float parameter "window" must be less than h.
            If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

            Note:
            The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

            Example:
            - h = 3, bounce = 0.66, window = 1.5, result is 3

            - h = 3, bounce = 1, window = 1.5, result is -1 

            (Condition 2) not fulfilled).

            Math algorithm for determining bounces: https://math.stackexchange.com/questions/1491829/number-of-times-a-bouncing-ball-will-exceed-a-given-height/1491847

            Explanation: 
                        Let ho be the initial height of the ball and hn be the height the ball reaches after n bounces. 
                        Since with each bounce the ball climbs to two-thirds its previous height, we find that hn=(23)nho. 
                        Dividing both sides by ho, we find that hnho=(23)n. 
                        Taking the logarithm with base two-thirds of both sides, we find that n=log 2/3(hnho). 
                        Substitute hn with the specific height and round down, then you should get your answer.

                        For example: If the ball is dropped from 100,000 ft and you want to see how many times it bounces higher than 1 ft,
                        we find n=log 2/3(1100,000)≈28.4. Rounding down, we find the ball bounces 28 times before it goes below 1 ft.
 #>

 function bouncing-ball
{
    [OutputType([int])]
    Param ([double]$h, [double]$bounce, [double]$window)
    # your code

    if ($null -eq $h -or (-not ($h -gt 0))) {
        return -1;
    }

    if ($null -eq $bounce -or (-not ($bounce -gt 0 -and $bounce -lt 1))) {
        return -1;
    }

    if ($window -ge $h) {
        return -1;
    }

    # Now calculate how many bounces.
    # log $bounce * $h / $window
    # return [System.Math]::Floor([System.Math]::Log($window / $h) / [System.Math]::Log($bounce)) + 1;
    # $result = [System.Math]::Floor(([System.Math]::Log($bounce) * ($window / $h)) + 1);
    
    
    Write-Host $h $bounce $window;

    $count = 1;
    $current = $h * $bounce;
    while ($current -gt $window) {
      $count += 2;
      $current *= $bounce;
    }

    return $count;
}


bouncing-ball 3 0.66 1.5


<#
        Link to Problem: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/powershell

        Summation
        Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

        For example:

        summation(2) -> 3
        1 + 2

        summation(8) -> 36
        1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
#>

function Summation([int] $n) {
    return 1..$n | ForEach-Object { $total = 0; } { $total += $_ } { $total } 
}

Summation 10


<#
    Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

    When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

    More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

    The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

    If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

    Examples:
    (form of the result depends on the language)

    race(720, 850, 70) => [0, 32, 18] or "0 32 18"
    race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
    ** Note:

    See other examples in "Your test cases".

    In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

    ** Hints for people who don't know how to convert to hours, minutes, seconds:

    Tortoises don't care about fractions of seconds

    Think of calculation by hand using only integers (in your code use or simulate integer division)

    or Google: "convert decimal time to hours minutes seconds"

#>

function race($v1, $v2, $g) 
{
    if ($v2 -ge $v1) {
        return @(-1, -1, -1);
    } 
    else {
        $seconds = $g * 3600 / $v2 - $v1;
        return "$($seconds / 3600) $(($seconds % 3600) / 60) $($seconds % 60)";
    }
}

<#
    Link to problem: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/powershell

    Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

    Your task is to make 'Past' function which returns time converted to milliseconds.

    Example:
    Past(0, 1, 1) == 61000
    Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59


    1 hr = 3,600,000

    1 m = 60,000

    1 s = 1,000
#>
function Past([int] $h, [int] $m, [int] $s) {
    return $h * 3600000 + $m * 60000 + $s * 1000;
}

<#

    A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

    The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

    "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

    To ease his travel he wants to group the list by zipcode.

    Task
    The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

    zipcode:street and town,street and town,.../house number,house number,...

    The street numbers must be in the same order as the streets where they belong.

    If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

    Examples
    r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

    travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

    travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

    travel(r, "NY 5643") --> "NY 5643:/"
    Note for Elixir:
    In Elixir the empty addresses' input is an empty list, not an empty string.

    Note:
    You can see a few addresses and zipcodes in the test cases.

#>

function travel($r, $zipcode)
{
    $state = $zipcode.split(" ")[0];
    $zip = $zipcode.split(" ")[1];
    $addresses = $r.split(",");

    $filteredAddresses = $addresses `
    | Where-Object { $_ -match $zipcode } `
    | ForEach-Object { (($_.Replace($zipcode, "")).Trim()) + ","; };

    $addressNums = ($filteredAddresses `
                    | ForEach-Object -Begin { $str = "/"; } `
                                     -Process { $str += $_.Split(" ")[0] + ","; } `
                                     -End { $str; }).TrimEnd(",");

    $addressesOnly = ($filteredAddresses `
                      | ForEach-Object -Begin {$str = "" } `
                      -Process { $str += $_.TrimStart("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "); } `
                      -End { $str }).TrimEnd(",");

    return "$($zipcode):$($addressesOnly)$($addressNums)";
}

# Practice set to play with.
$add_0 = @'
  123 Main Street St. Louisville OH 43071, 432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,
  54 Holy Grail Street Niagara Town ZP 32908, 3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,
  10 Pussy Cat Rd. Chicago EX 34342, 10 Gordon St. Atlanta RE 13000, 58 Gordon Road Atlanta RE 13000,
  22 Tokyo Av. Tedmondville SW 43098, 674 Paris bd. Abbeville AA 45521, 10 Surta Alley Goodtown GG 30654,
  45 Holy Grail Al. Niagara Town ZP 32908, 320 Main Al. Bern AE 56210, 14 Gordon Park Atlanta RE 13000,
  100 Pussy Cat Rd. Chicago EX 34342, 2 Gordon St. Atlanta RE 13000, 5 Gordon Road Atlanta RE 13000,
  2200 Tokyo Av. Tedmondville SW 43098, 67 Paris St. Abbeville AA 45521, 11 Surta Avenue Goodtown GG 30654,
  45 Holy Grail Al. Niagara Town ZP 32918, 320 Main Al. Bern AE 56215, 14 Gordon Park Atlanta RE 13200,
  100 Pussy Cat Rd. Chicago EX 34345, 2 Gordon St. Atlanta RE 13222, 5 Gordon Road Atlanta RE 13001,
  2200 Tokyo Av. Tedmondville SW 43198, 67 Paris St. Abbeville AA 45522, 11 Surta Avenue Goodville GG 30655,
  2222 Tokyo Av. Tedmondville SW 43198, 670 Paris St. Abbeville AA 45522, 114 Surta Avenue Goodville GG 30655,
  2 Holy Grail Street Niagara Town ZP 32908, 3 Main Rd. Bern AE 56210, 77 Gordon St. Atlanta RE 13000,
  100 Pussy Cat Rd. Chicago OH 13201
'@;

travel $add_0 "AA 45522";


<#
    Link to cw problem: Directions Reduction -> https://www.codewars.com/kata/550f22f4d758534c1100025a/train/powershell

    DESCRIPTION: 

    Once upon a time, on a way through the old wild mountainous west,…
    … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

    Going to one direction and coming back the opposite direction right away is a needless effort. 
    Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

    How I crossed a mountain desert the smart way.
    The directions given to the man are, for example, the following (depending on the language):

    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
    or

    { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
    or

    [North, South, South, East, West, North, West]
    You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, 
    better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

    ["WEST"]
    or

    { "WEST" }
    or

    [West]
    Other examples:
    In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

    The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

    In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

    Task
    Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
#>

<#
    My approach for solving this problem?

    - check if arr is null or empty

    Next 

    -   I'm going to create a sort of bubble sort type structure of a 
        for loop inside a while loop and waiting to see 
        if a break a match it will repeat again if no match it will break out and return the value
#>

function DirReduc([array]$arr)
{
    if ($arr -eq $null -or $arr.Length -eq 0) { return @(); }

    $_arr = New-Object System.Collections.ArrayList(, $arr);

    $dirMap = @{
        WEST = "EAST";
        EAST = "WEST";
        NORTH = "SOUTH";
        SOUTH = "NORTH"
    };

    $hasMatch = $true;

    while ($hasMatch) {
        $hasMatch = $false;

        for ($i = 0; $i -lt $_arr.Count - 1; $i++) {
            $currentDir = $_arr[$i];
            $nextDir = $_arr[$i + 1];

            if ($dirMap[$currentDir] -eq $nextDir) {
                # set has match to true and need to remove both values from array
                $hasMatch = $true;
                $arr = $_arr.RemoveRange($i, 2);
            }
        }

    }

    return $_arr;
}

DirReduc @("NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST");


<#

    Prize Draw

    Link to problem: https://www.codewars.com/kata/5616868c81a0f281e500005c/train/powershell

    DESCRIPTION: 

    To participate in a prize draw each one gives his/her firstname.

    Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

    The length of the firstname is added to the sum of these ranks hence a number som.

    An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

    Example:

    names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
    weights: [1, 4, 4, 5, 2, 1]

    PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
    The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
    Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

    Task:
    parameters: st a string of firstnames, we an array of weights, n a rank

    return: the firstname of the participant whose rank is n (ranks are numbered from 1)

    Example:
    names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
    weights: [1, 4, 4, 5, 2, 1]
    n: 4

    The function should return: "PauL"
    Notes:
    The weight array is at least as long as the number of names, it can be longer.

    If st is empty return "No participants".

    If n is greater than the number of participants then return "Not enough participants".

    See Examples Test Cases for more examples.
#>

function nameCal([string] $name, [int] $weight) {

    $amount = ($name.ToCharArray() `
    | ForEach-Object `
        -Begin { $sum = 0; } `
        -Process { $sum += (([int][char]$_) - 96); } `
        -End { $sum });

    $finalAmount = ($name.Length + $amount) * $weight;

    return $finalAmount;
}
function rank($st, $we, $n)
{
    if($null -eq $st -or $st.Length -eq 0) { return "No participants"; }

    $listOfStudents = $st.split(",") | ForEach-Object { $_.ToLower().Trim(); };

    if ($listOfStudents.Length -ne $we.Length -or $listOfStudents.Length -lt $n) { return "Not enough participants"; }

    [System.Collections.ArrayList] $studentInfo = @();

    for ($i = 0; $i -lt $listOfStudents.Length; $i++) {
        $name = $listOfStudents[$i];
        $weight = nameCal $name $we[$i];
        $newObjectToAdd = [PSCustomObject]@{
            Name = $name;
            Weight = $weight;
        };

        $studentInfo += $newObjectToAdd;
    }

    $studentInfo = $studentInfo | Sort-Object -Property @{ Expression = "Weight"; Descending = $true; }, @{ Expression = "Name"; Descending = $false; };
    
    return $studentInfo[$n - 1].Name;
}

$result = rank "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin" @(4, 2, 1, 4, 3, 1, 2) 4;

Write-Host $result;

# $res2 = rank "Olivia,David,Logan,Elizabeth,Aiden,Olive,Matthew,Willy,Addison,Michael,Ethan"  @(2, 2, 4, 4, 4, 5, 1, 1, 2, 1, 2)  6

$res3 = rank "Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden"  @(1, 3, 5, 5, 3, 6)  2;

Write-Host $res3;



<#
    6kyu Highest Scoring Word

    Link to problem: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/powershell/me/best_practice

    Description: 

            Given a string of words, you need to find the highest scoring word.

            Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

            You need to return the highest scoring word as a string.

            If two words score the same, return the word that appears earliest in the original string.

            All letters will be lowercase and all inputs will be valid.
#>

function Get-HighestScoringWord([string]$s)
{
  function calcWord([string] $word) {
      return ($word.ToLower().Trim().ToCharArray() `
      | ForEach-Object -Begin { $sum = 0; } -Process { $sum += (([int][char]$_) - 96); } -End { $sum; } );
  }

  $getWordAndValue = $s.split(" ") | Select-Object @{ n="name"; e={$_}}, @{ n="val"; e={calcWord($_)}};
 
  # Kedanes type of algorithm n speed
  $max = $getWordAndValue[0];

  foreach ($item in ($getWordAndValue | Select-Object -Skip 1)) {
      if ($item.val -gt $max.val) {
          $max = $item;
      }
  }

  return $max.name;
}

Get-HighestScoringWord "man i need a taxi up to ubud";

<#
    7kyu Maximum Length Difference

    Link to problem: https://www.codewars.com/kata/5663f5305102699bad000056/train/powershell

    Description: 

        You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

        Find max(abs(length(x) − length(y)))

        If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

        Example:
        a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
        a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        mxdiflg(a1, a2) --> 13
#>

function mx-dif-lg($a1, $a2)
{
    # swamp for biggest array
    if ($a2.Length -gt $a1.Length) {
        $temp = $a1;

        $a1 = $a2;
        $a2 = $temp;
    }

    $biggestDiff = 0;

    foreach($i in $a1) {
        foreach ($ii in $a2) {
            $newVal = [Math]::Abs($i.Length - $ii.Length);

            if ($newVal -gt $biggestDiff) {
                $biggestDiff = $newVal;
            }
        }
    }

    return $biggestDiff;
}

$s1 = "hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"
$s2 = "cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"
mx-dif-lg $s1 $s2;

<#
    Backwards Read Primes

    Link to problem: https://www.codewars.com/kata/5539fecef69c483c5a000015/train/powershell

    Description: 

        Backwards Read Primes are primes that when read backwards in base 10 (from right to left) 
        are a different prime. (This rules out primes which are palindromes.)

        Examples:
        13 17 31 37 71 73 are Backwards Read Primes
        13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

        Task
        Find all Backwards Read Primes between two positive given numbers (both inclusive), 
        the second one always being greater than or equal to the first one. 
        The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

        Example
        backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
        backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

        Note for Forth
        Return only the first backwards-read prime between start and end or 0 if you don't find any

        Don't use Ruby Prime class, it's disabled.
        backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
        backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]



        $primes = @{ 2 = 2; 3 = 3; 5 = 5; 7 = 7; 11 = 11; 13 = 13 };

function backwards-prime($start, $stop) 
{

    function revNum ([int] $n) {
        $numStr = $n.ToString();
        return ($numStr[-1..-($numStr.Length)] -join "") -as [int];
    }

    function isPrime ($num, $numRange) {
        # Test if opposite is prime.
        # Write-Host $num;

        # for ($i = 0; $i -lt $numRange.Length; $i++) {
        #     # if ($num -eq $numRange[$i]) { return $true; }
        #     if ($numRange -contains $num) { return $true; }
        #     if ($num % $numRange[$i] -eq 0) { return $false; }
        # }

        # return $true;

        if ($primes.containsKey($num)) {
            return $true;
        }

        if ($num -lt 3) {
            return $num -gt 1;
        }

        if ($num % 2 -eq 0 -or $num % 3 -eq 0) {
            return $false;
        }

        $i = 5;

        while ($i * $i -le $num) {
            if ($num % $i -eq 0 -or $num % ($i + 2) -eq 0) {
                return $false; 
            }

            $i += 6;
        }

        $primes[$num.ToString()] = $num;

        return $true;
    }

    # Determining primes is slow need to implement all prime sieve which is faster than this.
    function IsPrimeSieve($start, $stop, $numRange) {

        for ($i = 0; $i -lt $numRange.Length; $i++) {

            $curNum = $numRange[$i];

            if ($curNum -ne $false) {
                # Need to calc the rest of the set and make all multiples of it
                for ($ii = $i + 1; $ii -lt $numRange.Length; $ii++) {
                    $n = $numRange[$ii];
                    if ($n % $curNum -eq 0) { $numRange[$ii] = $false; }
                }
            }
        }

        $numRange = $numRange | Where-Object { $_ -ne $false };

        # Write-Host $numRange;

        $newP = $numRange | Where-Object { $_ -ge $start -and $_.ToString().Length -gt 1 -and (isPrime (revNum $_) $numRange) -and $_ -ne (revNum $_) };

        # Write-Host $newP;

        return ($newP -join ", ").Trim();
    }

    # Only odds should be tested and if not already in the hashmap...  and start create map at 13...
    if ($start -le 1) { $start = 2; } # Just in case $start is less than or equal to 1
    
    $range = 2..$stop;
    
    # Write-Host $range;

    $res = IsPrimeSieve $start $stop $range

    return $res;
}


    # Determining primes is slow need to implement all prime sieve which is faster than this.
    function IsPrimeSieve($start, $stop, $numRange) {

        for ($i = 0; $i -lt $numRange.Length; $i++) {

            $curNum = $numRange[$i];

            if ($curNum -ne $false) {
                # Need to calc the rest of the set and make all multiples of it
                for ($ii = $i + 1; $ii -lt $numRange.Length; $ii++) {
                    $n = $numRange[$ii];
                    if ($n % $curNum -eq 0) { $numRange[$ii] = $false; }
                }
            }
        }

        $numRange = $numRange | Where-Object { $_ -ne $false -and $_ -ge $start -and $_ -ge 13 };

        Write-Host $numRange;

        # $newP = $numRange | Where-Object { $_ -ge $start -and $_.ToString().Length -gt 1 -and (isPrime (revNum $_) $numRange) -and $_ -ne (revNum $_) };

        $newP = @();

        for ($i = 0; $i -lt $numRange.Length; $i++) {
            $curNum = $numRange[$i];
            if ($palindromePrimes.containsKey($curNum)) {
                $newP += $curNum;
            } else {
                $rN = revNum $_;

                if ($num -ne $rN) {
                    if ($primes.containsKey($rN)) {
                        $newP += $num;
                        $newP += $rN;
                        $primes[$rN.ToString()] = $rN;
                        $palindromePrimes[$rN.ToString()] = $rN;
                    } elseif (isPrime $rN) {
                        $newP += $num;
                        $newP += $rN;
                        $primes[$rN.ToString()] = $rN;
                        $palindromePrimes[$rN.ToString()] = $rN;
                    }
                }
            }
        }

        Write-Host $newP;

        return ($newP -join ", ").Trim();
    }


#>

$primes = @{ 
    2 = 2; 3 = 3; 5 = 5; 7 = 7; 11 = 11; 
    13 = 13; 17 = 17; 31 = 31; 37 = 37; 
    71 = 71; 73 = 73; 79 = 79; 97 = 97; 
    107 = 107; 113 = 113; 149 = 149; 
    157 = 157; 167 = 167; 179 = 179; 199 = 199 
};

function backwards-prime($start, $stop) 
{
  function revNum ([int] $n) {
      $numStr = $n.ToString();
      return ($numStr[-1..-($numStr.Length)] -join "") -as [int];
  }

  function isPrime ($num) {

      if ($primes.containsKey($num)) {
          return $true;
      }

      if ($num -lt 3) {
          return $num -gt 1;
      }

      if ($num % 2 -eq 0 -or $num % 3 -eq 0) {
          return $false;
      }

      $i = 5;

      while ($i * $i -le $num) {
          if ($num % $i -eq 0 -or $num % ($i + 2) -eq 0) {
              return $false; 
          }

          $i += 6;
      }

      $primes[$num] = $num;

      return $true;
  }

  $res = @();
  
  if($start % 2 -eq 0) { $start = $start + 1; }
  if($stop % 2 -eq 0) { $stop = $stop - 1; } 

  for ($i = $start; $i -le $stop; $i += 2) {
  
      if ($i -lt 13) { continue; }
  
      $nPrime = isPrime $i;
      
      if ($nPrime -eq $false) { continue; }
      
      $nReversed = revNum $i;
      
      if ($nReversed -eq $i) { continue; }
      
      $nPrimeReverse = isPrime $nReversed;
      
      if ($nPrimeReverse -eq $false) { continue; }

      $res += $i;
  }

  return ($res -join ", ").Trim();
}

$a = "13, 17, 31, 37, 71, 73, 79, 97"
$res = backwards-prime 1 100
Write-Host ($res -eq $a);

<#
    5kyu Not very secure

    Link: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/powershell

    Description: 

            In this example you have to validate if a user input string is alphanumeric. 
            The given string is not nil/null/NULL/None, so you don't have to check that.

            The string has the following conditions to be alphanumeric:

            At least one character ("" is not valid)
            Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
            No whitespaces / underscore


#>

function Test-PasswordSecurity([System.String]$Pass)
{
    if ($Pass.Length -lt 1) { return $false; }

    if ($Pass -match " ") { return $false; }

    if ($Pass -match "_") { return $false; }
    
    if ($Pass -match "[\{\}\[\]!@#%^&*\(\)_+=<:;,`\\|/><\.~&\$]") { return $false; }
    
    return $true;
}

<#
    6kyu Sum of Parts

    Link: https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/powershell

    Description: 

                Let us consider this example (array written in general format):

                ls = [0, 1, 3, 6, 10]

                Its following parts:

                ls = [0, 1, 3, 6, 10]
                ls = [1, 3, 6, 10]
                ls = [3, 6, 10]
                ls = [6, 10]
                ls = [10]
                ls = []
                The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

                The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

                Other Examples:
                ls = [1, 2, 3, 4, 5, 6] 
                parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

                ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
                parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
                Notes
                Some lists can be long.
                Please ask before translating: some translations are already written and published when/if the kata is approved.
#>

function parts-sums($ls) {
    if ($ls.Length -eq 0) { return @(0); }

    $idxLItem = $ls[$ls.Length - 1];
    [System.Collections.ArrayList] $res = @($idxLItem, 0);

    for ($i = $ls.Length - 2; $i -ge 0; $i--) {
        $idxLItem += $ls[$i];
        $ls[$i] = $idxLItem;
    }

    $ls += 0;

    return $ls;
}

$r = parts-sums @(1, 2, 3, 4, 5, 6);

Write-Host $r;