function bucket_sort(A,K,S) {
    const buckets = Array.from({length:K},() => [])
    for(let i = 0;i < A.length;i++) {
        const index = ~~(A[i]/S)
        buckets[index].push(A[i])
    }
    // 排序每只桶
    for(let i = 0; i < buckets.length;i++) {
        insertion_sort(buckets[i])
    }
    // 取出数据
    return [].concat(...buckets)
} 

function insertion_sort(A) {
    for(let i = 0;i < A.length;i++) {
        let p = i-1;
        const x = A[p+1]
        while(p >= 0 && A[p] > x) {
            A[p+1] = A[p]
            p--
        }
        A[p+1] = x
    }
}


