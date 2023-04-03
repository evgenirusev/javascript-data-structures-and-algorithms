class HashTable {
    constructor(initialCapacity = 8) {
        this.size = 0;
        this.capacity = initialCapacity;
        this.buckets = new Array(initialCapacity);
        this.threshold = Math.floor(initialCapacity * 0.75);
    }
  
    put(key, value) {
        const bucketIndex = this._getBucketIndex(key);

        if (!this.buckets[bucketIndex]) {
            this.buckets[bucketIndex] = [];
        } else {
            for (let i = 0; i < bucket.length; i++) {
                if (this.buckets[bucketIndex][i][0] === key) {
                    this.buckets[bucketIndex][i][1] = value;
                    return;
                }
            }
        }

        this.buckets[bucketIndex].push([key, value]);
        this.size++;
    
        if (this.size >= this.threshold) {
            this._resize(this.capacity * 2);
        }
    }
  
    get(key) {
        const bucketIndex = this._getBucketIndex(key);
    
        if (this.buckets[bucketIndex]) {
            for (let i = 0; i < this.buckets[bucketIndex].length; i++) {
                if (this.buckets[bucketIndex][i][0] === key) {
                    return this.buckets[bucketIndex][i][1];
                }
            }
        }
    
        return null;
    }
  
    containsKey(key) {
        const bucketIndex = this._getBucketIndex(key);
    
        if (this.buckets[bucketIndex]) {
            for (let i = 0; i < this.buckets[bucketIndex].length; i++) {
                if (this.buckets[bucketIndex][i][0] === key) {
                    return true;
                }
            }
        }
    
        return false;
    }
  
    remove(key) {
        const hash = this._hash(key);
        const bucketIndex = hash % this.buckets.length;

        if (this.buckets[bucketIndex]) {
            for (let i = 0; i < this.buckets[bucketIndex].length; i++) {
                if (this.buckets[bucketIndex][i][0] === key) {
                    this.buckets[bucketIndex].splice(i, 1);
                    this.size--;
            
                    if (this.capacity > 8 && this.size < Math.floor(this.capacity * 0.25)) {
                        this._resize(Math.floor(this.capacity / 2));
                    }
            
                    return true;
                }
            }
        }
    
        return false;
    }

    _hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = ((hashCode << 5) - hashCode) + key.charCodeAt(i);
            hashCode |= 0;
        }
        return hashCode;
    }

    _getBucketIndex(key) {
        const hashCode = this._hash(key);
        return hashCode % this.capacity;
    }

    _resize(newCapacity) {
        const oldBuckets = this.buckets;
        this.capacity = newCapacity;
        this.buckets = new Array(newCapacity);
        this.threshold = Math.floor(newCapacity * 0.75);
        this.size = 0;
    
        for (let i = 0; i < oldBuckets.length; i++) {
            if (oldBuckets[i]) {
                for (let j = 0; j < oldBuckets[i].length; j++) {
                    const [key, value] = oldBuckets[i][j];
                    this.put(key, value);
                }
            }
        }
    }
}

module.exports = HashTable;
