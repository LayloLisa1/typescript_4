interface Shape {
    accountArea(): number;
}
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    accountArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    accountArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log(`Circle area: ${circle.accountArea()}`);
const rectangle = new Rectangle(10, 5);
console.log(`Rectangle area: ${rectangle.accountArea()}`);
