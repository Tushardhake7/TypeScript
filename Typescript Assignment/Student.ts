class Student { 
    enrollmentNumber: number;
    studentName: string;

    constructor(enrollmentNumber: number, studentName: string) { 
        this.enrollmentNumber = enrollmentNumber;
        this.studentName = studentName;
    }

    showDetails = () => { 
        console.log("Student Deatails: " + "Enrollment Number: " + this.enrollmentNumber + " Student Name: " + this.studentName);
    }

    let student = new Student(1, "Alex");
    student.showDetails();

}

