let graph = {
    "a": ["d", "f", "l", "z"],
    "d": ["a", "f"],
    "f": ["d", "a", "l"],
    "l": ["f", "a", "z", 45],
    "z": ["a", "l", 45], 
    45: ["z", "l"]
}

function numOfEdges(graph){
    return Object.entries(graph).reduce( (count, ele) => {element = ele.pop(); return count + element.length}, 0)
}

function numOfNodes(graph){
    return Object.keys(graph).length
}
console.log(numOfNodes(graph))
function findDistance(graph, startingPoint, endPoint){
    let visited = new Set();
    let queue = [[startingPoint]];
    while(queue.length){
        let path = queue.shift();
        let node = path[path.length - 1]
        if (!visited.has(node)){
            visited.add(node);
            if (node === endPoint){return path.length - 1}
            graph[node].forEach(element => {queue.push([...path, element])});
        }
    }
    return null;
}

function hasDuplicates(path){
    let pathCopy = [...path];
    path = new Set(path);
    path = [...path];
    return !pathCopy.reduce( (bool, ele, index) => {if (!bool){return bool}else {return ele === path[index]}}, true)
}


function possiblePaths(graph, startingPoint, endPoint){
    let queue = [[startingPoint]];
    let possiblePaths = [];
    while (queue.length){
        let path = queue.shift();
        let node = path[path.length - 1];
            console.log(path.length)
            if (path.length > numOfNodes(graph)){console.log(path.length);break}
            if (node === endPoint && !hasDuplicates(path)){possiblePaths.push(path)}
            graph[node].forEach(ele => queue.push([...path, ele]))
    }
    return possiblePaths
}