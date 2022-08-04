# GIT DAN GITHUB LANJUTAN
## Git *Introduction*
GIT adalah Tools untuk programmer yang berperan sebagai Version Control System.

**Apa itu *Version Control System***

Tugasnya adalah mencatat setiap perubahan pada File (termasuk code yang kita buat) pada suatu proyek baik dikerjakan secara individu maupun tim.

Git adalah aplikasi yang dapat melacak setiap perubahan yang terjadi pada suatu folder atau file. Git biasanya digunakan oleh para programmer sebagai tempat penyimpanan file pemrograman mereka, karena lebih efektif. File -file yg disimpan menggunakan git akan terlacak seluruh perubahannya, termasuk siapa yang mengubah.

**WHY should use GIT and Github?**

Dengan menggunakan GIT dan Github, kamu akan bisa bekerja dalam sebuat tim. Tujuan besarnya adalah kamu bisa berkolaborasi mengerjakan proyek yang sama tanpa harus repot copy paste folder aplikasi yang terupdate. Kamu juga tidak perlu menunggu rekan dalam satu tim kamu menyelesaikan suatu program dahulu untuk berkolaborasi. Kamu bisa membuat file didalam projek yang sama atau membuat code di file yang sama dan menyatukannya saat sudah selesai.

## Instalasi Git
Download dan jalankan hasil download GIT kamu seperti instal aplikasi pada umumnya.

**Cek apakah instalasi berhasil**

![gambar 1](aa.PNG)

**Setup Awal**

Ada beberapa konfigurasi yang harus dupersiapakan sebelum mulai menggunakan Git, seperti name dan email.

Silahkan lakukan konfigurasi dengan perintah berikut ini.

![alt text](ae.PNG)

**Cek apakah setup berhasil**

Kemudian periksa konfigurasinya dengan perintah:

![alt text](af.PNG)

Apabila berhasil tampil seperti gambar berikut ini, berarti konfigurasi berhasil.

![alt text](ab.PNG)

Perlu untuk diingat bahwa email yang disetup harus sama dengan yang digunakan pada GITHUB.

## *Repository* GIT
*Repository* dalam bahasa indonesia artinya gudang. *Repository* merupakan istilah yang digunakan untuk direktori proyek yang menggunakan Git. Jika kita memiliki sebuah direktori dengan nama proyek-01 dan di dalamnya sudah menggunakan git, maka kita sudah punya repositori bernama proyek-01.
Repository adalah direktori proyek yang kita buat.

        1 Repo =  1 Proyek = 1 Direktori

**Membuat *Repository***

Pembuatan *Repository* dapat dilakukan dengan perintah

![alt text](ac.PNG)

Perintah **git init** akan membuat sebuah direktori bernama **.git** di dalam proyek kita. Direktori ini digunakan Git sebagai database untuk menyimpan perubahan yang kita lakukan.

Bagaimana jika folder sudah ada sebelumnya? kita bisa gunakan perintah berikut ini:

![alt text](ad.PNG)

Tanda titik (**.**) artinya kita akan membuat *repository* pada direktori tempat kita berada saat ini.

Buatlah 2 atau 3 file code pada direktori yang telah dibuat.

### GIT Status
![alt text](ba.PNG)

Terdapat 3 kondisi file pada GIT
1. *Modified*

    *Modified* adalah kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di *version control*. Contohnya pada gambar di atas, ada tiga file HTML yang dalam kondisi *modified*.
2. *Staged*

    *Staged* adalah kondisi dimana revisi sudah ditandai, tetapi belum disimpan di *version control*. Untuk mengubah kondisi file dari *modified* ke *staged* gunakan perintah **git add nama_file**. Contoh:

    ![alt text](bb.PNG)

3. *Commited*

    *Commited* adalah kondisi dimana revisi sudah disimpan di *version control*. Perintah untuk mengubah kondisi file dari *staged* ke *commited* adalah **git commit**.

**Membuat Revisi Pertama pada GIT**

### Git Add
Setelah cek status dengan **git status**, selanjutnya kita ubah status *untrackted file* dan *unmodified* menjadi *modified*. Gunakan **git add**

![alt text](bb.PNG)

atau

![alt text](bc.PNG)

Setelah itu, cobalah ketik perintah **git status** lagi. Kondisi filenya sekarang akan menjadi *staged*.

![alt text](bd.PNG)

### Git *Commit*
Setelah itu, ubah kondisi file tersebut ke commited agar semua perubahan disimpan oleh Git.

![alt text](be.PNG)

Setelah itu, coba cek dengan perintah **git status** lagi.

![alt text](bf.PNG)

**Membuat Revisi Kedua pada GIT**

Ceritanya ada perubahan yang akan kita lakukan pada file index.html. Silahkan modifikasi isi file index.html.

Setelah itu ketik lagi perintah **git status**.

![alt text](bg.PNG)

Terilhat bahwa file index.html sudah dimodifikasi. Kondisinya sekarang berada dalam *modified*. Lakukan *commit* lagi seperti revisi pertama.

![alt text](ca.PNG)

Dengan demikian, revisi kedua sudah disipan oleh Git. Argumen **-m** tersebut untuk menambahkan pesan setiap menyimpan revisi.

![alt text](cb.PNG)

Sekarang Git sudah mencatat dua revisi yang sudah kita lakukan. Kita bisa ibaratkan revisi-revisi ini sebagai *checkpoint*. Apabila nanti ada kesalahan, kita bisa kembali ke *checkpoint* ini.

### Git Log
Dari dua revisi yang sudah dilakukan kita dapat melihat catatan log dari revisi-revisi tersebut dengan menggunakan perintah berikut ini:

![alt text](cc.PNG)

Akan tampil

![alt text](cd.PNG)

Untuk git log yang lebih pendek, bisa menggunakan perintah berikut ini:

![alt text](ce.PNG)

Hasilnya:

![alt text](cf.PNG)

Melihat log dapat dilakukan dari berbagai sisi:
1. Melihat log dari nomor version/commit

    ![alt text](cg.PNG)

    Hasilnya

    ![alt text](da.PNG)

2. Melihat log dari file tertentu

    ![alt text](db.PNG)

    Hasilnya

    ![alt text](dc.PNG)

3. Melihat log dari berdasarkan author

    ![alt text](dd.PNG)

    Hasilnya

    ![alt text](de.PNG)

Jika perubahan yang sedang dilakukan terjadi kesalahan dan kita ingin mengembalikan keadaan seperti sebelumnya maka itu bisa dilakukan.

### Membuat Revisi/Perubahan
Sebelum diubah:

![alt text](dg.PNG)

Setelah diubah:

![alt text](1.PNG)

### Cek Perubahan
![alt text](2.PNG)

![alt text](3.PNG)

### Membatalkan Perubahan-Belum *Stagged* dan Belum *Commited*
Lakukan dengan perintah berikut ini:

![alt text](4.PNG)

Maka akan menjadi:

![alt text](5.PNG)

### Membatalkan Perubahan-Sudah *Stagged* namun Belum *Commited*
![alt text](6.PNG)

Jika case nya seperti diatas maka bisa dilakukan dengan perintah berikut ini: 

![alt text](7.PNG)

Maka akan menjadi:

![alt text](8.PNG)

Kondisi file sudah pada kondisi *Modified*. Selanjutnya kita lakukan proses yg sama sebelumnya, menggunakan **git checkout**.

![alt text](11.PNG)

Maka akan menjadi:

![alt text](12.PNG)

### Membatalkan Perubahan-Sudah *Commited*
![alt text](13.PNG)

Kita bisa mengembalikan kondisi ke *commit* sebelumnya dari *commit* terakhir menggunakan nomor *commit*. Terdapat 2 jenis case antara lain:
1. Kita bisa mengembalikan *commit* hanya pada file tertentu.  
2. Kita bisa mengembalikan *commit* untuk semua file.

### Mengembalikan *Commit* pada File Tertentu
![alt text](14.PNG)

![alt text](15.PNG)

### Mengembalikan *Commit* untuk Semua File
Kita hanya perlu menggunakan nomor *commit* saja, tidak perlu menambahkan spesifik file. Berikut penggunaan perintahnya:

![alt text](16.PNG)

Jika ingin mengembalikan *commit* jauh ke bawah, misal kita ingin kembali pada 3 *commit* sebelumnya:

![alt text](17.PNG)

### Git Revert
GIT Revert akan membatalkan semua perubahan yang ada tanpa menghapus *commit* terakhir. Jika menggunakan GIT Reset, *commit* terakhir akan hilang.

![alt text](21.PNG)

![alt text](24.PNG)

### Git Checkout
![alt text](22.PNG)

### Git Reset
![alt text](23.PNG)

## Git Branch
GIt *branch* merupakan fitur yang wajib digunakan jika berkolaborasi dengan developer atau dalam tim dan untuk menghindari conflict code yang dikembangkan. Kita tidak boleh berkolaborasi dalam *project* di satu *branch* yang sama!

![alt text](25.PNG)

Misalnya Amira akan mengerjakan fitur A dan Widia mengerjakan fitur B. Masing-masing fitur harus dibuat *branch* masing-masing.
Tidak boleh mengganggu *branch* **master** yang sudah ter-*update*.

Untuk membuat *branch*, gunakan perintah berikut ini:

![alt text](31.PNG)

Misalkan kita ingin membuat fitur *register*, jadi kita akan membuat *branch* baru.

![alt text](32.PNG)

![alt text](33.PNG)

### Melihat *List Branch*
![alt text](34.PNG)

![alt text](35.PNG)

### Pindah ke *branch* tertentu
Untuk menuju ke dalam suatu *branch* tertentu, gunakan perintah seperti berikut ini:

### *Delete Branch*
Untuk menghapus sebuah *branch*, gunakan perintah seperti berikut ini:

![alt text](41.PNG)

![alt text](42.PNG)

## Git Merge
Setelah membuat *branch* baru, lalu lakukan *commit*. Kemudian kita menyatukan pekerjaan ke **master** *file*/*branch* utama yaitu *branch* **master**. Untuk menyatukan *branch* cabang fitur yang telah kita kembangkan, gunakan perintah seperti berikut ini:
1. Kita harus checkout dahulu ke branch master

    ![alt text](43.PNG)

2. Lalu lakukan merge

    ![alt text](44.PNG)

    ![alt text](46.PNG)

# JAVASCRIPT INTERMEDIET
## Array dan Multidimensional Array
Mengorganisasi data dan menyimpan data adalah *core concept* dari programming. Array adalah tipe data list order yang dapat menyimpan tipe data apapun di dalamnya. Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.

Contoh array: 

![alt text](18.PNG)

![alt text](19.PNG)

![alt text](00.PNG)

### Membuat Array
Array didefinisikan menggunakan square brackets

![alt text](01.PNG)

### Mengakses/Memanggil Array
Array pada javascript dihitung dari index data ke-0. Data pertama adalah index ke-0.

![alt text](02.PNG)

![alt text](03.PNG)

![alt text](04.PNG)

![alt text](05.PNG)

![alt text](06.PNG)

![alt text](07.PNG)

### Update Array
Seperti tipe data dan variabel pada umumnya, kita dapat mengupdate data pada Array.

![alt text](08.PNG)

### Const in Array
1. Jika menggunakan let, kita dapat mengubah array  dengan array baru dan konten nilai yang ada di dalam array dengan nilai lain
2. Const tidak bisa melakukan update data. Namun pada Array kita dapat melakukan update konten nilai di dalam array (mutable).
3. Yang tidak bisa adalah mengubah array dengan array yang baru jika menggunakan const

![alt text](09.PNG)

![alt text](1a.PNG)

![alt text](1b.PNG)

### Array *Properties*
Array memiliki 5 properti yang sering digunakan yaitu *constructor*, *length*, *index*, *input*, dan *prototype*. *Properties* adalah fitur yang sudah disediakan oleh Javascript untuk memudahkan developer.

**.length**

*Length* akan mengembalikan nilai dari jumlah panjang data suatu array.

![alt text](1c.PNG)

**.prototype**

*Prototype* memungkinkan kita untuk menambahkan properti dan metode baru ke array. *Prototype* adalah properti yang tersedia dengan semua objek JavaScript.

**.constructor**

Properti konstruktor mengembalikan fungsi yang membuat prototipe Array.

### Array Method
Array memiliki method atau biasa disebut built-in methods. Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan. Kita tidak perlu membuat function lagi jika method yang kita butuhkan sudah tersedia.

**Contoh Array Built-in Methods**

1. **.push()** adalah method untuk menambahkan item  array pada urutan yang paling akhir.

    ![alt text](a1.PNG)

2. **.pop()** adalah method yang menghapus item array index terakhir.

    ![alt text](a2.PNG)

3. **.shift()** adalah method untuk menghapus item Array pada index pertama.

    ![alt text](a3.PNG)

4. **.unshift()** adalah method untuk menambahkan item Array pada index pertama.

    ![alt text](a4.PNG)

5. **.sort()** adalah method untuk mengurutkan secara Ascending atau Descending Alphanumeric.

    ![alt text](a5.PNG)

### *Looping* pada Array
Array memiliki *built in methods* untuk melakukan *looping* yaitu **.map()** dan **.forEach()**. Kita harus tahu kapan menggunakan **.map()** dan juga **.forEach()**.
1. **.forEach()** adalah method untuk melakukan looping pada setiap elemen array.

    ![alt text](a6.PNG)

2. **.map()** melakukan perulangan/looping dengan membuat array baru.

    ![alt text](a7.PNG)

Kita bisa lihat bahwa **.map()** dan **forEach()** sama-sama melakukan looping dan mengembalikan nilai baru dari operasi yang dilakukan. Perbedaannya adalah **.forEach** tidak dapat membuat Array baru dari hasil operasi yang ada dalam *looping*.

![alt text](a8.PNG)

Jadi, gunakan **.forEach()** jika hanya memerlukan *looping* untuk menampilkan saja atau menyimpan ke database. Gunakan **.map()** jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.

### *Multidimensional* Array
*Multidimensional* Array bisa dianalogikan dengan array *of* array (ada array di dalam array).

Code script.js:

![alt text](a9.PNG)

Tampilan web page console.log:

![alt text](b1.PNG)

Bayangkan *multidimensional* ini seperti tabel. Baris pada tabel itu menunjukan jumlah array, kolom pada tabel itu menunjukan isi dari setiap array.

![alt text](b2.PNG)

**Akses index multidimensional array**

![alt text](b3.PNG)

Sama seperti array satu dimensi, *multidimensional* array juga dapat menggunakan *property* dan *Method built-in* Array.

![alt text](b4.PNG)

**Operation using map in multidimensional array**

Code script.js:

![alt text](b5.PNG)

Tampilan pada console:

![alt text](b6.PNG)

**Looping For Multidimensional Array**

![alt text](b7.PNG)

Menggunakan *looping* **for**:

![alt text](b8.PNG)

Tampilan Pada Web Page:

![alt text](b9.PNG)

## Object
