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

## GIT STATUS, GIT ADD, GIT COMMIT
Buat 2-3 file code pada direktori yang telah dibuat.

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

### GIT Add
Setelah cek status dengan **git status**, selanjutnya kita ubah status *untrackted file* dan *unmodified* menjadi *modified*. Gunakan **git add**

![alt text](bb.PNG)

atau

![alt text](bc.PNG)

Setelah itu, cobalah ketik perintah **git status** lagi. Kondisi filenya sekarang akan menjadi *staged*.

![alt text](bd.PNG)

### GIT *Commit*
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

### GIT Log
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