function truthCheck(collection, pre) {
  let bool = true;
  collection.forEach((obj) => {
    console.log(obj[pre]);
    if (
      obj[pre] === false ||
      obj[pre] === 0 ||
      obj[pre] === -0 ||
      obj[pre] === "" ||
      obj[pre] === null ||
      obj[pre] === undefined ||
      !!obj[pre] === !!NaN
    ) {
      bool = false;
    }
  });
  return bool;
}

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
);
