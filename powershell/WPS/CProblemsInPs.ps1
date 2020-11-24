
# Print characters if they're a vowel in a string
# Function takes String and is void
function printVowelInString {
    param (
        [String] $str
    )

    # Split str into to Char array
    [String[]] $charArray = $str.ToCharArray();


    for ($i = 0; $i -le $charArray.Length; $i++) {

        $currentChar = $charArray[$i];

        switch -Regex ($currentChar) {
            'a|i|o|u|y' { 
                Write-Host "The character $currentChar is a vowel."; Break;
             }
            Default {
                # not a vowel so we don't print
            }
        }
    }
    
}


printVowelInString "alphabety";