function Node(input=null) {
    return {
        value:input,
        nextNode:null,
    }
}

function LinkedList() {
    let headNode = null
    let length = 0

    const append = (value) => {
        const newNode = Node(value)

        // if head is null, head is now new node
        if (headNode === null) {
            headNode = newNode
        } else {
            let pointer = headNode
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode
            }
            pointer.nextNode = newNode
        }
    }

    const toString = () => {
        let pointer = headNode
        let string = ""
        while (pointer !== null) {
            string += pointer.value + " -> "
            pointer = pointer.nextNode
        }
        string += "null"
        return string
    }

    return {
        append,
        toString
    }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())