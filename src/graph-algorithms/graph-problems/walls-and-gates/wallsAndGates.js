const Queue = require("../../../data-structures/queues/with-object-and-pointers/Queue");

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const queue = getInitialData(rooms);
    
    let distance = 1;
    while (!queue.isEmpty) {
        const initialQueueSize = queue.length;
        for (let i = 0; i < initialQueueSize; i++) {
            progressRooms(queue, rooms, distance);
        }

        distance++;
    }

    updateUnvisitedRooms(rooms);
};

function getInitialData(rooms, queue = new Queue()) {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] == 0)
                queue.enqueue([row, col]);
        }
    }

    return queue;
}

function progressRooms(queue, rooms, distance) {
    const [row, col] = queue.dequeue();
    const [rows, cols] = [rooms.length, rooms[0].length];
  
    for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
        const cell = rooms[_row][_col];

        if (cell === 2147483647) { // Check for unvisited room
            rooms[_row][_col] = distance;
            queue.enqueue([_row, _col]);
        }
    }
}

function updateUnvisitedRooms(rooms) {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] == Infinity)
                rooms[row][col] = -1;
        }
    }
}

var getNeighbors = (row, rows, col, cols) => [ [ 0, 1 ],[ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ _row, _col ]) => [ (row + _row), (col + _col) ])
    .filter(([ _row, _col ]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));

module.exports = wallsAndGates;