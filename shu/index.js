class Tree {
    constructor(v, children) {
        this.v = v;
        this.children = children || null;
    }
}

const tree = new Tree(10, [new Tree(5), new Tree(3, [new Tree(7), new Tree(11)]), new Tree(2)])

// 先序遍历
function tree_transerve_l(tree) {
    console.log(tree.v)
    tree.children && tree.children.forEach(tree_transerve_l)
}
// tree_transerve_l(tree)

// 后序遍历
function tree_transerve_b(tree) {
    tree.children && tree.children.forEach(tree_transerve_b)
    console.log(tree.v)
}
// tree_transerve_b(tree)

// 中序遍历
function tree_transerve_m(tree, ord = 0) {
    let transversed = false;
    if (!tree.children) {
        console.log(tree.v)
        return
    }
    tree.children.forEach((child, i) => {
        if (i === ord) {
            transversed = tree;
            console.log(tree.v)
        }
        tree_transerve_m(child, ord)
    });
    !transversed && console.log(tree.v)
}
tree_transerve_m(tree,0)

// 树的遍历(回调)
function tree_transerve(tree, ord = 0, callback) {
    let transversed = false;
    if (!tree.children) {
        callback(tree.v)
        return
    }
    tree.children.forEach((child, i) => {
        if (i === ord) {
            transversed = tree;
            callback(tree.v)
        }
        tree_transerve(child, ord, callback)
    });
    !transversed && callback(tree.v)
}


