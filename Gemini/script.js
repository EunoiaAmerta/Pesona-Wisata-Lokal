// Contoh sederhana: Menampilkan pesan saat tombol pencarian diklik
document.querySelector(".hero button").addEventListener("click", function () {
  alert("Fitur pencarian belum tersedia.");
});

// Contoh sederhana: Scroll halus ke bagian halaman saat tautan navigasi diklik
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".card .img-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const gmapsUrl = this.getAttribute("data-gmaps");
    window.open(gmapsUrl, "_blank");
  });
});
