'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    get userAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    }
};

console.log(persone.userAge = 30);


console.log(persone.userAge);


//Encapsulation

/*function User(name, age){
    this.name = name;
   let userAge = age;

    this.say = function (){
        console.log(`User name: ${this.name}, age: ${userAge}`);
    };

    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
                  userAge = age;
        }else{
            console.log('Недопустимое значение');
        }
  
    };
}

const david = new User('David', 38);
console.log(david.name); // getting execes
console.log(david.getAge()); //  getting execes

david.setAge(27); // chenging value
david.setAge(120); // chenging value
console.log(david.getAge()); //  getting execes
//david.name = 'Alex';
david.say();*/


//Encapsulation && Class


/*class User{
    constructor(name, age){
   this.name = name;
   this._age = age;
    }
    
    #surname = 'Piruz';

    say = () => {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
                  this._age = age;
        }else{
            console.log('Недопустимое значение');
        }
  
    }
}

const david = new User('David', 38);

console.log(david.surname);


david.say();*/


class User{
    constructor(phone, adress){
        this.phone = phone;
        this.adress = adress;
    }

    #name = 'David';

    say = () =>{
        console.log(`User phone: ${this.phone}, adress: ${this.adress}, name: ${this.#name}`);
    }

    get name(){
        return this.#name;
    }

    set name(name){
        if(typeof name === 'string'){
              this.#name = name;
        }else{
            console.log('fail');
        }
      
    }
}

const myName = new User('888-00000', 'St-Conut');

console.log(myName.name);

myName.name = 888;
myName.name = 'Alex';

console.log(myName.name);

myName.say();