/**
 * Bellman-ford approach
 * Time Complexity - O(K * N)
 * Space Complexity - O(N)
 * https://leetcode.com/problems/cheapest-flights-within-k-stops
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function cheapestFlightsWithinKStops(n, flights, src, dst, K) {
    const graph = Array.from({ length: n }).fill().map(() => []);
    flights.forEach(flight => {
        graph[flight[0]].push({ target: flight[1], dist: flight[2]});
    });
    
    const distances = Array.from({ length: n }).fill(Infinity);
    distances[src] = 0;

    for (let step = 0; step <= K; step++) {
        const nextDistances = distances.slice();

        for (let vertex = 0; vertex < n; vertex++) {
            if (distances[vertex] !== Infinity) {
                graph[vertex].forEach(edge => {
                    const newPath = distances[vertex] + edge.dist;
                    if (newPath < nextDistances[edge.target]) {
                        nextDistances[edge.target] = newPath;
                    }
                });
            }
        }
    
        distances.splice(0);
        distances.push(...nextDistances);
    }
    
    return distances[dst] === Infinity ? -1 : distances[dst];
}

module.exports = cheapestFlightsWithinKStops;