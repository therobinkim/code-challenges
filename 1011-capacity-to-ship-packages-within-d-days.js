// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  const weightCapacityFloor = Math.max(...weights);
  const weightCapacityCeiling = weights.reduce((a, b) => a + b); // sum

  if (D === 1) {
    return weightCapacityCeiling;
  }

  // see how long the smallest possible boat will take
  if (calculate(weights, weightCapacityFloor).boatCount <= D) {
    // nothing can take longer than the smallest possible boat
    return weightCapacityFloor;
  }

  let left = weightCapacityFloor;
  let right = weightCapacityCeiling;

  while (left != right) {
    const { boatCount, heaviestBoatWeight } = calculate(
      weights,
      0.5 * (left + right)
    );

    // too many boats aka boats were too small
    if(D < boatCount) {
      left = Math.ceil(0.5 * (left + right));
    } else {
      right = heaviestBoatWeight;
    }
  }

  return left;
};

var calculate = function(weights, weightCapacity) {
  var result = weights.reduce(
    ({ boatCount, boatWeight, heaviestBoatWeight }, packageWeight) => {
      // if too heavy for new package
      if (weightCapacity < boatWeight + packageWeight) {
        // send the boat off and put package on next boat instead
        return {
          boatCount: boatCount + 1,
          boatWeight: packageWeight,
          heaviestBoatWeight
        };
      }
      // else add package to current boat
      return {
        boatCount,
        boatWeight: boatWeight + packageWeight,
        heaviestBoatWeight: Math.max(
          boatWeight + packageWeight,
          heaviestBoatWeight
        )
      };
    },
    {
      boatCount: 1,
      boatWeight: 0,
      heaviestBoatWeight: 0
    }
  );
  return result;
};
