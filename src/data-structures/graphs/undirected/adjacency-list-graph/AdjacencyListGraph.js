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

    getAdjacent(vertexKey) {
        this._validateVertexKey(vertexKey);

        // todo: refactor
        return Array.from(new Set([...this._edges].reduce((acc, edge) => {
            if (edge.startVertexKey === vertexKey) {
                return acc.concat(edge.endVertexKey);
            }

            if (edge.endVertexKey === vertexKey) {
                return acc.concat(edge.startVertexKey);
            }

            return acc;
        }, [])));
    }

    degree(vertexKey) {
        return this.getAdjacent(vertexKey).length;
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