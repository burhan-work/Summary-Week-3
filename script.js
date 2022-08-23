// let data = ["burhan", 19, true];

// console.log(data);

// const motor = ["suzuki", "yamaha", "honda"];
//     motor[2] = ["hurley"];

//     console.log(motor);

// let team = ["manager", "front end", "back end"];
// team[1] = "designer";

// console.log(team);

// let list = [
//     "belajar javascript",
//     "belajar matematika",
//     "membuat landing page"
// ];

// list.push("kelas online programming");

// console.log(list);

// let list = [
//     "belajar javascript",
//     "belajar matematika",
//     "membuat landing page"
// ];

// list.pop();

// console.log(list);

// let list = [
//     "belajar javascript",
//     "belajar matematika",
//     "membuat landing page"
// ];

// list.shift();

// console.log(list);

// let list = [
//     "belajar javascript",
//     "belajar matematika",
//     "membuat landing page"
// ];

// list.unshift("kelas online programming");

// console.log(list);

// const number = [2, 1, 8, 6, 7];
//         number.sort();

//         console.log(number);

// const motor = ["suzuki", "yamaha", "honda"];
//         motor.forEach(elemen => {
//             console.log(elemen);
//         });

// let array = [1, 2, 3, 4, 5];
        
// let newArray = array.map(num => {
//     return num * 2;
// });

// console.log(newArray);

// let array = [1, 2, 3, 4, 5];
//     newArray = array.forEach((num, index) => {
//         return array[index] = num * 2;
//     });

//     console.log(newArray);

// let inventory = [
//     ["Kaos", 5],
//     ["Jaket", 3],
//     ["Kemeja", 10],
//     ["Jeans", 5],
//     ["Sepatu", 3]
// ];

// inventory.push(["Sandal", 3]);

// console.log(inventory);

// let inventory = [
//     ["Kaos", 5],
//     ["Jaket", 3],
//     ["Kemeja", 10],
//     ["Jeans", 5],
//     ["Sepatu", 3]
// ];

// // menghitung produk yang terjual (misal jumlah stok awal = 50 untuk semua produk)
// inventory.map(dataInventory => {
//     let terjual = 50 - dataInventory[1];
//     dataInventory[2] = terjual;
// });

// console.table(inventory);

// let inventory = [
//     ["Kaos", 5],
//     ["Jaket", 3],
//     ["Kemeja", 10],
//     ["Jeans", 5],
//     ["Sepatu", 3]
// ];

// console.log(inventory);

// let person = {
//     name : "Burhan",
//     age : 25,
//     major : "Mathematic",
//     'current address' : "Labuapi, Lombok"
// }

// console.log(person.major);

// let person = {
//     name : "Burhan",
//     age : 25,
//     major : "Mathematic",
//     'current address' : "Labuapi, Lombok"
//   }

//   // update current key with the new value
//   person.age = 27;

//   // add new key and value
//   person.address = "Alas Barat, Sumbawa"

//   console.log(person);

// const person = {
//     name : "Burhanuddin",
//     age : 25,
//     major : "Mathematic",
//     'current address' : "Labuapi, Lombok"
//     }

//     person = {
//         fullname : "Burhanuddin"
//     }

//     console.log(person);

// let person = {
//     name : "Burhan",
//     age : 25,
//     major : "Mathematic",
//     'current address' : "Labuapi, Lombok"
// }

// delete person.age;

// console.log(person);

// const greeting = {
//     welcome : function () {
//         return "Halo, selamat datang";
//     },
//     afterTransaction : function () {
//         return "Terima kasih sudah membeli";
//     }
// };

// console.log(greeting.welcome());

// const news = {
//     title : "AMMAN Coding Bootcamp",
//     description : "Beasiswa pelatihan coding untuk pemuda Sumbawa",
//     author : {
//         person: {
//             name : "Burhanuddin",
//             age : 25,
//             city : "Sumbawa"
//         }
//     }
// };

// console.log("News:", news.title);
// console.log("Article publish by", news.author.person.name);

// for(let data in news) {
//     console.log(news[data]);
// };

// for(let author in news.author.person) {
//     console.log(news.author.person[author]);
// }

// let number = {
//     oriA : 3,
//     oriB : 4
// };

// function changeData (obj) {
//     obj.oriA = 6;
//     obj.oriB = 8;
// };

// changeData(number)

// console.log(number.oriA);
// // output: 6

// console.log(number.oriB);
// // output: 8

// let student = [
//     {
//         name : "burhan",
//         age : 25,
//         city : "Sumbawa"
//     },

//     {
//         name : "abiem",
//         age : 24,
//         city : "Sumbawa"
//     },

//     {
//         name : "anto",
//         age : 25,
//         city : "Sumbawa"
//     }
// ];

// // gunakan forEach jika object berada di dalam array
// student.forEach((listStudent) => {
//     console.log(listStudent);
// });

// function countDown(number) {
//     console.log(number);

//     let nextNumber = number - 1;

//     // jika kondisi ini bernilai false maka recursive berhenti
//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(5);

// function pow(x, n) {
//     if (n==1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(3, 4))

// let regex = new RegExp("monkey");
// console.log(regex.test("monkey"));

// let regex1 = /monkey/;
// console.log(regex1.test("monkey"));

// let regex = /a/ig;
//     let name = "Ahmad Fauzul Kabir";

//     console.log(name.match(regex));

// let regex = /\d\s\w\w\w\w\w\w\w/;
// let name = "3 monkeys";

// console.log(regex.test(name));

// let negasi = /[01]/;

    // console.log(negasi.test("010101010110"));
    // output: false

    // console.log(negasi.test("010101023"));
    // output: true

    // let person = {
    //     name : "burhan",
    //     age : 25,
    //     detail : function() {
    //         return (this.name) + " berusia " + (this.age)
    //     },
    // };

    // let person1 = {
    //     name : "udin",
    //     age : 25,
    //     detail : function() {
    //         return (this.name) + " berusia " + (this.age)
    //     },
    // };

    // console.log(person.detail());
    // console.log(person1.detail());

    // function person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.detail = function() {
    //         return (this.name) + " berusia " + (this.age)
    //     };
    // }

    // let person1 = new person("burhan", 25);
    // let person2 = new person("udin", 25);

    // console.log(person1.name);
    // console.log(person2.name);
    // console.log(person1.detail());
    // console.log(person2.detail());

    // class person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     detail() {
    //         return (this.name) + " berusia " + (this.age)
    //     };
    // };

    // let person1 = new person("burhan", 25);
    // let person2 = new person("udin", 25);

    // console.log(person1.name);
    // console.log(person2.name);
    // console.log(person1.detail());
    // console.log(person2.detail());

    // function grab (jarak) {
    //     const pricePerKm = 5000;
    //     this.jarak = jarak;
    //     this.price = function () {
    //         return pricePerKm * this.jarak;
    //     }
    // }

    // let client1 = new grab(3);
    // client1.pricePerKm = 10000;

    // console.log(client1.price());

    // class people {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     };

    //     detail() {
    //         return (this.name) + " berusia " + (this.age);
    //     };
    // };

    // class person extends people {
    //     constructor(name, age, job) {
    //         super(name, age);
    //         this.job = job;
    //     };
    // };

    // let client = new person("burhan", 25, "front end developer");

    // console.log(client.name);
    // console.log(client.job);
    // console.log(client.detail());

    // class animal {
    //     animalSound() {
    //         console.log("the animal makes a sound");
    //     }
    // }

    // class cat extends animal {
    //     animalSound() {
    //         console.log("miaaww");
    //     }
    // }

    // let persiaCat = new cat();
    // persiaCat.animalSound();

    // class hero {
    //     constructor(hp) {
    //         this.health = hp;
    //     }

    //     fight() {
    //         this.health += 50;
    //         return this.health;
    //     }

    //     eat() {
    //         this.health += 100;
    //         return this.health;
    //     }
    // }

    // let alpha = new hero(500);

    // console.log(alpha.fight());
    // console.log(alpha.eat());


// file script.js sebagai file javascript utama yang dipanggil pada html
// gunakan keyword import dan diikuti nama function yang ada pada greeting.js
import {hi, thanks} from './greeting.js';

hi("burhan");
thanks("burhan", "sepatu");