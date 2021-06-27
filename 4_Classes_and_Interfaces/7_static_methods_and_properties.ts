class Department5 {
    static fiscalYear = 2021;
    protected employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
        // If you want to access static properties in non static parts of the code: do it this way
        console.log(Department5.fiscalYear);        
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    describe(this: Department5) {
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

class ITDepartment5 extends Department5 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment5 extends Department5 {
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

const employee5 = Department5.createEmployee('Josh');
console.log(employee5, Department5.fiscalYear);

const it5 = new ITDepartment('123', ['Vic']);
it5.addEmployee('Josh');
it5.addEmployee('Vic');

it5.describe();
it5.printEmployeeInformation();

const accounting5 = new AccountingDepartment5('d2', []);
accounting5.addReport('Something went wrong...');
accounting5.printReports();

// access getters like properties, their function execution happens behind the scenes
accounting5.mostRecentReport;

// use/treat setters as well like properties
accounting5.mostRecentReport = 'New most recent report';