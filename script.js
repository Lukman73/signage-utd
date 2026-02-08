function updateClock() {
  const now = new Date();
  const jam = now.toLocaleTimeString("id-ID");
  const tanggal = now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("clock").innerHTML = jam;
  document.getElementById("date").innerHTML = tanggal;
}

setInterval(updateClock, 1000);
updateClock();
