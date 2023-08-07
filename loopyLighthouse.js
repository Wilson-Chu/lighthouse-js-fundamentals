const loopy = "Loopy";
const lighthouse = "Lighthouse";

for (let i = 100; i <= 200; i++) {
  if (i % 12 === 0) {
    console.log(loopy + lighthouse);
  }
  else if (i % 3 === 0) {
    console.log(loopy);
  }
  else if (i % 4 === 0) {
    console.log(lighthouse);
  }
  else {
    console.log(i);
  }
}