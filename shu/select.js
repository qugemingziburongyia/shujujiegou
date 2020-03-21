
function select(node,path) {
    if(path.length == 0) {reutrn [node]}
    const p = path.shift()
    let nodes = []
    if(p.className) {
        nodes = findByClassName(node,p.className)
    } else {
        nodes = findByTagName(node,p.tagName)
    }
    return [].concat(...nodes.map(n => select(n,[...path])))
}


// 标准化的选择器函数
function select(node,path) {
    if(path.length === 0) { return [node]} 
    const p = path.shift()
    if(p.child) {
        return select(node.children[p.child],[...path])
    } else if(p.op) {
        return [...tree_transerve(node)].filter(_n => p.op(_n.node)).map(n => n.node)
    }
}







