import { Fragment, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './AuditPage.css'

/* ============================================================
   DOKUMEN AUDIT RR DEVS — satu entry per prospek.
   Urutan temuan: judul → bukti (gambar+caption) → obs → dampak.
   Print default: SATU HALAMAN PANJANG (tanpa patahan).
   Print alternatif: A4 berhalaman (tombol terpisah, class print-a4).
   ============================================================ */
const TGL = '16 September 2026'

const AUDITS = {
  parveen: {
    name: "Parveen Barber's",
    coverSub: 'Disusun khusus untuk manajemen Parveen Barber\'s berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Penawaran kemitraan sudah disampaikan dengan jelas sejak halaman utama.',
      'Ada dua hal pada alur kemitraan yang dapat memperkuat kepercayaan calon mitra.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Harga kemitraan tampil dengan dua angka yang berbeda',
        evidence: {
          caption: `Bukti 1: bagian pembuka menyebutkan "IDR 39jt". 
          Bukti 2: bagian paket mencantumkan Rp79.999.000 dan Rp109.999.000 — tanpa penjelasan selisih kedua angka.`,
          shots: [
            { src: '/audit/parveen/hero-39jt.png', alt: 'Section pembuka Parveen dengan judul IDR 39jt', label: 'halaman pembuka', rings: [{ x: '50%', y: '36%', w: '46%', h: '23%', n: 1 }] },
            { src: '/audit/parveen/paket.png', alt: 'Kartu paket kemitraan Parveen', label: 'bagian paket', rings: [{ x: '13%', y: '61%', w: '32%', h: '10%', n: 2 }, { x: '57%', y: '61%', w: '32%', h: '10%', n: 3 }] },
          ],
        },
        obs: 'Halaman pembuka menyebutkan "IDR 39jt untuk menjadi owner barbershop", sementara bagian paket mencantumkan Rp79.999.000 dan Rp109.999.000. Kedua angka tampil pada halaman yang sama tanpa penjelasan perbedaan.',
        impact: 'selisih angka yang besar tanpa penjelasan instan memicu keraguan calon investor mengenai transparansi biaya, sehingga mereka berpotensi mengurungkan niat untuk mengajukan kemitraan.',
      },
      {
        title: 'Pengajuan kemitraan masih mengandalkan percakapan manual',
        obs: 'Tombol utama "CHAT KAMI" mengarahkan calon mitra ke percakapan tanpa formulir pengajuan terstruktur maupun halaman ringkasan per outlet.',
        impact: 'alur kerja sama terasa kurang terstruktur bagi investor serius, sekaligus membebani tim internal Anda untuk menyaring data awal secara berulang-ulang melalui chat manual.',
      },
    ],
    solution: {
      principle: 'Transparansi harga Anda sudah baik — yang dibutuhkan hanya satu baris penjelasan dan jalur pengajuan yang rapi.',
      flowNow: ['Calon mitra membaca harga', 'Bingung dua angka', 'Chat tanpa format'],
      flowNext: ['Calon mitra membaca harga + penjelasan', 'Mengisi formulir terstruktur', 'Tim menerima data lengkap'],
      build: [
        'Halaman "Paket Kemitraan" yang menjelaskan isi setiap harga.',
        'Formulir pengajuan terstruktur (data diri, lokasi, rencana modal) yang masuk rapi ke tim Anda.',
        'Galeri ringkas per outlet agar jaringan yang berjalan dapat diverifikasi calon mitra.',
      ],
      keep: 'Tampilan harga dan informasi layanan yang sudah ada tetap dipertahankan.',
    },
  },
  cukr: {
    name: 'Cukr Barbershop',
    coverSub: 'Disusun khusus untuk manajemen Cukr Barbershop berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Halaman legalitas dan anti-penipuan Anda termasuk yang terbaik yang kami temui.',
      'Ada dua hal yang menghalangi kekuatan itu terlihat penuh.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Peta cabang pada situs belum tampil sempurna',
        evidence: { 
           caption: `Bukti 1: Area peta gagal dimuat (muncul pesan "API KEY REQUIRED").
Bukti 2: Tautan domain "cukr.co.id" di akun manajemen.
Bukti 3: Tautan "linktr.ee" pada akun Instagram resmi bisnis.`,
           shots: [
            { 
               src: '/audit/cukr/peta.png', 
               alt: 'Halaman cabang cukr.id dengan peta ber-watermark', 
               label: 'area peta gagal dimuat', 
               rings: [{ x: '2%', y: '53%', w: '57%', h: '43%', n: 1 }] 
            },
            { 
               src: '/audit/cukr/bio-rara.png', 
               alt: 'Alamat cukr.co.id pada bio salah satu akun manajemen', 
               label: ' Tautan profil: cukr.co.id', 
               rings: [{ x: '18%', y: '71%', w: '15%', h: '15%', n: 2 }] 
            },
            { 
               src: '/audit/cukr/bio-cukr_id.png', 
               alt: 'Tautan linktr.ee pada akun Instagram @cukr_id', 
               label: 'Tautan profil: linktr.ee', 
               rings: [{ x: '18%', y: '81%', w: '15%', h: '12%', n: 2 }] 
            },
          ],
        },
        obs: 'Pada bagian "Cabang" di cukr.id, petanya gagal dimuat dan hanya menampilkan pesan error ("API KEY REQUIRED") alih-alih peta yang seharusnya, sehingga pengunjung tidak dapat melihat sebaran lokasi outlet.',
        impact: 'kekuatan utama Cukr — jaringan outlet yang beroperasi — tidak dapat diverifikasi secara visual oleh pengunjung situs.',
      },
      {
        title: 'Tiga alamat berbeda untuk satu merek',
        obs: 'Situs cukr.id, alamat cukr.co.id pada bio salah satu akun manajemen, dan tautan linktr.ee pada akun Instagram @cukr_id masih aktif bersamaan.',
        impact: 'calon pelanggan yang menemukan alamat berbeda-beda — dari hasil pencarian, dari bio Instagram, atau dari rekomendasi teman — tidak yakin mana yang resmi dan paling terbaru, sementara upaya membangun reputasi digital Cukr jadi terpecah ke tiga tempat sekaligus, bukan menguat di satu alamat.',
      },
    ],
    solution: {
      principle: 'Rumah utamanya sudah ada; tugasnya mengarahkan semua jalan ke satu pintu.',
      flowNow: ['Pelanggan mencari Cukr', 'Menemui 3 alamat berbeda', 'Ragu mana yang resmi'],
      flowNext: ['Pelanggan mencari Cukr', 'Satu alamat utama', 'Verifikasi cabang & kontak resmi'],
      build: [
        'Perbaikan peta pada halaman cabang (bisa diselesaikan dengan cepat tanpa mengganggu operasional situs yang sedang berjalan).',
        'Penetapan satu alamat utama dengan pengalihan otomatis dari dua alamat lain.',
        'Pembaruan tautan bio Instagram ke alamat utama.',
      ],
      keep: 'Halaman legalitas dan anti-penipuan (badan hukum + nomor verifikasi) sangat baik — pertahankan sebagai bagian tetap situs.',
    },
  },
  dalamruang: {
    name: 'Dalam Ruang Hair Studio',
    coverSub: 'Disusun khusus untuk manajemen Dalam Ruang Hair Studio berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Profil terverifikasi dan konten yang terkurasi menunjukkan operasional digital yang serius.',
      'Dua hal membuat kekuatan itu bekerja di bawah seharusnya.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Reservasi masih terbagi di dua platform luar',
        evidence: { 
           src: '/audit/dalamruang/beacons.png', 
           label: "Tautan aplikasi pihak ketiga",
           alt: 'Halaman tautan Dalam Ruang dengan tombol Minutes Apps dan WhatsApp', 
           caption: 'Dua jalur reservasi berdampingan pada halaman tautan pihak ketiga.', 
           rings: [
              { x: '28%', y: '66.5%', w: '44%', h: '8.5%', n: 1 }, 
              { x: '28%', y: '77%', w: '44%', h: '8.5%', n: 2 }
           ] 
        },
        obs: 'Halaman tautan Anda menampilkan dua jalur reservasi: aplikasi pihak ketiga (Minutes Apps) dan WhatsApp manual. Keduanya berada di luar situs milik Anda sendiri.',
        impact: 'potensi loss customer karena alur pemesanan yang panjang (harus pindah aplikasi). Selain itu, Anda kehilangan database mandiri yang berharga untuk program loyalitas pelanggan atau promo otomatis.',
      },
      {
        title: 'Halaman tautan masih menampilkan iklan penyedia layanan',
        obs: 'Di sudut halaman tautan terdapat badge promosi "Try for free!" dari penyedia halaman, menempel pada profil bisnis Anda yang sudah memiliki reputasi kuat.',
        impact: 'mengurangi eksklusivitas merek premium Dalam Ruang Hair Studio, di mana pelanggan bisa terdistraksi oleh iklan platform lain saat ingin memesan layanan Anda.',
      },
    ],
    solution: {
      principle: 'Konten Anda sudah kuat; yang dibutuhkan adalah rumah yang milik Anda sendiri.',
      flowNow: ['Pelanggan buka bio', 'Halaman tautan pihak ketiga', 'Pilih aplikasi / WA manual'],
      flowNext: ['Pelanggan buka bio', 'Situs resmi Anda', 'Reservasi tersimpan di database Anda'],
      build: [
        'Halaman reservasi pada domain sendiri (jadwal, layanan, konfirmasi WhatsApp).',
        'Kepemilikan penuh atas database pelanggan Anda secara mandiri dan aman.',
        'Halaman profil dua cabang yang menggantikan halaman tautan.',
      ],
      keep: 'Konten Instagram dan highlight yang terkurasi sudah berjalan baik.',
    },
  },
  barbertopia: {
    name: 'Barbertopia Barbershop',
    coverSub: 'Disusun khusus untuk manajemen Barbertopia berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Rating 4,9 dari 348 ulasan adalah modal yang sangat kuat.',
      'Satu tombol yang rusak saat ini membuang modal itu setiap hari.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Tombol situs web di Google Maps mengarah ke akun yang tidak aktif',
        evidence: {
          caption: `Bukti 1: Tombol website pada listing Google Maps (4,9★). 
          Bukti 2: Halaman error "Pengguna tidak ditemukan" yang muncul saat tombol diklik.`,
          shots: [
            { src: '/audit/barbertopia/maps.png', alt: 'Listing Google Maps Barbertopia dengan tombol website', label: 'listing google maps', rings: [{ x: '1.5%', y: '82%', w: '40%', h: '8%', n: 1 }] },
            { src: '/audit/barbertopia/error-ig.png', alt: 'Halaman Instagram error pengguna tidak ditemukan', label: 'hasil saat diklik', rings: [{ x: '23%', y: '7%', w: '55%', h: '18%', n: 2 }] },
          ],
        },
        obs: 'Tombol "website" pada listing Google Maps Anda (4,9★ · 348 ulasan) membuka halaman Instagram berstatus "pengguna tidak ditemukan".',
        impact: 'calon pelanggan potensial mengira bisnis Anda sudah tutup, atau mereka langsung pindah mencari barbershop kompetitor. Ini adalah kebocoran omset harian yang tidak disadari.',
      },
      {
        title: 'Dua nomor kontak yang berbeda',
        obs: 'Nomor pada Google Maps berbeda dengan nomor WhatsApp pada bio Instagram.',
        impact: 'membingungkan calon pelanggan, memperlambat proses booking, dan berisiko adanya chat reservasi yang terabaikan karena admin fokus pada satu nomor saja.',
      },
    ],
    solution: {
      principle: 'Konten Anda sudah konsisten; yang dibutuhkan adalah satu gerbang digital resmi yang berfungsi sempurna.',
      flowNow: ['Klik tombol website di Maps', 'Halaman kosong', 'Calon pelanggan pergi'],
      flowNext: ['Klik tombol website di Maps', 'Situs resmi + daftar harga', 'Calon pelanggan langsung booking'],
      build: [
        'Situs resmi sederhana dengan layanan, harga, dan satu jalur reservasi.',
        'Penetapan satu nomor resmi yang sama di semua platform.',
        'Optimasi dan perbaikan tautan pada Google Maps agar terhubung langsung ke situs baru.',
      ],
      keep: 'Konten Instagram mingguan sudah konsisten — pertahankan.',
    },
  },
  tamaro: {
    name: 'Tamaro Barber Studio',
    coverSub: 'Disusun khusus untuk manajemen Tamaro Barber Studio berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Momentum pembukaan masih terbuka lebar — ini waktu yang paling tepat membenahi fondasi.',
      'Dua hal kecil saat ini menahan momentum itu.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Daftar harga belum tersimpan di tempat yang mudah ditemukan',
        evidence: { src: '/audit/tamaro/profil.png', alt: 'Profil Instagram Tamaro tanpa highlight', label: "Profil belum memiliki highlight", caption: 'Profil belum memiliki highlight; daftar harga berada di antara puluhan postingan.', rings: [
           { x: '25%', y: '40%', w: '6%', h: '10%', n: "❓" },
           { x: '32%', y: '40%', w: '6%', h: '10%', n: "❓" },
        ] },
        obs: 'Profil Instagram belum memiliki sorotan (highlight); daftar harga dan layanan berada di antara puluhan postingan yang harus digulir satu per satu.',
        impact: 'calon pelanggan yang ingin membandingkan harga dengan cepat berpotensi membatalkan niat berkunjung akibat lelah mencari di antara puluhan konten.',
      },
      {
        title: 'Belum ada jalur reservasi milik sendiri',
        obs: 'Bio hanya mencantumkan nomor WhatsApp; belum ada situs maupun sistem reservasi yang mencatat jadwal.',
        impact: 'kecepatan booking terhambat oleh waktu respons admin. Ketika outlet mulai ramai, sistem manual ini rawan memicu kesalahan catat jadwal (double booking) yang bisa mengecewakan pelanggan.',
      },
    ],
    solution: {
      principle: 'Aktivitas konten Anda sudah benar; tambahkan satu halaman yang bekerja saat Anda sibuk.',
      flowNow: ['Calon pelanggan buka profil', 'Gulir puluhan post', 'Buka WA & chat manual'],
      flowNext: ['Calon pelanggan buka profil', 'Klik tautan situs', 'Lihat harga & booking sendiri'],
      build: [
        'Situs satu halaman terintegrasi dengan daftar harga, layanan, dan reservasi online langsung.',
        'Penguncian slot otomatis agar dua pelanggan tidak memesan jam yang sama.',
        'Notifikasi WhatsApp untuk setiap pemesanan baru.',
      ],
      keep: 'Aktivitas postingan sejak pembukaan sudah sangat baik — pertahankan ritmenya.',
    },
  },
  sapiens: {
    name: 'Sapiens Barbershop',
    coverSub: 'Disusun khusus untuk manajemen Sapiens Barbershop berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Jaringan lima cabang dengan struktur highlight yang rapi adalah fondasi yang jarang dimiliki.',
      'Dua celah digital saat ini menahan potensi besar seluruh jaringan itu.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Listing cabang tidak mencantumkan jalur kontak',
        evidence: {
        caption: 'Listing cabang yang kami periksa tidak menampilkan telepon, situs web, maupun tombol WhatsApp.', 
        shots: [
            { 
              src: '/audit/sapiens/maps.png', 
              alt: 'Listing Google Maps Sapiens Duren Sawit tanpa baris telepon', label: 'tidak ada info kontak', 
              rings: [
               { x: '1%', y: '81%', w: '43%', h: '19%', n: '?' },
               { x: '13%', y: '17%', w: '6%', h: '6%', n: "📞" },
               { x: '22%', y: '17%', w: '6%', h: '6%', n: "🌐" },
            ] },
            { src: '/audit/sapiens/maps-2.png', 
              alt: 'Listing Google Maps Sapiens Pondok Cipta tanpa baris telepon', label: 'tidak ada info kontak', 
              rings: [
                 { x: '1%', y: '60%', w: '43%', h: '19%', n: '?' },
                 { x: '13%', y: '17%', w: '6%', h: '6%', n: "📞" },
                 { x: '22%', y: '17%', w: '6%', h: '6%', n: "🌐" },
              ] },
          ],
        },
        obs: 'Pada listing Google Maps cabang yang kami periksa (Duren Sawit), tidak terdapat baris telepon, situs web, maupun tombol WhatsApp.',
        impact: 'hambatan besar bagi calon pelanggan baru yang ingin bertanya atau memesan tempat. Ketiadaan kontak langsung memaksa mereka berspekulasi untuk langsung datang ke lokasi, yang berisiko membuat mereka membatalkan niat dan beralih ke barbershop lain yang lebih mudah dihubungi.',
      },
      {
        title: 'Lima cabang belum memiliki satu alamat digital bersama',
        obs: 'Bio Instagram mencantumkan lima alamat cabang dalam bentuk teks, namun tidak ada satu halaman pun yang mengumpulkan seluruh cabang, jadwal, dan harga.',
        impact: 'calon pelanggan di satu wilayah tidak mengetahui keberadaan cabang Sapiens lainnya. Bisnis kehilangan kesempatan emas untuk melakukan cross-selling atau memindahkan antrean pelanggan yang penuh ke cabang terdekat.',
      },
    ],
    solution: {
      principle: 'Strukturnya sudah rapi; yang dibutuhkan satu atap digital untuk semuanya.',
      flowNow: ['Pelanggan cari satu cabang', 'Hanya menemukan cabang itu', 'Reputasi cabang lain tidak terlihat'],
      flowNext: ['Pelanggan cari Sapiens', 'Satu situs + peta cabang', 'Reputasi jaringan bekerja bersama'],
      build: [
        'Situs satu halaman dengan peta cabang interaktif dan status beroperasi.',
        'Reservasi per cabang dengan rekap terpusat.',
        'Pelengkapan informasi telepon dan situs pada seluruh listing Google Maps.',
      ],
      keep: 'Manajemen konten dan struktur highlight per cabang di Instagram sudah sangat rapi — sebuah fondasi yang kuat.',
    },
  },
  cartel: {
    name: 'Cartel Barbershop',
    coverSub: 'Disusun khusus untuk manajemen Cartel Barbershop berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Rating sempurna 5,0★ dari 86 ulasan sejak pembukaan adalah pencapaian langka.',
      'Cara reservasi disampaikan saat ini membuat rating sempurna itu belum bekerja maksimal.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Informasi reservasi hanya tersedia di konten 24 jam',
        evidence: { 
           caption: 'Instruksi booking dipublikasikan melalui Story yang hilang otomatis setelah 24 jam.',
           shots: [
            { 
              src: '/audit/cartel/story.png', 
              alt: 'Story Cartel mempromosikan booking via aplikasi', label: `
              instruksi booking di story IG`, 
              rings: [
               { x: '30%', y: '80%', w: '63%', h: '10%', n: 1 }
            ] },
            { src: '/audit/cartel/story-2.png', 
              alt: 'Story Cartel mempromosikan booking via aplikasi', label: `
              instruksi booking di story IG`, 
              rings: [
                 { x: '23%', y: '80%', w: '55%', h: '7%', n: 2 }
              ] },
          ],
        },
        obs: 'Instruksi booking melalui aplikasi dipublikasikan melalui Instagram Story, yang hilang otomatis setelah 24 jam.',
        impact: 'calon pelanggan yang membuka profil di luar jendela waktu tersebut tidak akan menemukan cara untuk memesan.',
      },
      {
        title: 'Sistem reservasi dan data pelanggan berada di platform luar',
        obs: 'Pemesanan berjalan melalui aplikasi pihak ketiga di luar sistem Anda sendiri.',
        impact: 'riwayat pelanggan dan data jadwal tersimpan pada platform luar yang kebijakannya dapat berubah sewaktu-waktu.',
      },
    ],
    solution: {
      principle: 'Reputasi bisnis Anda sudah sempurna; saatnya memberi halaman web permanen.',
      flowNow: ['Profil dibuka', 'Cari info booking', 'Story sudah hilang'],
      flowNext: ['Profil dibuka', 'Klik tautan permanen', 'Booking + data tersimpan milik Anda'],
      build: [
        'Halaman reservasi pada domain sendiri, ditautkan permanen di bio.',
        'Halaman harga dan layanan permanen menggantikan informasi via Story.',
        'Kepemilikan penuh atas database pelanggan Anda secara mandiri dan aman.',
      ],
      keep: 'Rating 5,0★ dari 86 ulasan sejak pembukaan adalah pencapaian langka. Modal luar biasa ini sangat layak ditampilkan secara permanen di situs Anda sendiri.',
    },
  },
  stud: {
    name: 'Stud Barber Studio',
    coverSub: 'Disusun khusus untuk manajemen Stud Barber Studio berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Rating 4,9 dari 203 ulasan dan cabang baru yang segera buka menunjukkan arah yang benar.',
      'Dua hal kecil saat ini menghalangi calon pelanggan baru.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Tautan menu pada Google Maps tidak dapat dibuka',
        evidence: { 
           caption: 'Tombol "Menu" mengarah ke alamat yang menampilkan "That page doesn\'t exist".', 
           shots: [
            { 
              src: '/audit/stud/maps.png', 
              alt: 'Listing Google Maps Stud dengan baris Menu ibb.co', 
              label: `Tombol "Menu" mengarah ke alamat yang salah`, 
              rings: [
               { x: '1%', y: '44%', w: '43%', h: '8%', n: 1 }
            ] },
            { src: '/audit/stud/page-not-found.png', 
              alt: 'Halaman "Menu" tidak ditemukan', label: 'Halaman menu tidak ditemukan', 
              rings: [
                 { x: '23%', y: '26%', w: '55%', h: '15%', n: 2 }
              ] },
          ],
        },
        obs: 'Tombol "Menu" pada listing Google Maps membuka alamat yang menampilkan keterangan "That page doesn\'t exist".',
        impact: 'calon pelanggan yang ingin memeriksa harga menemui halaman kesalahan.',
      },
      {
        title: 'Belum ada halaman yang memperkenalkan seluruh cabang',
        obs: 'Tiga cabang (dua beroperasi, satu segera buka) hanya tercantum sebagai teks dan link pada bio Instagram.',
        impact: 'Calon pelanggan harus membuka dan membandingkan tautan Google Maps satu per satu secara manual untuk menentukan lokasi dan jarak cabang, yang memperpanjang jalur konversi pemesanan..',
      },
    ],
    solution: {
      principle: 'Ekspansi Anda layak mendapatkan satu halaman yang memetakan semuanya.',
      flowNow: ['Pelanggan cari Stud', 'Bio teks tiga cabang', 'Buka maps satu per satu'],
      flowNext: ['Pelanggan cari Stud', 'Satu halaman peta cabang', 'Pilih cabang terdekat', 'Langsung booking di tempat'],
      build: [
        'Situs satu halaman dengan peta cabang dan status beroperasi.',
        'Unggah menu harga pada halaman milik sendiri (tidak bergantung layanan gratis).',
        'Halaman pembukaan khusus cabang Jatibening.',
      ],
      keep: 'Rating 4,9 dari 203 ulasan adalah fondasi yang kuat.',
    },
  },
  katto: {
    name: 'Katto Barbershop',
    coverSub: 'Disusun khusus untuk manajemen Katto Barbershop berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Keunggulan Anda paling jelas terbaca dari ulasan pelanggan — dan itu modal langka.',
      'Saat ini keunggulan itu belum terlihat oleh calon pelanggan baru.',
      'Satu halaman rekomendasi, tanpa kewajiban apa pun.',
    ],
    findings: [
      {
        title: 'Satu-satunya tautan pada bio tidak dapat dibuka',
        evidence: { src: '/audit/katto/bio.png', alt: 'Bio Instagram Katto dengan tautan g.co', caption: 'Tautan bio menampilkan halaman kesalahan saat dibuka.', rings: [{ x: '18%', y: '22%', w: '30%', h: '5%', n: 1 }] },
        obs: 'Tautan pada bio Instagram tidak bisa dibuka dan menampilkan halaman kesalahan.',
        impact: 'calon pelanggan yang menekan satu-satunya tautan yang Anda sediakan menemui halaman kesalahan.',
      },
      {
        title: 'Keunggulan utama belum ditampilkan secara online',
        obs: 'Ulasan secara konsisten memuji keramahan terhadap anak-anak — termasuk kursi potong berbentuk mobil — namun informasi ini tidak tampil pada halaman digital mana pun.',
        impact: 'orang tua yang mencari barbershop ramah anak tidak menemukan Anda lewat pencarian itu, padahal buktinya sudah Anda miliki.',
      },
    ],
    solution: {
      principle: 'Ceritanya sudah ada di ulasan pelanggan; tugas kami memajangnya.',
      flowNow: ['Orang tua cari "barbershop ramah anak"', 'Tidak menemukan siapa pun', 'Pilih yang kebetulan muncul'],
      flowNext: ['Orang tua cari "barbershop ramah anak"', 'Menemukan halaman Katto', 'Lihat galeri & booking'],
      build: [
        'Situs berkonsep keluarga: layanan anak, daftar harga, dan reservasi.',
        'Galeri "potong rambut anak" sebagai konten utama.',
        'Pelengkapan informasi kontak pada listing Google Maps.',
      ],
      keep: 'Rating 4,7 dari 216 ulasan dengan pujian konsisten adalah modal yang sangat baik.',
    },
  },
  rio: {
    name: 'Barbershop Rio',
    coverSub: 'Disusun dengan hormat untuk usaha yang telah melayani pelanggan sejak 1997 — berdasarkan pengamatan publik, ' + TGL + '.',
    points: [
      'Reputasi 29 tahun adalah modal yang tidak dimiliki pesaing mana pun.',
      'Dua hal dapat membantu reputasi itu bekerja secara online.',
      'Dokumen ini ditujukan kepada owner — kami berterima kasih bila tim berkenan meneruskannya.',
    ],
    findings: [
      {
        title: 'Pemesanan masih tercatat melalui percakapan tanpa catatan jadwal',
        evidence: { 
           src: '/audit/rio/bio-rio.png', 
           alt: 'Akun Instagram Rio Barbershop',
           label: 'Booking melalui DM dan WhatsApp',
           caption: 'Booking melalui DM dan WhatsApp',
            rings: [
              { x: '20%', y: '35%', w: '44%', h: '41%', n: 1 }, 
           ] 
        },
        obs: 'Bio Instagram menyebutkan booking melalui DM dan WhatsApp; belum ada halaman yang menampilkan jadwal tersedia.',
        impact: 'seiring ramainya pelanggan, catatan manual meningkatkan risiko jadwal ganda dan pesan terlewat — padahal reputasi terus mendatangkan pelanggan baru.',
      },
      {
        title: 'Instagram tidak aktif sejak Juni 2026',
        obs: 'Postingan terakhir tertanggal 30 Juni 2026; jarak antar postingan sebelumnya juga cukup panjang.',
        impact: 'calon pelanggan yang memeriksa profil melihat usaha yang tampak tidak aktif, padahal operasional berjalan setiap hari.',
      },
    ],
    solution: {
      principle: 'Tidak perlu rajin postingan — yang dibutuhkan satu halaman yang bekerja saat Anda sibuk.',
      flowNow: ['Pelanggan cari di Google', 'Temui Maps/IG', 'DM tanya jadwal', 'Admin balas manual'],
      flowNext: ['Pelanggan cari di Google', 'Situs resmi + daftar harga', 'Pilih jadwal sendiri', 'WA terima booking rapi'],
      build: [
        'Situs satu halaman dengan daftar harga, layanan, dan reservasi online.',
        'Penguncian slot otomatis dan notifikasi pemesanan baru ke WhatsApp.',
        'Halaman pendaftaran untuk program "Belajar Barber dari Nol" yang sudah berjalan — membuka sumber pendapatan baru dari peserta kursus, di luar pelanggan potong rambut.',
        'Pelengkapan informasi pada listing Google Maps.',
      ],
      keep: 'Reputasi sejak 1997 dan pelanggan tetap adalah fondasi utama — situs berperan membukakan pintu pelanggan baru.',
    },
  },
}

/* Ukur tinggi dokumen → setel @page persis setinggi itu (mode panjang) */
function applyLongSize() {
  const docEl = document.querySelector('.audit-doc')
  if (!docEl || document.body.classList.contains('print-a4')) return
  const mm = Math.ceil(((docEl.getBoundingClientRect().height * 25.4) / 96) * 1.04) + 8
  let st = document.getElementById('audit-page-size')
  if (!st) { st = document.createElement('style'); st.id = 'audit-page-size'; document.head.appendChild(st) }
  st.textContent = `@page { size: 210mm ${mm}mm; margin: 0; }`
}

export default function AuditPage() {
  const { slug } = useParams()
  const a = AUDITS[slug]

  useEffect(() => {
    const t = setTimeout(applyLongSize, 400)
    let hidden = []
    const hide = () => {
      const d = document.querySelector('.audit-doc')
      if (!d) return
      document.body.querySelectorAll('*').forEach((el) => {
        const related = el === d || d.contains(el) || el.contains(d)
        if (!related) { hidden.push([el, el.style.display]); el.style.display = 'none' }
      })
    }
    const show = () => { hidden.forEach(([el, disp]) => { el.style.display = disp }); hidden = [] }
    window.addEventListener('resize', applyLongSize)
    window.addEventListener('beforeprint', hide)
    window.addEventListener('afterprint', show)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', applyLongSize)
      window.removeEventListener('beforeprint', hide)
      window.removeEventListener('afterprint', show)
      show()
    }
  }, [slug])

  if (!a) {
    return (
      <main className="audit-wrap">
        <p className="a-index">Index audit: {Object.keys(AUDITS).map((k) => (<Link key={k} to={`/audit/${k}`}>{k} </Link>))}</p>
      </main>
    )
  }

  const printLong = () => { document.body.classList.remove('print-a4'); applyLongSize(); window.print() }
  const printA4 = () => {
    document.body.classList.add('print-a4')
    const st = document.getElementById('audit-page-size')
    if (st) st.textContent = ''
    window.print()
  }

  return (
    <main className="audit-wrap">
      <article className="audit-doc">
        <section className="a-cover">
          <header className="a-head">
            <span className="a-logo">R<b>&amp;</b>R</span>
            <span className="a-docno">Dokumen AUD-{slug.toUpperCase()}-0926</span>
          </header>
          <p className="a-kicker">Audit Kehadiran Digital</p>
          <h1>{a.name}</h1>
          <p className="a-sub">{a.coverSub}</p>
          <ul className="a-points">{a.points.map((p) => (<li key={p}>{p}</li>))}</ul>
          <p className="a-conf">Disusun khusus untuk manajemen {a.name} — tidak untuk disebarluaskan.</p>
        </section>

        <section className="a-section">
          <h2>1 · Yang kami amati</h2>
          <p className="a-lead">Seluruh poin berikut kami ambil dari halaman publik (Instagram, Google Maps, dan situs Anda) per {TGL}. Kami bisa saja kekurangan konteks — saluran koreksi tersedia di akhir dokumen.</p>
           {a.findings.map((f, i) => (
            <div className="a-finding" key={f.title}>
              <h3>1.{i + 1}&ensp;{f.title}</h3>
              <p className="a-obs">{f.obs}</p>
              <p className="a-impact"><b>Akibat bagi usaha:</b> {f.impact}</p>
              {f.evidence && (
                 <figure className="a-ev">
                   {(f.evidence.shots || [{ src: f.evidence.src, alt: f.evidence.alt, rings: f.evidence.rings, label: f.evidence.label }]).map((sh, si) => (
                     <div className="a-ev-img" key={sh.src}>
                       <span className="a-ev-label">Bukti {si + 1}{sh.label ? ` · ${sh.label}` : ''}</span>
                       <img src={sh.src} alt={sh.alt || ''} />
                       {(sh.rings || []).map((r) => (
                         <span key={r.n} className="a-ring" style={{ left: r.x, top: r.y, width: r.w, height: r.h }}><i>{r.n}</i></span>
                       ))}
                     </div>
                   ))}
                   <figcaption>{f.evidence.caption}</figcaption>
                 </figure>
               )}
            </div>
          ))}
        </section>

        <section className="a-section a-rec">
          <h2>2 · Rekomendasi kami</h2>
          <p className="a-lead">{a.solution.principle}</p>
          <div className="a-flow">
            <div className="a-flow-row">
              <span className="a-flow-label">Hari ini</span>
              {a.solution.flowNow.map((s, i) => (
                <Fragment key={s}><span className="a-box">{s}</span>{i < a.solution.flowNow.length - 1 && <span className="a-arrow">→</span>}</Fragment>
              ))}
            </div>
            <div className="a-flow-row">
              <span className="a-flow-label">Bersama RR Devs</span>
              {a.solution.flowNext.map((s, i) => (
                <Fragment key={s}><span className="a-box next">{s}</span>{i < a.solution.flowNext.length - 1 && <span className="a-arrow">→</span>}</Fragment>
              ))}
            </div>
          </div>
          <h3>Yang kami bangun</h3>
          <ul className="a-build">{a.solution.build.map((b) => (<li key={b}>{b}</li>))}</ul>
          <h3>Yang tetap dipertahankan</h3>
          <p className="a-keep">{a.solution.keep}</p>
        </section>

        <section className="a-section a-close">
          <h2>3 · Langkah berikutnya, bila Anda berkenan</h2>
          <p>Audit ini kami susun sebagai hadiah, tanpa kewajiban apa pun. Bila Anda merasa isinya berguna, kami senang berdiskusi 15 menit — melalui WhatsApp atau langsung di lokasi Anda — untuk menentukan bersama poin mana yang paling layak dibenahi lebih dahulu. Bila waktunya belum tepat, silakan simpan dokumen ini sebagai checklist internal.</p>
          <ul className="a-contact">
            <li>WhatsApp: +62 831-7112-5657</li>
            <li>Email: hello@rrdevs.my.id</li>
            <li>Situs: rrdevs.my.id</li>
          </ul>
          <p className="a-disc">Disusun oleh RR Devs (Rafael &amp; Rendy), web developer tetangga Cakung, Jakarta Timur. Apabila terdapat kekeliruan pengamatan, mohon beri tahu kami — kami akan memperbaikinya dengan terima kasih.</p>
        </section>
      </article>

      <div className="a-actions no-print">
        <button onClick={printLong}>📜 PDF satu halaman panjang (disarankan)</button>
        <button onClick={printA4}>📄 PDF A4 (untuk cetak kertas)</button>
      </div>
    </main>
  )
}