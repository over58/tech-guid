/**
 * 
 *  最佳情况：T(n) = O(nlogn)
    最差情况：T(n) = O(n2)
    平均情况：T(n) = O(nlogn)

    https://juejin.cn/post/6844903444365443080#heading-5
 */
function quickSort (arr) {
    if(arr.length <=1) return arr

    var pivotIndex = Math.floor(arr.length / 2)
　　var pivot = arr.splice(pivotIndex, 1)[0]


    var left = []
    var right = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<pivot) {
            left.push(arr[i])
        }else {
          right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot], quickSort(right))
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 49]


console.log(
    quickSort(arr)
)