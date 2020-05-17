class AdjacencyMatrixGraph {
    constructor(numberOfVertices) {
        this._graph = [...Array(numberOfVertices)].map(e => Array(numberOfVertices));
    }

    getNumerOfVertices() {
        return this._graph.length;
    }

    addEdge(vertice1, vertice2) {
        this._validateVertice(vertice1);
        this._validateVertice(vertice2);

        this._graph[vertice1][vertice2] = true;
        this._graph[vertice2][vertice1] = true;
    }

    getAdjacent(vertice) {
        this._validateVertice(vertice);

        let edges = [];
        this._graph[vertice].forEach((edgeExists, index) => {
            if (edgeExists) {
                edges.push(index);
            }
        });

        return edges;
    }

    degree(vertice) {
        this._validateVertice(vertice);
        return this.getAdjacent(vertice).length;
    }

    _validateVertice(vertice) {
        if (!this._isVerticeInBounds(vertice) && typeof vertice !== "number") {
            throw `invalid vertice ${vertice}`;
        }
    }

    _isVerticeInBounds(vertice) {
        return vertice >= 0 && vertice < this._graph.length;
    }
}

module.exports = AdjacencyMatrixGraph;