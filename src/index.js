// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length < 1) return []
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse()
    }
    return matrix.join(",").split(",").map(v => Number(v))
}