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

    addEdge(edge) {
        this._validateEdge(edge);

        if (!this._adjacencyList[edge.start]) {
            this._adjacencyList[edge.start] = [];
        }

        if (!this._adjacencyList[edge.end]) {
            this._adjacencyList[edge.end] = [];
        }

        this._adjacencyList[edge.start].push(edge);
        this._adjacencyList[edge.end].push(edge);
    }

    getVertex(vertexKey) {
        return this._vertices[vertexKey];
    }

    getAdjacent(vertexKey) {
        this._validateVertexKey(vertexKey);

        return this._getAdjKeys(vertexKey).reduce((adjVertices, key) => {
            if (adjVertices.indexOf(key) < 0) {
                adjVertices.push(this._vertices[key].key);
            }

            return adjVertices;
        }, []);
    }

    degree(vertexKey) {
        return new Set(
            this._getAdjKeys(vertexKey)
        ).size;
    }

    removeAllEdgesInBetween(start, end) {
        this._removeAllEdgesEitherWay(start, end);
        this._removeAllEdgesEitherWay(end, start);
    }

    _removeAllEdgesEitherWay(start, end) {
        const edges = this.getEdges(start);

        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (this._edgeMatchesKeysEitherWay(edge, start, end)) {
                const indexToRemove = edges.indexOf(edge);
                edges.splice(indexToRemove, 1);
                i--;
            }
        }
    }

    getEdges(vertexKey) {
        return this._adjacencyList[vertexKey];
    }

    _getAdjKeys(vertexKey) {
        return this._adjacencyList[vertexKey].map(edge => {
            if (edge.end === vertexKey) {
                return edge.start;
            }

            return edge.end;
        })
    }

    _validateEdge(edge) {
        this._validateVertexKey(edge.start);
        this._validateVertexKey(edge.end);
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