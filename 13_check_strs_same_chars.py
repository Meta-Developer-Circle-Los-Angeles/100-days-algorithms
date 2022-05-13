
# Subject:Given two strings s1 and s2, check whether s2 is a rotation of s1. 

# Example:
# Input : ABACD, CDABA
# Output : True

# Input : GEEKS, EKSGE
# Output : True

# Reference =>  https://www.linisnil.com/articles/ctci-check-string-rotation/

def isPyRotation(str1, str2):
    if len(str1) != len(str2):
        return False
    for i in range(0, len(str1) - 1):
        if str1[i+1:] in str2 and str1[0:i+1] in str2:
            return True
    return False
    
isPyRotation("ABACD", "CDABA");
isPyRotation("GEEKS", "EKSGE");
isPyRotation("GEEKS", "EKSPE");
isPyRotation("GEPKS", "EKSGE");
