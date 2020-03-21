let arr = Array.from({
    length: 100000
}).map((_, i) => i).sort()

function swap(A, a, b) {
    const p = A[b];
    A[b] = A[a]
    A[a] = p;
}

function bubble_sort(A) {
    let d = new Date().getTime()
    for (let i = A.length - 1; i >= 0; i--) {
        for (let j = 1; j < i; j++) {
            A[j - 1] > A[j] && swap(A, j - 1, j)
        }
    }
    let d2 = new Date().getTime() - d;
    console.log('time', d2)
    return A;
}
console.log(bubble_sort(arr))