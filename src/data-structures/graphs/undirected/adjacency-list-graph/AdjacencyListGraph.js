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

        if (!this._adjacencyList[edge.startVertexKey]) {
            this._adjacencyList[edge.startVertexKey] = [];
        }

        if (!this._adjacencyList[edge.endVertexKey]) {
            this._adjacencyList[edge.endVertexKey] = [];
        }

        this._adjacencyList[edge.startVertexKey].push(edge);
        this._adjacencyList[edge.endVertexKey].push(edge);
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

    removeEdgeByKeys(startVertexKey, endVertexKey) {
        const adjList = this.getEdges(startVertexKey);

        if (typeof adjList === "undefined") {
            return false;
        }

        const edgeIndex = adjList.indexOf(
            adjList.find(edge => {
                return edge.startVertexKey === startVertexKey && edge.endVertexKey === endVertexKey
            })
        );

        if (edgeIndex < 0) {
            return false;
        }

        adjList.splice(edgeIndex, 1);
        return true;
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