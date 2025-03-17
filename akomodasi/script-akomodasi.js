const provinsiSelect = document.getElementById("provinsi");
const jenisSelect = document.getElementById("jenis");
const akomodasiList = document.getElementById("akomodasi-list");
const akomodasiCards = akomodasiList.querySelectorAll(".card");

function filterAkomodasi() {
  const provinsi = provinsiSelect.value;
  const jenis = jenisSelect.value;

  akomodasiCards.forEach((card) => {
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

provinsiSelect.addEventListener("change", filterAkomodasi);
jenisSelect.addEventListener("change", filterAkomodasi);
