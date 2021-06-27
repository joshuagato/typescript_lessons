// Abstract classes cannot be instantiated, but rather inherited from
abstract class Department7 {
    static fiscalYear = 2021;
    protected employees: string[] = [];

    constructor(private readonly id: string, protected readonly name: string) {
        console.log(Department7.fiscalYear);        
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    // Abstract methods cannot be featured in concrete classes, but abstract classes
    abstract describe(this: Department7): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment7 extends Department7 {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log('Department Name: ' + this.name);        
    }
}

class AccountingDepartment7 extends Department7 {
    private lastReport: string;
    private static instance: AccountingDepartment7;

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length - 1];
    }

    static getInstance() {
        // if (this.instance) return this.instance; // this also works fine: this being called from
        // static methods give us access to the class: hence we can call static properties as well with it
        if (AccountingDepartment7.instance) return this.instance;
        this.instance = new AccountingDepartment7('d2', []);
        return this.instance;
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

const employee7 = Department7.createEmployee('Josh');
console.log(employee7, Department7.fiscalYear);

const it7 = new ITDepartment('123', ['Vic']);
it7.addEmployee('Josh');
it7.addEmployee('Vic');

it7.describe();
it7.printEmployeeInformation();

const accounting7a = AccountingDepartment7.getInstance();
const accounting7b = AccountingDepartment7.getInstance();
console.log(accounting7a, accounting7b); // a and b should be the same

// const accounting7 = new AccountingDepartment7('d2', []);
// accounting7.addReport('Something went wrong...');
// accounting7.printReports();

// accounting7.mostRecentReport;
// accounting7.mostRecentReport = 'New most recent report';