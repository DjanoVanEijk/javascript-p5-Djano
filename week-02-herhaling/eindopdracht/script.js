const form = document.querySelector('#discount-form');
const amountInput = document.querySelector('#amount');
const discountInput = document.querySelector('#discount');
const result = document.querySelector('#result');

function calculateTotal(bedrag, korting) {
  return bedrag - (bedrag * korting / 100);
}

function getKlantniveau(bedrag) {
  if (bedrag < 50) {
    return 'Nieuwe klant';
  } else if (bedrag <= 150) {
    return 'Vaste klant';
  } else {
    return 'VIP klant';
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const bedrag = Number(amountInput.value);
  const korting = Number(discountInput.value);

  if (amountInput.value === '', discountInput.value === '') {
    result.textContent = 'Vul zowel het bedrag als de korting in.';
    return;
  }

  const totaal = calculateTotal(bedrag, korting);
  const klantniveau = getKlantniveau(bedrag);

  result.textContent = 'Je betaalt €' + totaal.toFixed(2) + '. Klantniveau: ' + klantniveau;
});
