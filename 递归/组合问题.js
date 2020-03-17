function combination(S,k) {
    if(k === 0 || S.length === k) {
        return [S.slice(0,k)]
    }
    const [first,...others] = S
    let r = []
    r = r.concat(combination(others,k-1).map(c => [first,...c]))
    r = r.concat(combination(others,k))
    return r;
}

const S = ['a','b','c','d']
console.log(combination(S,3));
