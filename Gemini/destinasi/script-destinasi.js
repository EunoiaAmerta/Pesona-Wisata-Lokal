const provinsiSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kota");
const destinasiList = document.getElementById("destinasi-list");
const destinasiCards = destinasiList.querySelectorAll(".card");

function filterDestinasi() {
  const provinsi = provinsiSelect.value;
  const kota = kotaSelect.value;

  destinasiCards.forEach((card) => {
    const cardProvinsi = card.dataset.provinsi;
    const cardKota = card.dataset.kota;

    if (
      (provinsi === "" || provinsi === cardProvinsi) &&
      (kota === "" || kota === cardKota)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

provinsiSelect.addEventListener("change", filterDestinasi);
kotaSelect.addEventListener("change", filterDestinasi);

// Tambahkan event listener untuk gambar
document.querySelectorAll(".card .img-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const gmapsUrl = this.getAttribute("data-gmaps");
    window.open(gmapsUrl, "_blank");
  });
});
