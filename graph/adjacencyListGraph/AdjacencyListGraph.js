class AdjacencyListGraph {
    constructor(numberOfVertices) {
        this._vertices = [...Array(numberOfVertices)].map(x => new Set());
    }

    getNumerOfVertices() {
        return this._vertices.length;
    }

    addEdge(vertice1, vertice2) {
        if (!this._isVerticeValid(vertice1) || !this._isVerticeValid(vertice2)) {
            throw `invalid vertices`;
        }

        this._vertices[vertice1].add(vertice2);
        this._vertices[vertice2].add(vertice1);
    }

    getEdges(vertice) {
        if (typeof this._vertices[vertice] === "undefined") {
            throw `invalid vertice - ${vertice}`;
        }

        return [...this._vertices[vertice]];
    }

    _isVerticeValid(vertice) {
        return this._isVerticeInBounds(vertice) && typeof vertice === "number";
    }

    _isVerticeInBounds(vertice) {
        return vertice >= 0 && vertice < this._vertices.length;
    }
}

module.exports = AdjacencyListGraph;