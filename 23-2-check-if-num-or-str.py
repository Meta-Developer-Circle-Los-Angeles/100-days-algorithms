# Subject: Write a function to check whether a given input is an integer or a 
# string.
# Integer: Every element should be a valid digit, i.e '0-9'.
# String: Any one element should be an invalid digit, i.e any symbol other

# Example:
# Input : 127
# Output : Integer
# Explanation : All digits are in the range '0-9'.

# Input : 199.7
# Output : String
# Explanation : A dot is present. 

# Input : 122B
# Output : String
# Explanation : A alphabet is present.


def checkIfNumOrStr(input):
    if input.isdigit():
       print('{} contains all numbers\n'.format(input)) 
    else:
       print('{} does not contain characters that are not equal to numbers\n'.format(input))
     
checkIfNumOrStr("127")
checkIfNumOrStr("199.7")
checkIfNumOrStr("122b")
