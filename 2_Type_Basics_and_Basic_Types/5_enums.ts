enum Role { ADMIN, READ_ONLY, AUTHOR };

// enums are 0 indexed by default: However you can customize the index of the first element and the rest will follow suit
enum RolesA { ADMIN = 5, READ_ONLY, AUTHOR };

// You can also give each element in the enum a custom value
enum RolesB { ADMIN = 100, READ_ONLY = 200, AUTHOR = 300 };

// You can mix strings with numbers for the enum values
enum RolesC { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 300 };

const person = {
    name: 'Joshua',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);
