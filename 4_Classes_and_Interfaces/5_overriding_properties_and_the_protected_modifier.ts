class Department3 {
    protected employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
    }

    describe(this: Department3) {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// You can inherit from only one class
class ITDepartment3 extends Department3 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment3 extends Department3 {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    // Overriding base class method 'addEmployee'
    // also we have access to base class property 'employees' since its protected
    // 'private' properties are available in the class only
    // 'protected' properties are available both in that class and classes that extend it
    addEmployee(name: string) {
        if (name === 'Max') return;
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);        
    }
}

const it3 = new ITDepartment('123', ['Vic']);
it3.addEmployee('Josh');
it3.addEmployee('Vic');

it3.describe();
it3.printEmployeeInformation();

const accounting3 = new AccountingDepartment('d2', []);
accounting3.addReport('Something went wrong...');
accounting3.printReports();