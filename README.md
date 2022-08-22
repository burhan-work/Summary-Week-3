# GIT DAN GITHUB LANJUTAN
## Git *Introduction*
GIT adalah Tools untuk programmer yang berperan sebagai Version Control System.

**Apa itu *Version Control System***

Tugasnya adalah mencatat setiap perubahan pada File (termasuk code yang kita buat) pada suatu proyek baik dikerjakan secara individu maupun tim.

Git adalah aplikasi yang dapat melacak setiap perubahan yang terjadi pada suatu folder atau file. Git biasanya digunakan oleh para programmer sebagai tempat penyimpanan file pemrograman mereka, karena lebih efektif. File-file yg disimpan menggunakan git akan terlacak seluruh perubahannya, termasuk siapa yang mengubah.

***WHY should use* GIT *and* Github?**

Dengan menggunakan GIT dan Github, kamu akan bisa bekerja dalam sebuat tim. Tujuan besarnya adalah kamu bisa berkolaborasi mengerjakan proyek yang sama tanpa harus repot copy paste folder aplikasi yang terupdate. Kamu juga tidak perlu menunggu rekan dalam satu tim kamu menyelesaikan suatu program dahulu untuk berkolaborasi. Kamu bisa membuat file didalam projek yang sama atau membuat code di file yang sama dan menyatukannya saat sudah selesai.

## Instalasi Git
Download dan jalankan hasil download GIT kamu seperti instal aplikasi pada umumnya.

**Cek apakah instalasi berhasil**

![alt text](assets/aa.PNG)

***Setup* Awal**

Ada beberapa konfigurasi yang harus dipersiapakan sebelum mulai menggunakan Git, seperti name dan email.

Silahkan lakukan konfigurasi dengan perintah berikut ini.

    git config --global user.name "burhan-work"
    git config --global user.email burhan.bnw@gmail.com

**Cek apakah setup berhasil**

Silahkan gunakan perintah berikut:

    git config --list

Apabila konfigurasi berhasil, maka akan tampil seperti gambar berikut ini:

![alt text](assets/ab.PNG)

Perlu untuk diingat bahwa email yang di-*setup* harus sama dengan yang digunakan pada GITHUB.

## *Repository* GIT
*Repository* dalam bahasa indonesia artinya gudang. *Repository* merupakan istilah yang digunakan untuk direktori proyek yang menggunakan Git. Jika kita memiliki sebuah direktori dengan nama proyek-01 dan di dalamnya sudah menggunakan git, maka kita sudah punya repositori bernama proyek-01.
Repository adalah direktori proyek yang kita buat.

        1 Repo =  1 Proyek = 1 Direktori

**Membuat *Repository***

Pembuatan *Repository* dapat dilakukan dengan perintah

    git init proyek-01

Perintah **git init** akan membuat sebuah direktori bernama **.git** di dalam proyek kita. Direktori ini digunakan Git sebagai database untuk menyimpan perubahan yang kita lakukan.

Bagaimana jika folder sudah ada sebelumnya? kita bisa gunakan perintah berikut ini:

    git init .

Tanda titik (**.**) artinya kita akan membuat *repository* pada direktori tempat kita berada saat ini.

Kemudian buatlah 2 atau 3 file code pada direktori yang telah dibuat.

### GIT Status
![alt text](assets/ba.PNG)

Terdapat 3 kondisi file pada GIT
1. *Modified*

    *Modified* adalah kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di *version control*. Contohnya pada gambar di atas, ada tiga file HTML yang dalam kondisi *modified*.
2. *Staged*

    *Staged* adalah kondisi dimana revisi sudah ditandai, tetapi belum disimpan di *version control*. Untuk mengubah kondisi file dari *modified* ke *staged* gunakan perintah **git add nama_file**. Contoh:

        git add index.html

3. *Commited*

    *Commited* adalah kondisi dimana revisi sudah disimpan di *version control*. Perintah untuk mengubah kondisi file dari *staged* ke *commited* adalah **git commit**.

**Membuat Revisi Pertama pada GIT**

### Git Add
Setelah cek status dengan **git status**, selanjutnya kita ubah status *untrackted file* dan *unmodified* menjadi *modified*. Gunakan **git add**

    git add index.html

atau

    git add .

Setelah itu, cobalah ketik perintah **git status** lagi. Kondisi filenya sekarang akan menjadi *staged*.

![alt text](assets/bd.PNG)

### Git *Commit*
Setelah itu, ubah kondisi file tersebut ke commited agar semua perubahan disimpan oleh Git.

    git commit -m "Commit pertama"

Setelah itu, coba cek dengan perintah **git status** lagi.

![alt text](assets/bf.PNG)

**Membuat Revisi Kedua pada GIT**

Ceritanya ada perubahan yang akan kita lakukan pada file index.html. Silahkan modifikasi isi file index.html.

Setelah itu ketik lagi perintah **git status**.

![alt text](assets/bg.PNG)

Terilhat bahwa file index.html sudah dimodifikasi. Kondisinya sekarang berada dalam *modified*. Lakukan *commit* lagi seperti revisi pertama.

    git add index.html
    git commit -m "ditambahkan isi"

Dengan demikian, revisi kedua sudah disimpan oleh Git. Argumen **-m** tersebut untuk menambahkan pesan setiap menyimpan revisi.

![alt text](assets/cb.PNG)

Sekarang Git sudah mencatat dua revisi yang sudah kita lakukan. Kita bisa ibaratkan revisi-revisi ini sebagai *checkpoint*. Apabila nanti ada kesalahan, kita bisa kembali ke *checkpoint* ini.

### Git Log
Dari dua revisi yang sudah dilakukan kita dapat melihat catatan log dari revisi-revisi tersebut dengan menggunakan perintah berikut ini:

    git log

Akan tampil

![alt text](assets/cd.PNG)

Untuk git log yang lebih pendek, bisa menggunakan perintah berikut ini:

    git log --oneline

Hasilnya:

![alt text](assets/cf.PNG)

Melihat log dapat dilakukan dari berbagai sisi:
1. Melihat log dari nomor version/commit

    ![alt text](assets/cg.PNG)

    Hasilnya

    ![alt text](assets/da.PNG)

2. Melihat log dari file tertentu

        git log index.html

    Hasilnya

    ![alt text](assets/dc.PNG)

3. Melihat log dari berdasarkan author

        git log --author-'David Winalda'

    Hasilnya

    ![alt text](assets/de.PNG)

Jika perubahan yang sedang dilakukan terjadi kesalahan dan kita ingin mengembalikan keadaan seperti sebelumnya maka itu bisa dilakukan.

### Membuat Revisi/Perubahan
Sebelum diubah:

![alt text](assets/dg.PNG)

Setelah diubah:

![alt text](assets/1.PNG)

### Cek Perubahan
    git diff

![alt text](assets/3.PNG)

### Membatalkan Perubahan-Belum *Stagged* dan Belum *Commited*
Lakukan dengan perintah berikut ini:

    git checkout index.html

Maka akan menjadi:

![alt text](assets/5.PNG)

### Membatalkan Perubahan-Sudah *Stagged* namun Belum *Commited*
![alt text](assets/6.PNG)

Jika case nya seperti diatas maka bisa dilakukan dengan perintah berikut ini: 

    git reset index.html

Maka akan menjadi:

![alt text](assets/8.PNG)

Kondisi file sudah pada kondisi *Modified*. Selanjutnya kita lakukan proses yg sama sebelumnya, menggunakan

    git checkout index.html

Maka akan menjadi:

![alt text](assets/12.PNG)

### Membatalkan Perubahan-Sudah *Commited*
![alt text](assets/13.PNG)

Kita bisa mengembalikan kondisi ke *commit* sebelumnya dari *commit* terakhir menggunakan nomor *commit*. Terdapat 2 jenis case antara lain:
1. Kita bisa mengembalikan *commit* hanya pada file tertentu.  
2. Kita bisa mengembalikan *commit* untuk semua file.

### Mengembalikan *Commit* pada File Tertentu
![alt text](assets/14.PNG)

    git reset index.html

### Mengembalikan *Commit* untuk Semua File
Kita hanya perlu menggunakan nomor *commit* saja, tidak perlu menambahkan spesifik file. Berikut penggunaan perintahnya:

![alt text](assets/16.PNG)

Jika ingin mengembalikan *commit* jauh ke bawah, misal kita ingin kembali pada 3 *commit* sebelumnya:

    git checkout HEAD~3 index.html

### Git Revert
GIT Revert akan membatalkan semua perubahan yang ada tanpa menghapus *commit* terakhir. Jika menggunakan GIT Reset, *commit* terakhir akan hilang.

    git revert -n <nomor commit>

![alt text](assets/24.PNG)

### Git Checkout
![alt text](assets/22.PNG)

### Git Reset
![alt text](assets/23.PNG)

## Git Branch
GIt *branch* merupakan fitur yang wajib digunakan jika berkolaborasi dengan developer atau dalam tim dan untuk menghindari conflict code yang dikembangkan. Kita tidak boleh berkolaborasi dalam *project* di satu *branch* yang sama!

![alt text](assets/25.PNG)

Misalnya Amira akan mengerjakan fitur A dan Widia mengerjakan fitur B. Masing-masing fitur harus dibuat *branch* masing-masing.
Tidak boleh mengganggu *branch* **master** yang sudah ter-*update*.

Untuk membuat *branch*, gunakan perintah berikut ini:

    git branch <nama branch>

Misalkan kita ingin membuat fitur *register*, jadi kita akan membuat *branch* baru.

    git branch fitur_register

![alt text](assets/33.PNG)

### Melihat *List Branch*
Gunakan perintah

    git branch

maka akan tampil:

![alt text](assets/35.PNG)

### Pindah ke *branch* tertentu
Untuk menuju ke dalam suatu *branch* tertentu, gunakan perintah seperti berikut ini:

    git checkout <nama branch>

### *Delete Branch*
Untuk menghapus sebuah *branch*, gunakan perintah seperti berikut ini:

    git branch -d <nama branch>

## Git Merge
Setelah membuat *branch* baru, lalu lakukan *commit*. Kemudian kita menyatukan pekerjaan ke **master** *file*/*branch* utama yaitu *branch* **master**. Untuk menyatukan *branch* cabang fitur yang telah kita kembangkan, gunakan perintah seperti berikut ini:
1. Kita harus checkout dahulu ke branch master

        git checkout master

2. Lalu lakukan merge

        git merge halaman_login

    
Langkah-langkahnya:

    # start a new feature
    git checkout -b fitur-baru master

    # edit some files
    git add <file>
    git commit -m "start"

    # edit some files
    git add <file>
    git commit -m "finish"

    # merge di branch fitur-baru
    git checkout master
    git merge fitur-baru
    git branch -d fitur baru





# JAVASCRIPT INTERMEDIET
## Array dan Multidimensional Array
Mengorganisasi data dan menyimpan data adalah *core concept* dari programming. Array adalah tipe data *list order* yang dapat menyimpan tipe data apapun di dalamnya. Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.

### Membuat Array
Array didefinisikan menggunakan *square brackets*

    // square bracket
    []

### Mengakses/Memanggil Array
Array pada javascript dihitung dari *index* data ke-0. Data pertama adalah *index* ke-0.

![alt text](assets/02.PNG)
    
    // menyimpan banyak type data (string, number, dan boolean)
    let data = ["burhan", 19, true];

    console.log(data);
    // output: ['burhan', 19, true]

Memanggil *index*:

    let list = [
        "belajar javascript",
        "belajar matematika",
        "membuat landing page"
    ];

    console.log(list[1]);
    // output: 'belajar matematika'

    console.log(list[0]);
    // output: 'belajar javascript'

### *Update* Array
Seperti tipe data dan variabel pada umumnya, kita dapat mengupdate data pada Array.

    let team = ["manager", "front end", "back end"];
    team[1] = "designer";

    console.log(team);
    //output: ['manager', 'designer', 'back end']

### *Const in* Array
1. Jika menggunakan let, kita dapat mengubah array  dengan array baru dan konten nilai yang ada di dalam array dengan nilai lain
2. Const tidak bisa melakukan *update* data. Namun pada array kita dapat melakukan *update* konten nilai di dalam array (*mutable*).
3. Yang tidak bisa adalah mengubah array dengan array yang baru jika menggunakan const

Contoh:

    const motor = ["suzuki", "yamaha", "honda"];
    motor = ["hurley"];

    console.log(motor);
    //output: error (tampilan console pada gambar di bawah)

![alt text](assets/1a.PNG)

    const motor = ["suzuki", "yamaha", "honda"];
    motor [1] = ["hurley"];

    console.log(motor);
    //output: ['suzuki', 'hurley', 'honda']

### Array *Properties*
Array memiliki 5 properti yang sering digunakan yaitu *constructor*, *length*, *index*, *input*, dan *prototype*. *Properties* adalah fitur yang sudah disediakan oleh Javascript untuk memudahkan developer.

**.length**

*Length* akan mengembalikan nilai dari jumlah panjang data suatu array.

    let team = ["manager", "front end", "back end"];

    console.log(team.length);
    //output: 3

**.prototype**

*Prototype* memungkinkan kita untuk menambahkan properti dan metode baru ke array. *Prototype* adalah properti yang tersedia dengan semua objek JavaScript.

**.constructor**

Properti konstruktor mengembalikan fungsi yang membuat prototipe Array.

### Array Method
Array memiliki method atau biasa disebut built-in methods. Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan. Kita tidak perlu membuat function lagi jika method yang kita butuhkan sudah tersedia.

**Contoh Array Built-in Methods**

1. **.push()** adalah method untuk menambahkan item  array pada urutan yang paling akhir.

        let list = [
            "belajar javascript",
            "belajar matematika",
            "membuat landing page"
        ];

        list.push("kelas online programming");

        console.log(list);
        // output: ['belajar javascript', 'belajar matematika', 'membuat landing page', 'kelas online programming']

2. **.pop()** adalah method yang menghapus item array index terakhir.

        let list = [
            "belajar javascript",
            "belajar matematika",
            "membuat landing page"
        ];

        list.pop();

        console.log(list);
        // output: ['belajar javascript', 'belajar matematika']

3. **.shift()** adalah method untuk menghapus item Array pada index pertama.

        let list = [
            "belajar javascript",
            "belajar matematika",
            "membuat landing page"
        ];

        list.shift();

        console.log(list);
        // output: ['belajar matematika', 'membuat landing page']

4. **.unshift()** adalah method untuk menambahkan item Array pada index pertama.

        let list = [
            "belajar javascript",
            "belajar matematika",
            "membuat landing page"
        ];

        list.unshift("kelas online programming");

        console.log(list);
        // output: ['kelas online programming', 'belajar javascript', 'belajar matematika', 'membuat landing page']

5. **.sort()** adalah method untuk mengurutkan secara Ascending atau Descending Alphanumeric.

        const number = [2, 1, 8, 6, 7];
        number.sort();

        console.log(number);
        //output : [1, 2, 6, 7, 8]

### *Looping* pada Array
Array memiliki *built in methods* untuk melakukan *looping* yaitu **.map()** dan **.forEach()**. Kita harus tahu kapan menggunakan **.map()** dan juga **.forEach()**.
1. **.forEach()** adalah method untuk melakukan looping pada setiap elemen array.

        const motor = ["suzuki", "yamaha", "honda"];
        motor.forEach(elemen => {
            console.log(elemen);
        });
        // output:
        // suzuki
        // yamaha
        // honda

2. **.map()** melakukan perulangan/looping dengan membuat array baru.

        let array = [1, 2, 3, 4, 5];
        
        let newArray = array.map(num => {
            return num * 2;
        });

        console.log(newArray);
        // output : [2, 4, 6, 8, 10]


Kita bisa lihat bahwa **.map()** dan **.forEach()** sama-sama melakukan looping dan mengembalikan nilai baru dari operasi yang dilakukan. Perbedaannya adalah **.forEach** tidak dapat membuat Array baru dari hasil operasi yang ada dalam *looping*.

    let array = [1, 2, 3, 4, 5];
    newArray = array.forEach((num, index) => {
        return array[index] = num * 2;
    });

    console.log(newArray);
    // output : undefined

Jadi, gunakan **.forEach()** jika hanya memerlukan *looping* untuk menampilkan saja atau menyimpan ke database. Gunakan **.map()** jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.

### *Multidimensional* Array
*Multidimensional* Array bisa dianalogikan dengan array *of* array (ada array di dalam array).

Code script.js:

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    console.log(inventory);

Tampilan pada console:

![alt text](assets/b1.PNG)

Bayangkan *multidimensional* ini seperti tabel. Baris pada tabel itu menunjukan jumlah array, kolom pada tabel itu menunjukan isi dari setiap array.

![alt text](assets/b2.PNG)

**Akses *index multidimensional* array**

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    console.log(inventory[0][0]);
    // output: Kaos

    console.log(inventory[2][0]);
    // output: Kemeja

Sama seperti array satu dimensi, *multidimensional* array juga dapat menggunakan *property* dan *Method built-in* Array.

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    inventory.push(["Sandal", 3]);

    console.log(inventory);

Tampilan pada console:

![alt text](assets/b4.PNG)

***Operation using map in multidimensional array***

Code script.js:

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    // menghitung produk yang terjual (misal jumlah stok awal = 50 untuk semua produk)
    inventory.map(dataInventory => {
        let terjual = 50 - dataInventory[1];
        dataInventory[2] = terjual;
    });

    console.table(inventory);

Tampilan pada console:

![alt text](assets/b6.PNG)

***Looping For Multidimensional Array***

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    inventory.forEach((baris) => {
        baris.forEach((column) => {
            console.log(column);
        });
    });

Tampilan di console:

![alt text](assets/b9.PNG)

Menggunakan *looping* **for**:

    let inventory = [
        ["Kaos", 5],
        ["Jaket", 3],
        ["Kemeja", 10],
        ["Jeans", 5],
        ["Sepatu", 3]
    ];

    // loop untuk array luar
    for (var i = 0, l1 = inventory.length; i < l1; i++) {
        // loop untuk array dalam
        for (var j = 0, l2 = inventory[i].length; j < l2; j++) {
            // akses each element dari array dalam
            document.write("<p>" + inventory[i][j] + "</p>");
        }
    }

Tampilan pada Web Page:

![alt text](assets/tam.PNG)

## *Object*
*Object* adalah sebuah tipe data pada variabel yang menyimpan nilai (properti) dan fungsi (*method*). Properti adalah data lengkap (ciri khas) dari sebuah *object* dan *method* adalah perilaku (*action*) dari sebuah *object*.

### Membuat Sebuah *Object*

Sama seperti tipe data sebelumnya, *object* dapat di-*assign* ke dalam sebuah variabel.

***Object person***

    let person = {};    //person is an empty object

***Object person* dengan properti**

    let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        city : "Sumbawa"
    };

Sama seperti array, di dalam object kita dapat menyimpan properti dengan tipe data apapun.

### Mengakses *Object* dan *Property Object*
**Mengakses seluruh *object***

    let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
    }

    console.log(person);

Tampilan di console:

![](assets/ob.PNG)

Gunakan *single quote* (' ') pada *key* jika menggunakan spasi seperti ‘**current address**’.

**Mengakses properti *object***

    let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
    }

    console.log(person.major);
    // output: Mathematic

Kita juga bisa menggunakan ***bracket notation*** saat memanggil properti dari sebuah *object*.

    let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
    }

    console.log(person["major"]);
    // output: Mathematic

    console.log(person["name"]);
    // output: Burhan

### *Update Object*

Kita dapat melakukan *update* pada variabel dengan tipe data *object*.

- *Do's*

    *Object* dapat meng-*update value* dari *key* yang sudah tersedia dan dapat menambahkan *key* dan *value* baru.

      let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
      }

      // update current key with the new value
      person.age = 27;

      // add new key and value
      person.address = "Alas Barat, Sumbawa"

      console.log(person);

    Tampilan di console:

    ![](assets/o.PNG)

- *Dont's*

    Jika menggunakan **const** pada variabel *object*, kita tidak bisa mengganti seluruh data *object* dengan *object* yang baru.

        const person = {
        name : "Burhanuddin",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
        }

        person = {
            fullname : "Burhanuddin"
        }

        console.log(person);

    Tampilan di console:

    ![](assets/er.PNG)

    Jadi, jika ingin melakukan *update* unuk seluruh data *object* gunakan **let** pada saat deklarasi variabel.

### *Delete Object Property*
    let person = {
        name : "Burhan",
        age : 25,
        major : "Mathematic",
        'current address' : "Labuapi, Lombok"
    }

    // Delete property object age dari data people
    delete person.age;

    console.log(person);

Tampilan di console:

![](assets/del.PNG)

### *Method*
*Method* adalah *value* yang kita masukkan pada properti berupa *function*.

Membuat *method* untuk *greeting* pada aplikasi *e*-*commerce* misalnya:

    const greeting = {
        welcome : function () {
            return "Halo, selamat datang";
        },
        afterTransaction : function () {
            return "Terima kasih sudah membeli";
        }
    };  // ada 2 method pada object greeting

    console.log(greeting.welcome());
    // output: Halo, selamat datang

    console.log(greeting.afterTransaction());
    // output: Terima kasih sudah membeli

### *Nested Object*
*Object* yang berasal dari turunan *object* lainnya (data *object* yang kompleks). Contohnya data article pada sebuah aplikasi berita:

    const news = {
        title : "AMMAN Coding Bootcamp",
        description : "Beasiswa pelatihan coding untuk pemuda Sumbawa",
        author : {
            person: {
                name : "Burhanuddin",
                age : 25,
                city : "Sumbawa"
            }
        }
    };

    console.log("News:", news.title);
    console.log("Article publish by", news.author.person.name);

Tampilan di console:

![](assets/art.PNG)

### *Pass by reference*
*Pass by reference* artinya kita bisa mengubah data yang ada pada *object* melalui sebuah *function* dan memasukkan *object* sebagai parameter *function*.

Kita mengubah data object number dengan sebuah **function changeData**:

    let number = {
        oriA : 3,
        oriB : 4
    };

    function changeData (obj) {
        obj.oriA = 6;
        obj.oriB = 8;
    };

    changeData(number)

    console.log(number.oriA);
    // output: 6

    console.log(number.oriB);
    // output: 8

### *Looping Object*
Jika kita ingin menampilkan seluruh *object* properti. Kita bisa menggunakan *looping*. Jadi tidak perlu mengakses secara manual memanggil setiap propertinya.

    for(let key in object) {
        // ...
    };

Contohnya:

    const news = {
        title : "AMMAN Coding Bootcamp",
        description : "Beasiswa pelatihan coding untuk pemuda Sumbawa",
        author : {
            person: {
                name : "Burhanuddin",
                age : 25,
                city : "Sumbawa"
            }
        }
    };

    for(let data in news) {
        console.log(news[data]);
    };

Tampilan di console:

![](assets/aut.PNG)

    const news = {
        title : "AMMAN Coding Bootcamp",
        description : "Beasiswa pelatihan coding untuk pemuda Sumbawa",
        author : {
            person: {
                name : "Burhanuddin",
                age : 25,
                city : "Sumbawa"
            }
        }
    };

    for(let author in news.author.person) {
        console.log(news.author.person[author]);
    }

Tampilan di console:

![](assets/bu.PNG)

### Array *of Object*
    let student = [
        {
            name : "burhan",
            age : 25,
            city : "Sumbawa"
        },

        {
            name : "abiem",
            age : 24,
            city : "Sumbawa"
        },

        {
            name : "anto",
            age : 25,
            city : "Sumbawa"
        }
    ];

    // gunakan forEach jika object berada di dalam array
    student.forEach((listStudent) => {
        console.log(listStudent);
    });

Tampilan di console:

![](assets/na.PNG)