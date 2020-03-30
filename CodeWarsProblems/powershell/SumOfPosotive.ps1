
$test = @(1, -2, 3, 4, 5)

function Get-SumOfPositive($NumberArray) {
    return $NumberArray `
    | Where-Object { $_ -gt 0 } `
    | ForEach-Object -Begin { $total = 0 } -Process { $total += $_ } -End { $total }
}

Get-SumOfPositive $test

function ExpressionMatter([int] $a, [int] $b, [int] $c) {
    return (
            @(($a + $b + $c), 
              ($a * ($b + $c)), 
              ($a * $b * $c), 
              ($a + $b * $c), 
              (($a + $b) * $c)) `
              | Measure-Object -Maximum
            ).Maximum
}

# d === divisor, b === bound
function MaxMultiple([int] $d, [int] $b) {
    $originalDivisor = $d 
    while ($d -lt $b) {
      if ($d + $originalDivisor -gt $b) { return $d }
      $d = $d + $originalDivisor
    }

    return $d
}

<#
      Your task is to add up letters to one letter.

      The function will be given a char[], each one being a letter to add, and the function will return a char.

      Notes:
      Letters will always be lowercase.
      Letters can overflow (see second to last example of the description)
      If no letters are given, the function should return 'z'
      Examples:
      AddLetters(@('a', 'b', 'c')) = 'f'
      AddLetters(@('a', 'b')) = 'c'
      AddLetters(@('z')) = 'z'
      AddLetters(@('z', 'a')) = 'a'
      AddLetters(@('y', 'c', 'b')) = 'd' # notice the letters overflowing
      AddLetters(@()) = 'z'
#>

# Make a obj that has mapped the letters to numbers 

$a = @(97..(97 + 25)) | ForEach-Object -Begin { $alphabet = @{} } `
-Process { $alphabet.Add(([char]$_) + "",  $_ - 96 + "") } -End { $alphabet }

$n = @(97..(97 + 25)) | ForEach-Object -Begin { $alphabet = @{} } `
-Process { $alphabet.Add($_ - 96 + "", ([char]$_) + "") } -End { $alphabet }

function AddLetters([char[]] $letters) {
  if ($letters.Count -eq 0) { return "z" }
  $total = 0
  for ($i = 0; $i -lt $letters.Count; $i++) {
    if ($total -gt 26) { $total = $total - 26 }
    $v = $letters[$i].ToString()
    $val = [convert]::ToInt32($a[$v])
    $total += $val 
  }

  return $n[$total]
}

$r = AddLetters @('y', 'c', 'b')

# Actually the correct solution for this problem 
function AddLetters([char[]] $letters) {
  if ($letters.count -eq 0) { 'z' }
  else
  {
    $sum = 0
    for ($i = 0; $i -lt $letters.count; $i++)
    {
      $sum = $sum + ([int][Char]$letters[$i] - 96)
    }
    while ($sum -gt 26) { $sum = $sum - 26 }
    [char]($sum + 96)
  }
}