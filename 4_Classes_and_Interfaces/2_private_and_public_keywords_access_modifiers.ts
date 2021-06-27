class Faculty {
    private name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe(this: Faculty) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const computing = new Faculty('Computing');
computing.addEmployee('Josh');
computing.addEmployee('Vic');

computing.describe();
computing.printEmployeeInformation();
