class CRUD<T> {
    private items: T[] = [];

    create(item: T): void {
        this.items.push(item);
    }

    read(): T[] {
        return this.items;
    }

    update(index: number, item: T): void {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = item;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    delete(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        } else {
            throw new Error("Index out of bounds");
        }
    }
}
class Users extends CRUD<{ name: string; age: number }> {
}

const users = new Users();
users.create({ name: "John Doe", age: 30 });
users.create({ name: "Jane Doe", age: 25 });

console.log("Users list:", users.read());

users.update(1, { name: "Jane Smith", age: 26 });
console.log("Updated users list:", users.read());

users.delete(0);
console.log("Final users list:", users.read());
