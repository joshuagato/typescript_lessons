class Department4 {
    protected employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
    }

    describe(this: Department4) {
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

class ITDepartment4 extends Department4 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment4 extends Department4 {
    private lastReport: string;

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length - 1];
    }

    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) throw new Error('Please pass in a valid value!')
        this.addReport(value);
    }

    addEmployee(name: string) {
        if (name === 'Max') return;
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it4 = new ITDepartment('123', ['Vic']);
it4.addEmployee('Josh');
it4.addEmployee('Vic');

it4.describe();
it4.printEmployeeInformation();

const accounting4 = new AccountingDepartment4('d2', []);
accounting4.addReport('Something went wrong...');
accounting4.printReports();

// access getters like properties, their function execution happens behind the scenes
accounting4.mostRecentReport;

// use/treat setters as well like properties
accounting4.mostRecentReport = 'New most recent report';