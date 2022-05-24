// Subject;
// Given a mathematical equation using numbers/variables and +, -, *, /. 
// Print the equation in reverse.

// Example:
# Input : 20 - 3 + 5 * 2
# Output : 2 * 5 + 3 - 20

# Input : 25 + 3 - 2 * 11
# Output : 11 * 2 - 3 + 25

# Input : a + b * c - d / e
# Output : e / d - c * b + a

# REference => https://www.geeksforgeeks.org/reversing-an-equation/

def reverseEquation(eq):
    res = ""
    for i in range(len(eq)):
        if(eq[i] == "+" or eq[i] == "-" or eq[i] == "*" or eq[i] == "/"):
            res = eq[i] + res 
        else:
            res = eq[i] + res 
    return("The equation {} has been reversed to {}".format(eq, res))


eq1 = "20 - 3 + 5 * 2"
reverseEquation(eq1)

eq2 = "25 + 3 - 2 * 11"
reverseEquation(eq2)

eq3 = "a + b * c - d / e"
reverseEquation(eq3)
