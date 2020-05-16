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
        return [...new Set(
            this.getEdges(vertexKey)
        )];
    }

    degree(vertexKey) {
        this._validateVertexKey(vertexKey);
        return this.getEdges(vertexKey).length;
    }

    removeAllEdgesInBetween(startVertexKey, endVertexKey) {
        this._removeAllEdgesEitherWay(startVertexKey, endVertexKey);
        this._removeAllEdgesEitherWay(endVertexKey, startVertexKey);
    }

    getEdges(vertexKey) {
        return this._edges.reduce((acc, edge) => {
            if (edge.start.key === vertexKey) {
                acc.push(edge.end);
            }

            if (edge.end.key === vertexKey) {
                acc.push(edge.start);
            }

            return acc;
        }, []);
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