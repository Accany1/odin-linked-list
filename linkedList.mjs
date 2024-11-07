function Node(input=null) {
    return {
        value:input,
        nextNode:null,
    }
}

export function LinkedList() {
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

    const prepend = (value) => {
        const newNode = Node(value)
        newNode.nextNode = headNode
        headNode = newNode
    }

    const size = () => {
        if (headNode === null) {
            return 0
        }
        let count = 1
        let pointer = headNode

        while (pointer.nextNode !== null){
            count += 1
            pointer = pointer.nextNode
        }

        return count
    }

    const head = () => {
        if (headNode === null) return null
        return headNode
    }

    const tail = () => {
        if (headNode === null) return null
        let pointer = headNode
        while (pointer.nextNode !== null){
            pointer = pointer.nextNode
        }

        return pointer
    }

    const at = (index) => {
        if (headNode === null) return null
        let pointer = headNode
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode
        }
        return pointer
    }

    const pop = () => {
        if (headNode === null) return null

        let pointer = headNode
        let previous = null
        
        while (pointer.nextNode !== null) {
            previous = pointer
            pointer = pointer.nextNode
        }
        previous.nextNode = null;
    }

    const contains = (value) => {
        if (headNode === null) return false
        let pointer = headNode

        while (pointer !== null) {
            if (pointer.value === value) return true
            pointer = pointer.nextNode
        }

        return false
    }

    const find = (value) => {
        if (headNode === null) return null

        let pointer = headNode
        let count = 0
        while (pointer !== null) {
            if (pointer.value === value) return count
            count += 1
            pointer = pointer.nextNode
        }

        return null
    }

    const insertAt = (value,index) => {
        const newNode = Node(value)
        if (headNode === null) {
            headNode = newNode
        }

        let prev = null

        let pointer = headNode
        for (let i = 0; i < index; i++) {
            prev = pointer
            pointer = pointer.nextNode
        }
        
        prev.nextNode = newNode
        newNode.nextNode = pointer
    }

    const removeAt = (index) => {
        if (headNode === null) return null

        let prev = at(index-1)
        let after = at(index+1)

        if (index === 0) {
            headNode = after
        } else {
            prev.nextNode = after
        }   
    }

    const toString = () => {
        let pointer = headNode
        let string = ""
        while (pointer !== null) {
            string += "( " + pointer.value + " )"+ " -> "
            pointer = pointer.nextNode
        }
        string += "null"
        return string
    }

    

    return {
        append,
        prepend,
        toString,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        insertAt,
        removeAt
    }
}