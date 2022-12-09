const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
var totalBatteries = 0;

for (var i = 0; i < batteryBatches.length; i++) {
  totalBatteries += batteryBatches[i];
}

console.log(totalBatteries);

