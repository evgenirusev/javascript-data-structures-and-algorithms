class Edge {
    constructor(start, end, weight = null) {
        this._start = start;
        this._end = end;
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    get start() {
        return this._start;
    }

    get end() {
        return this._end;
    }

    setWeight(weight) {
        this._weight = weight;
    }

    toString() {
        return `${this.start}->${this.end}->${this.weight}`;
    }
}

module.exports = Edge;