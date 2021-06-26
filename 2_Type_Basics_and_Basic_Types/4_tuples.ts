// Tuples: fixed length arrays

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Joshua',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// This works regardless of explicitly specifying the structure of role
// person.role.push('admin');

// This error is caught during dev
// person.role[1] = 10;

// This error is caught during dev
// person.role = [0, 'admin', 'user'];

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);
