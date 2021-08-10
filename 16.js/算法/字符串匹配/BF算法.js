/**
 * 
 * BF（Brute Force），暴力检索法是最好想到的算法，也最好实现。首先将原字符串和子串左端对齐，逐一比较；如果第一个字符不能匹配，则子串向后移动一位继续比较；如果第一个字符匹配，则继续比较后续字符，直至全部匹配。 时间复杂度：O(nm)。其中 n 为原字符串长度，m 为子串长度。

作者：Checkson
链接：https://juejin.cn/post/6844903896687575053
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function BF(src, dest) {
    let len1 = src.length
    let len2 = dest.length
    let i=0,j=0
    while(i<len1 && j< len2) {
        if(src[i] === dest[j]) {
            i++
            j++
        }else{
            i= i-j+1
            j=0
        }
    }

    if(j === len2) {
        return i-j
    }

    return -1
}

const src= 'https://www.baidu.com'


console.log(BF(src, 'baidu'))
console.log(BF(src, 'baidx'))
console.log(BF(src, 'com'))
console.log(BF(src, 'htt'))