function convertDate() {
  const input = document.getElementById("gregorianDate").value;
  const result = document.getElementById("result");

  if (!input) {
    result.textContent = "Please select a date.";
    return;
  }

  const date = new Date(input + "T00:00:00");
  const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);

  result.textContent = `Hijri Date: ${hijriDate}`;
}
