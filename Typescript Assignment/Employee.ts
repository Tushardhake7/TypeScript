export class Employee { 
    private name: string;
    private color: string;
    private birthyear: number;

    constructor(name:string, color:string, birthyear: number) {
        this.name = name;
        this.color = color;
        this.birthyear = birthyear;
     }

    get newName(): string { 
        return this.name;
    }

    set newName(newName: string) { 
        this.name = newName;
    }

    get newColor(): string { 
        return this.color;
    }

    set newColor(newColor: string) { 
        this.color = newColor;
    }

    get newBirthyear(): number { 
        return this.birthyear;
    }

    set newBirthyear(newBirthyear: number) { 
        this.birthyear = newBirthyear;
    }
}

class AdhocEmployee extends Empolyee { 
    private noOfHours: number;

    constructor(name, color , birthyear, noOfHours) { 
        super(name, color , birthyear);
        this.noOfHours = noOfHours;
    }
 
    get newNoOfHours(): number { 
        return this.noOfHours;
    }

    set newNoOfHours(newNoOfHours: number) { 
        this.noOfHours = newNoOfHours;
    }
}

let employees = new Employee('Alex', 'Black', 2000);
console.log(employees.newName + " " + employees.newColor + " " + employees.newBirthyear);

let emp = new AdhocEmployee('Roman', 'Red', 2001, 09);
console.log('name :' + emp.newName + ' color :' + emp.newColor + ' birth_Year : ' + emp.newBirthyear + ' working_hour : ' + emp.newNoOfHours);
