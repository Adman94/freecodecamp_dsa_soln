function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const result = [];

  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let elem in arr) {
    result.push(getOrbPeriod(arr[elem]));
  }
  console.log(result);
  return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
