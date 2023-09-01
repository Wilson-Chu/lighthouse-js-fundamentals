const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let biggestMetric = vegetables[0][metric];
  let winner = vegetables[0]['submitter'];

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > biggestMetric) {
      biggestMetric = vegetables[i][metric];
      winner = vegetables[i]['submitter'];
    }
  }

  return winner;
}

const metric = "redness";
console.log(judgeVegetable(vegetables, metric));