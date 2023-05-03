function heldKarp(graph) {
	const numVertices = graph.getNumerOfVertices();
	const cache = {};

	function recurse(currVertex, visited) {
		const memoKey = currVertex + '_' + visited.join('_');
		
		if (cache[memoKey]) {
			return cache[memoKey];
		}
		
		if (visited.length === numVertices) {
			return {
				distance: graph.outgoingEdgesOf(currVertex).find(
					edge => edge.end === graph.getVertex(visited[0])
				).weight
			};
		}
		
		let minDistance = Infinity;
		let nextVertex;
		
		graph.outgoingEdgesOf(graph.getVertex(currVertex)).forEach(edge => {
			if (!visited.includes(edge.end)) {
				const newVisited = [...visited, edge.end];
				const result = recurse(edge.end, newVisited);
				
				if (edge.weight + result.distance < minDistance) {
					minDistance = edge.weight + result.distance;
					nextVertex = edge.end;
				}
			}
		});
		
		cache[memoKey] = { distance: minDistance, nextVertex };
		return cache[memoKey];
	}
	
	let minDistance = Infinity;
	let startVertex;
	
	graph.allVertices.forEach(vertex => {
		const result = recurse(vertex, [vertex]);
		if (result.distance < minDistance) {
			minDistance = result.distance;
			startVertex = vertex;
		}
	});
	
	let path = [startVertex];
	let currentVertex = startVertex;

	while (path.length < numVertices) {
		const nextVertex = recurse(currentVertex, path).nextVertex;
		path.push(nextVertex);
		currentVertex = nextVertex;
	}

	return { distance: minDistance, path };
}

module.exports = heldKarp;