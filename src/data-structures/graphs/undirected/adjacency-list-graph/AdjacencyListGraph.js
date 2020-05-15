class AdjacencyListGraph {
    constructor() {
        this._vertices = {};
        this._edges = new Set();
    }

    addVertice(vertex) {
        this._vertices[vertex.key] = vertex;
    }

    getNumerOfVertices() {
        return Object.keys(this._vertices).length;
    }

    addEdge(edge) {
        this._validateEdge(edge);
        this._edges.add(edge);
    }

    getAdjacent(vertex) {
        this._validateVertexKey(vertex);

        return [...this._edges].reduce((acc, edge, []) => {
            if (edge.startVertexKey === vertex.key) {
                return acc.concat(edge.endVertexKey);
            }

            if (edge.endVertexKey === vertex.key) {
                return acc.concat(edge.startVertexKey);
            }
        });
    }

    degree(vertex) {
        return [...this._edges].filter(edge => {
            return edge.startVertexKey === vertex.key || edge.endVertexKey === vertex.key;
        }).length;
    }

    _validateEdge(edge) {
        this._validateVertexKey(edge.startVertexKey);
        this._validateVertexKey(edge.endVertexKey);
    }

    _validateVertexKey(vertex) {
        if (!this._vertexExists(vertex) || typeof vertex === "undefined") {
            throw `invalid vertex ${vertex}`;
        }
    }

    _vertexExists(vertexKey) {
        return typeof this._vertices[vertexKey] !== "undefined";
    }
}

module.exports = AdjacencyListGraph;