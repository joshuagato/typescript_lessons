// Abstract classes cannot be instantiated, but rather inherited from
abstract class Department6 {
    static fiscalYear = 2021;
    protected employees: string[] = [];

    constructor(private readonly id: string, protected readonly name: string) {
        console.log(Department6.fiscalYear);        
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    // Abstract methods cannot be featured in concrete classes, but abstract classes
    abstract describe(this: Department6): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment6 extends Department6 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log('Department Name: ' + this.name);        
    }
}

class AccountingDepartment6 extends Department6 {
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
    
    describe(): void {
        console.log('Department Name: ' + this.name);
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

const employee6 = Department6.createEmployee('Josh');
console.log(employee6, Department6.fiscalYear);

const it6 = new ITDepartment('123', ['Vic']);
it6.addEmployee('Josh');
it6.addEmployee('Vic');

it6.describe();
it6.printEmployeeInformation();

const accounting6 = new AccountingDepartment6('d2', []);
accounting6.addReport('Something went wrong...');
accounting6.printReports();

accounting6.mostRecentReport;
accounting6.mostRecentReport = 'New most recent report';