class person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	showInfo() {
		console.log(`Name: ${this.name}, Age: ${this.age}`);
	}
}

class car {
	constructor(brand, model, year, number, owner) {
		this.brand = brand;
		this.year = year;
		this.number = number;
		this.owner = owner;
		this.model = model;


		if (owner.age < 18) {
			console.log('You must be over 18 years old');
			this.owner = null;
		}
	}
	showInfo() {
		console.log(`Brand: ${this.brand}, Model: ${this.model}, Year:${this.year}, Car license: ${this.number}`);

		if (this.owner) {
			this.owner.showInfo();
		} else {
			console.log('Not owner');
		}

	}
}

let person1 = new person('Kristya', 25);
let person2 = new person('Eduard', 27);

let car1 = new car('Nissan', 'Qashqai', 2015, 'ВН 2717 AB', person1);
let car2 = new car('Mersedec', 'GLE-350', 2023, 'KA 5555 BE', person2);

car1.showInfo();
car2.showInfo();