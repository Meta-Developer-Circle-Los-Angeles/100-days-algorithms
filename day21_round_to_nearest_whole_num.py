# Subject: Given a positive integer n, round it to nearest whole number having 
# zero as last digit.

# Example:
# Input : 4722
# Output : 4720

# Input : 38
# Output : 40

# Input : 10
# Output: 10

# reference => https://www.geeksforgeeks.org/round-the-given-number-to-nearest-multiple-of-10/

def roundToNearestWholeNum(num):
    roundDown = (num // 10) * 10
    roundUp = roundDown + 10
    if(num - roundDown > roundUp - num):
        print('{} has been rounded up to the nearest whole number {}'.format(num,roundUp))
    else:
        print('{} has been rounded down to the nearest whole number {}'.format(num,roundDown))



roundToNearestWholeNum(4722)
roundToNearestWholeNum(39)
roundToNearestWholeNum(10)