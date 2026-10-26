/**
 * script.js — File Logika Eksternal jQuery
 * Seluruh interaksi, manipulasi DOM, event handler, dan animasi ditulis di sini.
 */

$(document).ready(function () {
  // =========================================================================
  // 1. EVENT HANDLER: click() & METODE: toggleClass() & css()
  // Fungsi: Fitur Switch Mode Gelap / Mode Terang (Dark Mode)
  // =========================================================================
  $("#btnGantiTema").click(function () {
    // b. Metode jQuery: toggleClass() untuk mengganti mode tampilan
    $("body").toggleClass("dark-mode");

    // Check status mode gelap untuk mengubah teks tombol
    if ($("body").hasClass("dark-mode")) {
      // b. Metode jQuery: text()
      $(this).text("☀️ Mode Terang");
    } else {
      $(this).text("🌙 Mode Gelap");
    }
  });

  // =========================================================================
  // 2. EVENT HANDLER: click() & EFEK ANIMASI: slideToggle()
  // Fungsi: Menyembunyikan / Menampilkan bagian Biografi Singkat
  // =========================================================================
  $("#btnToggleDetail").click(function () {
    // d. Efek Animasi: slideToggle() meluncurkan/menutup elemen
    $("#secBio").slideToggle(400, function () {
      // b. Metode jQuery: text() mengubah label tombol sesuai status visibilitas
      if ($("#secBio").is(":visible")) {
        $("#btnToggleDetail").text("Sembunyikan Bio");
      } else {
        $("#btnToggleDetail").text("Tampilkan Bio");
      }
    });
  });

  // =========================================================================
  // 3. EVENT HANDLER: click() & EFEK ANIMASI: animate() & METODE: css()
  // Fungsi: Menyorot angka IPK dengan animasi perubahan ukuran dan warna
  // =========================================================================
  $("#btnUbahWarnaIpk").click(function () {
    // d. Animasi kustom jQuery: animate() membesarkan font IPK secara halus
    $("#ipk")
      .animate({ fontSize: "1.8rem" }, 300)
      .animate({ fontSize: "1.2rem" }, 300);

    // b. Metode jQuery: css() mengubah warna latar & teks IPK
    $("#ipk").css({
      "background-color": "#ff9800",
      color: "white",
      padding: "2px 8px",
      "border-radius": "4px",
    });
  });

  // =========================================================================
  // 4. EVENT HANDLER: hover() (mouseenter & mouseleave) & EFEK: animate()
  // Fungsi: Memberikan animasi pembesaran gambar profil saat kursor di atasnya
  // =========================================================================
  $("#fotoProfil").hover(
    // Fungsi saat kursor MASUK (mouseenter)
    function () {
      $(this).animate(
        {
          width: "155px",
          height: "155px",
        },
        200,
      );
    },
    // Fungsi saat kursor KELUAR (mouseleave)
    function () {
      $(this).animate(
        {
          width: "140px",
          height: "140px",
        },
        200,
      );
    },
  );

  // =========================================================================
  // 5. EVENT HANDLER: click() pada Tab Keahlian/Proyek
  // METODE: fadeIn(), fadeOut(), addClass(), removeClass()
  // Fungsi: Memindah tab antara 'Keahlian' dan 'Proyek'
  // =========================================================================
  $(".tab-btn").click(function () {
    // b. Metode jQuery: removeClass() & addClass() untuk indikator tab aktif
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // Ambil nilai atribut data-tab dari tombol yang diklik
    var targetTab = $(this).attr("data-tab");

    // d. Efek Animasi: fadeOut() lalu fadeIn() untuk transisi konten halus
    $(".tab-content").fadeOut(200, function () {
      $("#" + targetTab).fadeIn(200);
    });
  });

  // =========================================================================
  // 6. EVENT HANDLER: submit() & METODE: val(), html(), fadeIn(), delay(), fadeOut()
  // Fungsi: Menangani pengiriman form pesan dan memberikan notifikasi
  // =========================================================================
  $("#formPesan").submit(function (e) {
    // Mencegah halaman reload secara default saat submit
    e.preventDefault();

    // b. Metode jQuery: val() untuk mengambil masukan dari input teks
    var nama = $("#inputNama").val();
    var pesan = $("#inputPesan").val();

    // b. Metode jQuery: html() untuk menyisipkan pesan respon
    $("#notifikasi").html(
      "<strong>Terima kasih, " +
        nama +
        '!</strong> Pesan Anda: <em>"' +
        pesan +
        '"</em> telah berhasil dikirim.',
    );

    // d. Efek Animasi & Rantai metode (Chaining): fadeIn -> delay -> fadeOut
    $("#notifikasi").stop(true, true).fadeIn(400).delay(4000).fadeOut(400);

    // Reset isi form
    $("#formPesan")[0].reset();
  });

  // =========================================================================
  // 7. EVENT HANDLER: click() tambahan untuk Tombol Sapa
  // Fungsi: Menampilkan animasi ucapan sapaan di bagian judul
  // =========================================================================
  $("#btnSapa").click(function () {
    // d. Efek Animasi: fadeOut & fadeIn secara bergantian pada judul
    $("#judulProfil")
      .fadeOut(300, function () {
        $(this).text("Halo! Nama Saya Ahmad Fauzi 👋");
      })
      .fadeIn(300)
      .delay(2000)
      .fadeOut(300, function () {
        $(this).text("Profil Mahasiswa");
      })
      .fadeIn(300);
  });
});
