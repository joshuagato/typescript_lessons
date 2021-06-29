interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// this works
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    return { title, description, completeUntil: date };
}

// another style when you dont want to return immediately
function makeCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const ourNames: Readonly<string[]> = ['Josh', 'Vic'];
// ourNames.push('Manu'); // ts throws a error
// ourNames.pop(); // ts throws a error
