const loopyLighthouse = function (range, multiples, words) {
  const loopy = words[0];
  const lighthouse = words[1];

  for (let i = range[0]; i <= range[1]; i++) {
    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(loopy + lighthouse);
    }
    else if (i % multiples[0] === 0) {
      console.log(loopy);
    }
    else if (i % multiples[1] === 0) {
      console.log(lighthouse);
    }
    else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);