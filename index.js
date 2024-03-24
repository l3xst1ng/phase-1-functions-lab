// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocationOfPassenger) {
  // Calculates the difference between pickup location and HQ block as per delivery direction
  let distanceInBlocks = pickupLocationOfPassenger - 42;

  // Takes care of the negative distance for downtown pickups where pickupLocationOfPassenger is < 42
  if (distanceInBlocks < 0) {
    distanceInBlocks = distanceInBlocks * -1;
  }

  return distanceInBlocks;
}

console.log(distanceFromHqInBlocks(43));

// Quiz 2

function distanceFromHqInFeet(noOfblocks) {
  const blocksFromHQ = distanceFromHqInBlocks(no0fblocks);
  return blocksFromHQ * 264;
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(noOfblocks) {
  const blocksFromHQ = distanceFromHqInBlocks(noOfblocks);
  return blocksFromHQ * 264;
}

// Quiz 3

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const startDistance = distanceFromHqInFeet(startBlock);
  const destinationDistance = distanceFromHqInFeet(destinationBlock);
  return destinationDistance - startDistance;
}

// Quiz 4
function calculatesFarePrice(startBlock, destinationEndBlock) {
  const distanceInFeet = distanceTravelledInFeet(
    startBlock,
    destinationEndBlock
  );

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
