// ************* Задача 1 ***************

class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) this.durability = 0;
    }
    getDamage(){
        if (this.durability == 0) return this.attack = 0;
        return (this.durability / this.startDurability * 100) < 30 ? this.attack / 2 : this.attack;
    }
    isBroken() {
        return this.durability <= 0;
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const cane = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const strongBow = new Weapon({
    name: 'Длинный Лук',
    attack: 15,
    durability: 200,
    range: 4,
})

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
})

const stormСane = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});


// ************* Задача 2 ***************

class Arm extends Weapon {
    constructor() {
      super({name:'Рука', attack:1, durability:Infinity, range:1});
    }
  }
  
  class Bow extends Weapon {
    constructor() {
      super({name:'Лук', attack:10, durability:200, range:3});
    }
  }
  
  class Sword extends Weapon {
    constructor() {
      super({name:'Меч', attack:25, durability:500, range:1});
    }
  }
  
  class Knife extends Weapon {
    constructor() {
      super({name:'Нож', attack:5, durability:300, range:1});
    }
  }
  
  class Staff extends Weapon {
    constructor() {
      super({name:'Посох', attack:8, durability:300, range:2})
    }
  }
  
  class StormStaff extends Staff {
    constructor () {
      super({})
       this.name = 'Посох Бури';
       this.attack = 10;
       this.range = 3}
  }
  
  class Axe extends Sword {
    constructor () {
      super({})
       this.name = 'Секира';
       this.attack = 27;
       this.durability = 800
       }
  }
  
  class LongBow extends Bow {
    constructor () {
      super({})
       this.name = 'Длинный лук';
       this.attack = 15;
       this.range = 4
       }
  }

// ************* Задача 3 ***************

class StudentLog {
    constructor (name) {
        this.name = name;
        this.grades = {}
        }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        let quantityGrades;
        this.grades[subject] ? quantityGrades = this.grades[subject].length : quantityGrades = 0; 
        if ([1, 2, 3, 4, 5].indexOf(grade) < 0) return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5\n${quantityGrades}`;
        this.grades[subject] = (this.grades[subject] || []);
        this.grades[subject].push(grade);
        return `${this.grades[subject].length}`;
    }
    getAverageBySubject(subject) {
        if (!this.grades[subject]) return `0`;
        let sum = 0;
        for (let i = 0; i < this.grades[subject].length; i++) sum += this.grades[subject][i];
        let averageBySubject = parseFloat((sum / this.grades[subject].length).toFixed(2));
        return averageBySubject;
    }
    getTotalAverage() {
        let totalSum = 0;
        let totalDivider = 0;
        for (let key in this.grades) {
            for (let i in this.grades[key]) {
                totalSum += parseFloat(this.grades[key][i]);
                totalDivider += 1;
            }
        }
        return totalSum / totalDivider;
    }
}