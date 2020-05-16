class Vertex {
    constructor(key, value = null) {
        this._key = key;
        this._value = value;
    }

    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }

    toString() {
        return this.key;
    }
}

module.exports = Vertex;