const PathCompressedQuickUnion = require("../path-compressed-quick-union");

// Given a social network containing n members and a log file containing m timestamps
// at which times pairs of members formed friendships, design an algorithm to determine
// the earliest time at which all members are connected (i.e., every member is a friend
// of a friend of a friend ... of a friend). Assume that the log file is sorted by 
// timestamp and that friendship is an equivalence relation. The running time of your
// algorithm should be mlogn or better and use extra space proportional to n.

const friends = [
    {
        name: "Dave",
        age: 20,
        id: "1"
    },
    {
        name: "Lary",
        age: 30,
        id: "2"
    },
    {
        name: "Anna",
        age: 25,
        id: "3"
    },
    {
        name: "Michael",
        age: 22,
        id: "4"
    },
    {
        name: "Lara",
        age: 28,
        id: "5"
    },
];

const timestampEntries = [
    {
        time: "5:30",
        connectedFriends: [1, 2]
    },
    {
        time: "6:30",
        connectedFriends: [2, 3]
    },
    {
        time: "7:00",
        connectedFriends: [4, 5]
    },
    {
        time: "8:00",
        connectedFriends: [4, 1]
    },
    {
        time: "9:00",
        connectedFriends: [4, 2]
    },
];

function getEarliestTime(timestampEntries, friends) {
    const quickUnion = new PathCompressedQuickUnion(friends);
    let unconnectedFriendsAmount = friends.length - 1;

    let timestampIndex = 0;
    let currentTimeStampEntry;
    while (unconnectedFriendsAmount > 0) {
        currentTimeStampEntry = timestampEntries[timestampIndex];
        const friend1Id = currentTimeStampEntry.connectedFriends[0];
        const friend2Id = currentTimeStampEntry.connectedFriends[1];

        if (!quickUnion.areConnected(friend1Id, friend2Id)) {
            quickUnion.union(friend1Id, friend2Id);
            unconnectedFriendsAmount--;
        }

        timestampIndex++;
    }

    return currentTimeStampEntry.time;
}

const result = getEarliestTime(timestampEntries, friends);
console.log(result);