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
        const edgesToRemove = this._edges
            .filter(edge => this._edgeMatchesKeysEitherWay(edge, startVertexKey, endVertexKey));

        while (edgesToRemove.length > 0) {
            this._edges.splice(this._edges.indexOf(edgesToRemove.pop()), 1);
        }
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

    get allEdges() {
        return this._edges;
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
        return edge.start.key === vertexKey1 && edge.end.key === vertexKey2
            || edge.end.key === vertexKey1 && edge.start.key === vertexKey2;
    }
}

module.exports = AdjacencyListGraph;