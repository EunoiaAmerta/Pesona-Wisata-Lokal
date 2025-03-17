const provinsiSelect = document.getElementById("provinsi");
const jenisSelect = document.getElementById("jenis");
const kulinerList = document.getElementById("kuliner-list");
const kulinerCards = kulinerList.querySelectorAll(".card");

function filterKuliner() {
  const provinsi = provinsiSelect.value;
  const jenis = jenisSelect.value;

  kulinerCards.forEach((card) => {
    const cardProvinsi = card.dataset.provinsi;
    const cardJenis = card.dataset.jenis;

    if (
      (provinsi === "" || provinsi === cardProvinsi) &&
      (jenis === "" || jenis === cardJenis)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

provinsiSelect.addEventListener("change", filterKuliner);
jenisSelect.addEventListener("change", filterKuliner);
