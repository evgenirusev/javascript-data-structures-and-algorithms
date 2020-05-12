class AdjacencyListGraph {
    constructor(numberOfVertices) {
        this._vertices = [...Array(numberOfVertices)].map(x => new Set());
    }

    getNumerOfVertices() {
        return this._vertices.length;
    }

    addEdge(vertice1, vertice2) {
        this._validateVertice(vertice1);
        this._validateVertice(vertice2);

        this._vertices[vertice1].add(vertice2);
        this._vertices[vertice2].add(vertice1);
    }

    getEdges(vertice) {
        this._validateVertice(vertice);
        return [...this._vertices[vertice]];
    }

    degree(vertice) {
        this._validateVertice(vertice);

        return [...this._vertices[vertice]].length;
    }

    _validateVertice(vertice) {
        if (!this._isVerticeInBounds(vertice) && typeof vertice !== "number") {
            throw `invalid vertice ${vertice}`;
        }
    }

    _isVerticeInBounds(vertice) {
        return vertice >= 0 && vertice < this._vertices.length;
    }
}

module.exports = AdjacencyListGraph;