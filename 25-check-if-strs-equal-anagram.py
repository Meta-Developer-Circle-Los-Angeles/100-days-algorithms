# Suject:
# Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. 

# Example: “abcd” and “dabc” are an anagram of each other.

def isAnagram(str1,str2):
    if len(str1) != len(str2):
        return False
    str1Sort = sorted(str1)
    str2Sort = sorted(str2)
    if str1Sort == str2Sort:
        print('{} and {} are an anagram of each other!'.format(str1,str2))
    elif str1Sort != str2Sort:
        print('{} and {} are NOT an anagram of each other!'.format(str1,str2))
    



isAnagram("abcd", "dabc")
isAnagram("abcd", "ddbc")