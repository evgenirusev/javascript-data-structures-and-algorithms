class AdjacencyListGraph {
    constructor() {
        this._vertices = {};
        this._edges = new Set();
    }

    addVertice(vertix) {
        this._vertices[vertix.key] = vertix;
    }

    getNumerOfVertices() {
        return Object.keys(this._vertices).length;
    }

    addEdge(edge) {
        this._validateEdge(edge);
        this._edges.add(edge);
    }

    getAdjacent(vertex) {
        this._validateVertix(vertex);

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

    }

    _validateEdge(edge) {
        this._validateVertix(edge.startVertexKey);
        this._validateVertix(edge.endVertexKey);
    }

    _validateVertix(vertex) {
        if (!this._vertixExists(vertex.key) || typeof vertex == "undefined") {
            throw `invalid vertix ${vertex}`;
        }
    }

    _vertixExists(vertexKey) {
        return typeof this._vertices[vertexKey] !== "undefined";
    }
}

module.exports = AdjacencyListGraph;