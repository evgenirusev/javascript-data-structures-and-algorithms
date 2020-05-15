class AdjacencyListGraph {
    constructor() {
        this._adjacent = {};
        this._vertices = {};
    }

    addVertice(vertex) {
        this._vertices[vertex.key] = vertex;
    }

    getNumerOfVertices() {
        return Object.keys(this._vertices).length;
    }

    addEdge(edge) {
        this._validateEdge(edge);

        if (!this._adjacent[edge.startVertexKey]) {
            this._adjacent[edge.startVertexKey] = [];
        }

        if (!this._adjacent[edge.endVertexKey]) {
            this._adjacent[edge.endVertexKey] = [];
        }

        this._adjacent[edge.startVertexKey].push(edge);
        this._adjacent[edge.endVertexKey].push(edge);
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
        return new Set(this._getAdjKeys(vertexKey)).size;
    }

    _getAdjKeys(vertexKey) {
        return this._adjacent[vertexKey].map(edge => {
            if (edge.endVertexKey === vertexKey) {
                return edge.startVertexKey;
            }

            return edge.endVertexKey;
        })
    }

    _validateEdge(edge) {
        this._validateVertexKey(edge.startVertexKey);
        this._validateVertexKey(edge.endVertexKey);
    }

    _validateVertexKey(vertexKey) {
        if (typeof vertexKey === "undefined" || !this._vertexExists(vertexKey)) {
            throw `invalid vertex ${vertexKey}`;
        }
    }

    _vertexExists(vertexKey) {
        return typeof this._vertices[vertexKey] !== "undefined";
    }
}

module.exports = AdjacencyListGraph;