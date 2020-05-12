class AdjacencyListGraph {
    constructor(numberOfVertices) {
        this.vertices = [...Array(numberOfVertices)].map(e => Array());
    }

    addEdge(vertice1, vertice2) {
        if (!isVerticeValid(vertice1) && !isVerticeValid(vertice2)) {
            throw `invalid vertice index - ${vertice}`;
        }

        this[vertice1].push(vertice2);
        this[vertice2].push(vertice1);
    }

    isVerticeValid(vertice) {
        return isVerticeInBounds(vertice) && typeof vertice === "number";
    }

    isVerticeInBounds(vertice) {
        return vertice > 0 && vertice < this.vertices.length;
    }
}

module.exports = AdjacencyListGraph;