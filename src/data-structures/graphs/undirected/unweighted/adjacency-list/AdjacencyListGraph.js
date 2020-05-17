class AdjacencyListGraph {
    constructor() {
        this._adjacencyList = {};
        this._vertices = {};
    }

    addVertex(vertex) {
        this._vertices[vertex.key] = vertex;
    }

    getNumerOfVertices() {
        return Object.keys(this._vertices).length;
    }

    addEdge(start, end) {
        this._validateVertexKey(start);
        this._validateVertexKey(end);

        if (!this._adjacencyList[start]) {
            this._adjacencyList[start] = [];
        }

        if (!this._adjacencyList[end]) {
            this._adjacencyList[end] = [];
        }

        this._adjacencyList[start].push(end);
        this._adjacencyList[end].push(start);
    }

    getVertex(vertexKey) {
        this._validateVertexKey(vertexKey);
        return this._vertices[vertexKey];
    }

    getAdjacent(vertexKey) {
        this._validateVertexKey(vertexKey);
        return [...new Set(
            this._adjacencyList[vertexKey]
        )];
    }

    adjacentCount(vertexKey) {
        this._validateVertexKey(vertexKey);
        return this.getAdjacent(vertexKey).length;
    }

    getEdges(vertexKey) {
        this._validateVertexKey(vertexKey);
        return this._adjacencyList[vertexKey];
    }

    removeAllEdgesInBetween(vertexKey1, vertexKey2) {
        this._validateVertexKey(vertexKey1);
        this._validateVertexKey(vertexKey2);

        this._removeAdjacentKeys(vertexKey1, vertexKey2);
        this._removeAdjacentKeys(vertexKey2, vertexKey1);
    }

    _removeAdjacentKeys(vertexKey1, vertexKey2) {
        let adjToRemove = [];
        this._adjacencyList[vertexKey1].filter((adjVertex, i) => {
            if (adjVertex === vertexKey2) {
                adjToRemove.push(i);
            }
        });

        while (adjToRemove.length > 0) {
            this._adjacencyList[vertexKey1].splice(adjToRemove.pop(), 1);
        }
    }

    _validateVertexKey(vertexKey) {
        if (typeof vertexKey === "undefined" || !this._vertexExists(vertexKey)) {
            throw `invalid vertex ${vertexKey}`;
        }
    }

    _vertexExists(vertexKey) {
        return typeof this._vertices[vertexKey] !== "undefined";
    }

    _edgeMatchesKeysEitherWay(edge, vertexKey1, vertexKey2) {
        return edge.start === vertexKey1 && edge.end === vertexKey2
            || edge.end === vertexKey1 && edge.start === vertexKey2;
    }
}

module.exports = AdjacencyListGraph;