class AdjacencyListGraph {
    constructor() {
        this._edges = [];
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
        this._edges.push(edge);
    }

    getVertex(vertexKey) {
        return this._vertices[vertexKey];
    }

    getAdjacent(vertexKey) {
        this._validateVertexKey(vertexKey);

        return this._edges.reduce((acc, edge) => {
            if (edge.start.key === vertexKey && acc.indexOf(edge.end) < 0) {
                acc.push(edge.end);
            }

            if (edge.end.key === vertexKey && acc.indexOf(edge.start) < 0) {
                acc.push(edge.start);
            }

            return acc;
        }, []);
    }

    degree(vertexKey) {
        return new Set(
            this._getAdjKeys(vertexKey)
        ).size;
    }

    removeAllEdgesInBetween(startVertexKey, endVertexKey) {
        this._removeAllEdgesEitherWay(startVertexKey, endVertexKey);
        this._removeAllEdgesEitherWay(endVertexKey, startVertexKey);
    }

    _removeAllEdgesEitherWay(startVertexKey, endVertexKey) {
        const edges = this.getEdges(startVertexKey);

        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (this._edgeMatchesKeysEitherWay(edge, startVertexKey, endVertexKey)) {
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
            if (edge.endVertexKey === vertexKey) {
                return edge.startVertexKey;
            }

            return edge.endVertexKey;
        })
    }

    _validateEdge(edge) {
        this._validateVertexKey(edge.start);
        this._validateVertexKey(edge.end);
    }

    _validateVertexKey(vertex) {
        if (typeof vertex === "undefined" || !this._vertexExists(vertex)) {
            throw `invalid vertex ${vertex}`;
        }
    }

    _vertexExists(vertex) {
        return typeof this._vertices[vertex] !== "undefined";
    }

    _edgeMatchesKeysEitherWay(edge, vertexKey1, vertexKey2) {
        return edge.startVertexKey === vertexKey1 && edge.endVertexKey === vertexKey2
            || edge.endVertexKey === vertexKey1 && edge.startVertexKey === vertexKey2;
    }
}

module.exports = AdjacencyListGraph;