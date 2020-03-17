

function swap(A,i,j) {
    [A[i],A[j]] =[A[j],A[i]]
}

function partition(A,lo,hi) {
    const pivot = A[hi-1]
    let i = lo,j=hi-1
    while(i !== j) {
        if(A[i] <= pivot) {
            i++
        } else {
            swap(A,i,--j)
        }
    }
    swap(A,j,hi-1)
    return j
}

const A = [10,50,30,80,40,90,80,70]
const p1 = partition(A,0,8)
console.log(p1,A);

