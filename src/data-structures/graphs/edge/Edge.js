class Edge {
    constructor(startVertexKey, endVertexKey, weight = null) {
        this._startVertexKey = startVertexKey;
        this._endVertexKey = endVertexKey;
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    get startVertexKey() {
        return this._startVertexKey;
    }

    get endVertexKey() {
        return this._endVertexKey;
    }
}

module.exports = Edge;