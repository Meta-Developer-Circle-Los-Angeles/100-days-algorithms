def merge(left,right): 
    result = []
    while len(left) or len(right):
        if len(left) and len(right):
            if left[0] < right[0]:
                result.append(left[0])
            elif left[0] > right[0]:
                result.append(right[0])
        elif len(left):
            result.append(left[0])
        else:
            result.append(left[0])
        return result

def mergeSort(arr):
    arrLen = len(arr)
    size = 1
    if arrLen <= size:
        print(arr)
        
        mid = len(arr) / 2
        left = arr[0:mid]
        right = arr[mid: len(arr)]
        leftM = mergeSort(left)
        rightM = mergeSort(right)
        return merge(leftM, rightM)

mergeSort([ 7, 3, 9, 10, 4, 0, 2, 1 ]) # ?????? not working...