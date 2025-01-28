function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function fetchSensexNifty() {
  // Simulating real-time Sensex and Nifty data
  const widget = document.getElementById('sensex-nifty');
  setInterval(() => {
    const sensex = (60000 + Math.random() * 200 - 100).toFixed(2);
    const nifty = (18000 + Math.random() * 100 - 50).toFixed(2);
    widget.innerHTML = `<p>SENSEX: ${sensex}</p><p>NIFTY: ${nifty}</p>`;
  }, 2000);
}

fetchSensexNifty();
