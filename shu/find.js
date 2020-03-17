function find_by_path(tree,path) {
    return path.length === 0 ? tree:find_by_path(tree.children[path[0]],path.slice(1))
}

// 构造一个先序遍历,除了返回节点外,还返回路径
function* tree_transverse(tree,path=[]) {
    yield {tree,path}
    if(tree.children) {
        for(let i = 0; i < tree.children.length; i++) {
            yield * tree_transerve(tree.children[i],[...path,i])
        }
    }
}