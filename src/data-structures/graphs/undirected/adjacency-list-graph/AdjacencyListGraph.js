class AdjacencyListGraph {
    constructor() {
        this._adjacent = {};
    }

    addVertice(vertice) {
        this._adjacent[vertice.key] = new Set();
    }

    getNumerOfVertices() {
        return Object.keys(this._adjacent).length;
    }

    addEdge(vertice1, vertice2) {
        this._validateVertice(vertice1);
        this._validateVertice(vertice2);

        this._adjacent[vertice1].add(vertice2);
        this._adjacent[vertice2].add(vertice1);
    }

    getAdjacent(vertice) {
        this._validateVertice(vertice);
        return [...this._adjacent[vertice]];
    }

    degree(vertice) {
        this._validateVertice(vertice);

        return [...this._adjacent[vertice]].length;
    }

    _validateVertice(vertice) {
        if (!this._verticeExist(vertice) || typeof vertice == "undefined") {
            throw `invalid vertice ${vertice}`;
        }
    }

    _verticeExist(vertice) {
        return typeof this._adjacent[vertice] !== "undefined";
    }
}

module.exports = AdjacencyListGraph;