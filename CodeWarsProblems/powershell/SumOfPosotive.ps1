
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
