class Faculty {
    private employees: string[] = [];

    constructor(private readonly name: string, ) {
    }

    describe(this: Faculty) {
        console.log('Faculty: ' + this.name);
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
