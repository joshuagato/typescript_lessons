class Department2 {
    private employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
    }

    describe(this: Department2) {
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
class ITDepartment extends Department2 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department2 {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);        
    }
}

const it = new ITDepartment('123', ['Vic']);
it.addEmployee('Josh');
it.addEmployee('Vic');

it.describe();
it.printEmployeeInformation();

const accounting2 = new AccountingDepartment('d2', []);
accounting2.addReport('Something went wrong...');
accounting2.printReports();