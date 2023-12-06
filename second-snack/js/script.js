const generateRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const footballTeams = [
  {
    name: 'Team A',
    points: 0,
    fouls: 0
  },
  {
    name: 'Team B',
    points: 0,
    fouls: 0
  },
  {
    name: 'Team C',
    points: 0,
    fouls: 0
  },
  {
    name: 'Team D',
    points: 0,
    fouls: 0
  },
  {
    name: 'Team E',
    points: 0,
    fouls: 0
  },
  {
    name: 'Team F',
    points: 0,
    fouls: 0
  },
]

footballTeams.forEach(team => {
  team.points = generateRandomNum(1, 100);
  team.fouls = generateRandomNum(1, 50);
})

const teamNamesAndFouls = footballTeams.map(({ name, fouls }) => ({ name, fouls }))

console.log(footballTeams)
console.log(teamNamesAndFouls)