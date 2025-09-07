# Tugas Individu 2 - PBP 
Abigail Namaratonggi P - 2406495773 - PBP C
Tautan menuju aplikasi  -> https://abigail-namaratonggi-goaldenshop.pbp.cs.ui.ac.id/

## Jawaban Pertanyaan
### 1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial)
* **Membuat sebuah proyek Django baru**
    - Membuat direktori baru dengan nama `goalden-shop` dan membuat virtual environment.
    - Menyiapkan dependencies dan membuat proyek Django bernama `goalden_shop`. 
    - Membuat konfigurasi environment variables dan proyek, di mana saya menambahkan konfigurasi `.env` dan `.env.prod`. Di dalam `.env.prod`, saya membuat konfigurasi production sesuai dengan kredensial database yang diperoleh dan dengan schema `tugas_individu`. 
    - Mengunggahnya ke dalam repository GitHub baru dengan nama  `goalden-shop` dan membuat akun serta deployment melalui PWS.

* **Membuat aplikasi dengan nama main pada proyek**
    - Mengaktifkan virtual environment dan membuat aplikasi baru dengan nama `main`. 
    - Mendaftarkan aplikasi `main` ke dalam proyek dengan menambahkannya ke dalam `INSTALLED_APPS`.

* **Melakukan routing pada proyek**
   - Membuka `urls.py` yang ada di dalam direktori `goalden-shop`.
   - Impor fungsi `include` dari `django.urls` dan menambahkan rute URL di list `urlpatterns`untuk mengarahkan ke tampilan `main`.

* **Membuat model pada aplikasi main dengan nama Product dan memiliki atribut wajib**
    - Mengisi `models.py` dengan atribut `name`, `price`, `description`, `thumbnail`, `category`, `is_featured`, `stock`, `rating`, `size`, `brand`, `location`.
    - Melakukan migrasi model dengan `python manage.py makemigrations` dan `python manage.py migrate`.

* **Membuat sebuah fungsi pada views.py untuk dikembalikan ke dalam sebuah template HTML**
    - Mengimpor fungsi render dari modul `django.shortcuts` pada `views.py` yang berada di dalam `main`.
    - Menambahkan fungsi `show_main` yang berisikan `context`: `nama` dan `kelas` dan merender tampilan `main.html` dengan `return render(request, "main.html", context)`.
    - Mengubah `main.html` agar menampilkan nilai dari variable yang ada di `context`.

* **Membuat sebuah routing pada urls.py aplikasi main**
    - Membuat `urls.py` di dalam direktori `main`.
    - Mengisi `urls.py` dengan konfigurasi routing untuk aplikasi main.

* **Melakukan deployment ke PWS**
    - Akses PWS dan login.
    - Membuat proyek baru dengan nama `goaldenshop`.
    - Mengubah environment variables dengan `.env.prod` yang sudah dibuat.
    - Menambahkan `abigail-namaratonggi-goaldenshop.pbp.cs.ui.ac.id"` ke dalam list `ALLOWED_HOSTS`.
    - Simpan perubahan ke repository GitHub.
    - Jalankan perintah Project Command pada halaman PWS.


### 2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.


### 3. Jelaskan peran settings.py dalam proyek Django!
    `settings.py` berfungsi untuk mengatur project web. `settings.py` berisikan konfigurasi proyek seperti pengaturan keamanan (`SECRET_KEY`, `DEBUG`, dan `ALLOWED_HOSTS`), konfigurasi aplikasi dan middleware (`INSTALLED_APPS` dan `MIDDLEWARE`), pengaturan tampilan (`TEMPLATES`), pengelolaan database (`DATABASES`), dan `STATIC_URL`.

### 4. Bagaimana cara kerja migrasi database di Django?


### 5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?


### 6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
