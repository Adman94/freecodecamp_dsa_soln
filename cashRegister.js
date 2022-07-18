function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let total_cid = 0;

  cid.forEach((elem) => {
    total_cid += elem[1];
  });
  total_cid = total_cid.toFixed(2);

  let change_due = cash - price;
  const changeArray = [];

  if (change_due > total_cid) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (change_due.toFixed(2) === total_cid) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (change_due >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        change_due -= UNIT_AMOUNT[elem[0]];
        change_due = change_due.toFixed(2);
      }

      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  console.log("change_due", change_due);

  if (change_due > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
