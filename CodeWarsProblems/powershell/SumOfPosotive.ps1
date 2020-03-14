
$test = @(1, -2, 3, 4, 5)

function Get-SumOfPositive($NumberArray) {
    return $NumberArray `
    | Where-Object { $_ -gt 0 } `
    | ForEach-Object -Begin { $total = 0 } -Process { $total += $_ } -End { $total }
}


Get-SumOfPositive $test