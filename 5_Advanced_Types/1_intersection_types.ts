type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Josh',
    privileges: ['create-server'],
    startDate: new Date()
};

interface Admin2 {
    name: string;
    privileges: string[];
};

interface Employee2 {
    name: string;
    startDate: Date;
};

// The code at the top can be done like so:
interface ElevatedEmployee2 extends Employee2, Admin2 {

}

type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal = Combinable2 & Numeric2;
