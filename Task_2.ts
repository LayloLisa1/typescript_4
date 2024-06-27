abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}
class Car extends Vehicle {
    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}
class MotorCycle extends Vehicle {
    start(): void {
        console.log("MotorCycle started");
    }

    stop(): void {
        console.log("MotorCycle stopped");
    }
}
const car = new Car();
car.start();
car.stop();
const motorCycle = new MotorCycle();
motorCycle.start();
motorCycle.stop();
