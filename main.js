import { LinkedList } from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
console.log(list.size())
console.log(list.head())
console.log(list.tail())
console.log(list.at(3))
list.pop()
console.log(list.toString())
console.log(list.contains("snake"))
console.log(list.find("cat"))
list.insertAt("igloo", 2)
console.log(list.toString())
list.removeAt(5)
console.log(list.toString())