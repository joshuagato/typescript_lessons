type Admin3 = {
    name: string;
    privileges: string[];
};

type Employee3 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee4 = Admin & Employee;

const el2: ElevatedEmployee3 = {
    name: 'Josh',
    privileges: ['create-server'],
    startDate: new Date()
};

interface Admin4 {
    name: string;
    privileges: string[];
};

interface Employee4 {
    name: string;
    startDate: Date;
};

// The code at the top can be done like so:
interface ElevatedEmployee3 extends Employee3, Admin3 {

}

type Combinable3 = string | number;
type Numeric3 = number | boolean;

type Universal3 = Combinable3 & Numeric3;

function add(a: Combinable3, b: Combinable3) {
    if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
    return a + b;
}

type UnknownEmployee = Employee4 | Admin4;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp) console.log('Start Date: ' + emp.startDate);
}

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading Cargo: ' + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);
