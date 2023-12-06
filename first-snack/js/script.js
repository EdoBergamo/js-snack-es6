const racingBikes = [
  {
    name: 'Bike A',
    weight: 7
  },
  {
    name: 'Bike B',
    weight: 8
  },
  {
    name: 'Bike C',
    weight: 6
  },
  {
    name: 'Bike D',
    weight: 7.5
  },
]

let lightestBike = racingBikes[0];

for (let i = 1; i < racingBikes.length; i++) {
  if (racingBikes[i].weight < lightestBike.weight) {
    lightestBike = racingBikes[i];
  }
}

const { name, weight } = lightestBike;
console.log(`La bici più leggera é ${name} con un peso di ${weight} kg`)