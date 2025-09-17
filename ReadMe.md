Abigail Namaratonggi P - 2406495773 - PBP C

Tautan menuju aplikasi -> https://abigail-namaratonggi-goaldenshop.pbp.cs.ui.ac.id/

<details>
<summary>Tugas Individu 2</summary> 

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
![alt text](<Bagan Alur Django-1.png>)

Link -> https://drive.google.com/file/d/1Q6WsjmPzmc3s093xb-9kpwdvAplgZJU1/view?usp=sharing

Pada bagan, alur Django dimulai ketika user mengirimkan HTTP Request ke server, lalu request tersebut diterima oleh `urls.py` untuk dicocokkan dengan alamat URL yang ada. Jika cocok, request diteruskan ke `views.py`. Jika dibutuhkan untuk menulis atau membaca database maka `views.py` akan berinteraksi dengan `models.py`. Data yang telah didapat kemudian dikirimkan ke template (.html) agar tampilannya sesuai. Hasil akhirnya adalah HTTP Response dalam bentuk HTML yang akan dikembalikan ke user.

### 3. Jelaskan peran settings.py dalam proyek Django!
`settings.py` berfungsi untuk mengatur project web. `settings.py` berisikan konfigurasi proyek seperti pengaturan keamanan (`SECRET_KEY`, `DEBUG`, dan `ALLOWED_HOSTS`), konfigurasi aplikasi dan middleware (`INSTALLED_APPS` dan `MIDDLEWARE`), pengaturan tampilan (`TEMPLATES`), pengelolaan database (`DATABASES`), dan `STATIC_URL`.

### 4. Bagaimana cara kerja migrasi database di Django?
Migrasi pada Django adalah cara untuk menerapkan perubahan model ke database. Perintah `python manage.py makemigrations` digunakan untuk membuat file migrasi yang isinya perubahan model yang belum diterapkan ke database. Setelah itu, `python manage.py migrate` akan menerapkan perubahan model tersebut ke database.

### 5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
Django dijadikan permulaan pembelajaran pengembangan perangkat lunak karena membuat proses pengembangan aplikasi web lebih aman, cepat, dan mudah dimaintain. Django juga memiliki fitur bawaan untuk autentikasi pengguna, pengelolaan basis data, dan manajemen cookie sehingga developer tidak perlu menulis kode dari nol.

### 6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
Asdos tutorial 1 sangat membantu saya dalam mengikuti dan mengatasi kesulitan saat tutorial.
</details>

<details>
<summary>Tugas Individu 3</summary>

## Jawaban Pertanyaan
### 1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?
Data delivery digunakan sebagai penghubung antara server dan pengguna. Dengan data delivery, informasi data dapat dikirim dalam format seperti JSON atau XML sehingga dapat diakses lintas aplikasi. Hal ini memungkinkan pengguna mendapatkan informasi data secara real time dan membuat platform menjadi mudah dikembangkan karena data yang sama dapat dipakai berulang kali tanpa perlu diolah ulang.

### 2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
Menurut saya, JSON lebih baik dibandingkan XML untuk proses transfer data, karena lebih ringan dan cepat diproses. Walaupun XML masih sering diggunakan untuk menyimpan data dengan banyak variable dan struktur yang kompleks. JSON lebih popular dibandingkan XML karena memiliki syntax yang lebih ringkas sehingga lebih mudah dipahami oleh pengguna. JSON juga mudah dipakai di banyak bahasa pemrograman, terutama JavaScript.

### 3. Jelaskan fungsi dari method `is_valid()` pada form Django dan mengapa kita membutuhkan method tersebut? 
Method `is_valid()` berfungsi untuk memeriksa apakah data yang dimasukkan pengguna sudah sesuai dengan field dan aturan validasi yang ada di form. Jika semua valid, maka akan mengembalikan `True`, jika tidak, maka akan mengembalikan `False`. `is_valid()` dibutuhkan agar data yang dimasukkan tetap konsisten dan tidak menimbulkan error saat diproses ke database.

### 4. Mengapa kita membutuhkan `csrf_token` saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan `csrf_token` pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
`csrf_token` dipakai sebagai perlindungan dari pemalsuan permintaan lintas situs (CSRF).  `csrf_token` ditambahkan ke setiap form untuk memaastikan request berasal dari pengguna. Jika tidak menambahkan `csrf_token` form jadi rentan terhadap CSRF. Hal ini dimanfaatkan penyerang untuk menyamar sebagai user. Misalnya, penyerang membuat halaman berbahaya yang mengirim request ke server atas nama user, seperti melakukan transaksi tanpa sepengatahuan pemilik akun.

### 5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
* **Menambahkan 4 fungsi views baru untuk melihat objek yang sudah ditambahkan dalam format XML, JSON, XML by ID, dan JSON by ID.**
Menambahkan import `HttpResponse` dan `serializers` dan 4 fungsi views baru, yaitu `show_xml`, `show_json`, `show_xml_by_id`, dan `show_json_by_id`. Pada `show_xml_by_id` dan `show_json_by_id` saya menambahkan parameter `id` agar hanya data product tertentu yang ditampilkan. 
```python
def show_xml(request):
    products_list = Product.objects.all()
    xml_data = serializers.serialize("xml", products_list)
    return HttpResponse(xml_data, content_type="application/xml")

def show_json(request):
    products_list = Product.objects.all()
    json_data = serializers.serialize("json", products_list)
    return HttpResponse(json_data, content_type="application/json")

def show_xml_by_id(request, products_id):
    try:
        products_item = Product.objects.filter(pk=products_id)
        xml_data = serializers.serialize("xml", products_item)
        return HttpResponse(xml_data, content_type="application/xml")
    except Product.DoesNotExist:
        return HttpResponse(status=404)
    
def show_json_by_id(request, products_id):
    try:
        products_item = Product.objects.filter(pk=products_id)
        json_data = serializers.serialize("json", products_item)
        return HttpResponse(json_data, content_type="application/json")
    except Product.DoesNotExist:
        return HttpResponse(status=404)
```

* **Membuat routing URL untuk masing-masing `views` yang telah ditambahkan**
  - Mengimport fungsi `show_xml`, `show_json`, `show_xml_by_id`, dan `show_json_by_id` ke dalam `urls.py`.
  - Menambahkan path url ke dalam `urlpatterns`.
```python
...
path('xml/', show_xml, name='show_xml'),
path('json/', show_json, name='show_json'),
path('xml/<str:products_id>/', show_xml_by_id, name='show_xml_by_id'),
path('json/<str:products_id>/', show_json_by_id, name='show_json_by_id'),
...
 ```

* **Membuat halaman yang menampilkan data objek model yang memiliki tombol "Add" yang akan redirect ke halaman form, serta tombol "Detail" pada setiap data objek model yang akan menampilkan halaman detail objek**
  -  Menampilkan data produk dari `products_list` di `main.html` menggunakan tag `{% for product in products_list %}`. Jika kosong, akan menampilkan teks No products available yet.
  - Menambahkan tombol Add di `main.html` yang akan redirect ke halaman form penambahan product.
    ```html
    <a href="{% url 'main:add_products' %}">
      <button>+ Add </button>
    </a>
    ```
  - Menambahkan tombol Detail pada setiap data product yang ditampilkan untuk menampilkan halaman detail product.
    ```html
    <p><a href="{% url 'main:show_products' product.id %}">
      <button>Detail</button>
    </a></p>
    ```

* **Membuat halaman `form` untuk menambahkan objek model pada app sebelumnya**
  - Membuat `forms.py` pada `main` dan tambahkan `ProductForm`.
  - Menambahkan fungsi `add_products` pada `views.py`.
    ```python
    def add_products(request):
        form = ProductForm(request.POST or None)

        if form.is_valid() and request.method == "POST":
            form.save()
            return redirect('main:show_main')

        context = {'form': form}
        return render(request, "add_products.html", context)
    ```
  - Membuat `add_products.html` pada `main/templates` yang menampilkan form untuk menambahkan produk baru. 
  - Menambahkan `path('add-products/', add_products, name='add_products')` ke dalam `urlpatterns`.

* **Membuat halaman yang menampilkan detail dari setiap data objek model**
  - Menambahkan fungsi `show_products` pada `views.py`.
    ```python
    def show_products(request, id):
        product = get_object_or_404(Product, pk=id)
        context = {
            'product': product
        }

        return render(request, "products_detail.html", context)
    ```
  - Membuat `products_detail.html` pada `main/templates` yang menampilkan detail lengkap produk. 
  - Menambahkan `path('product/<str:id>/', show_products, name='show_products'),` ke dalam `urlpatterns`.


### 6. Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian kerjakan?
Asdos tutorial 2 sangat membantu saya dalam mengikuti dan mengatasi kesulitan saat tutorial.

## Hasil Akses URL pada Postman
* **`http://127.0.0.1:8000/xml/`**
![alt text](image-1.png)

* **`http://127.0.0.1:8000/json/`**
![alt text](image.png)

* **`http://127.0.0.1:8000/xml/[product_id]`**
![alt text](image-2.png)
![alt text](image-3.png)

* **`http://127.0.0.1:8000/json/[product_id]`**
![alt text](image-4.png)
![alt text](image-5.png)
</details>