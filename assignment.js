///---- feetToMile
function feetToMile(feet) {
  mile = feet / 5280 + " " + "mile";
  return mile;
}

// woodCalculator
function woodCalculator(chair, Table, bed) {
  const chairCount = chair * 1;
  const tableCount = Table * 2;
  const bedCount = bed * 3;
  let totalWoodneed = chairCount + tableCount + bedCount + " " + "cubic meter";
  return totalWoodneed;
}

// brickCalculator
function brickCalculator(floor) {
  const oneFeetBrick = 1000;
  const firstToTenFloorFeet = 15;
  const elevenToTwentyFloorFeet = 12;
  const tweentyOneToLastFloorFeet = 10;
  const totalFirstToTen = oneFeetBrick * firstToTenFloorFeet;
  const totalElevenToTwenty = oneFeetBrick * elevenToTwentyFloorFeet;
  const totalTweentyOneToLast = oneFeetBrick * tweentyOneToLastFloorFeet;

  if (floor >= 1 && floor <= 10) {
    let brickCount = floor * totalFirstToTen;
    return brickCount + " " + "bricks";
  } else if (floor >= 1 && floor <= 20) {
    let brickCount = (floor - 10) * totalElevenToTwenty + 10 * totalFirstToTen;
    return brickCount + " " + "bricks";
  } else if (floor >= 1) {
    let brickCount =
      (floor - 20) * totalTweentyOneToLast +
      10 * totalElevenToTwenty +
      10 * totalFirstToTen;
    return brickCount + " " + "bricks";
  }
}

// tinyFriends
function tinyFriends(names) {
  let small = names[0];
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    if (currentName > small) {
      small = currentName;
    }
  }
  return small;
}
