import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Milk"),
  new TodoItem(2, "Make Tea"),
  new TodoItem(3, "Collect Parcel"),
  new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Abul", todos);

console.clear();
console.log(
  `${collection.userName}'s Todo List` +
    ` (${collection.getItemsCounts().incomplete} items to do)`
);

collection.getTodoItems(true).forEach((item) => item.printDetails());
