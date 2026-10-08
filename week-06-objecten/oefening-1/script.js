const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    // Vul in: geef een zin terug met this.name en this.brand via template literal
    return `${this.name} is een ${this.brand} auto. `;
  },
  isOld() {
    // Vul in: geef true terug als het year voor 2010 is
    return this.year < 2010;
  },
  drive(km) {
    // Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
    this.mileage += km;
    return this.mileage;
  },
};

// Toon de resultaten in de drie output-elementen
const outputDescription = document.getElementById('output-1');
const outputIsOld = document.getElementById('output-2');
const outputDrive = document.getElementById('output-3');

outputDescription.textContent = car.description();
outputIsOld.textContent = car.isOld() ? 'De auto is oud.' : 'De auto is niet oud. ';
outputDrive.textContent = `Nieuwe km-stand na 500 km rijden: ${car.drive(500)}`;
