var convertBST = function(root) {
    let greaterValue = 0;

    function dfs(node) {
        if (!node)
            return;

        dfs(node.right);
        greaterValue += node.val;
        node.val = greaterValue;
        dfs(node.left);
    }

    dfs(root);

    return root;
};

module.exports = convertBST;