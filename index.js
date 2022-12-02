const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = ""

function sumOf(batteryBatches) {


    totalBatteries= batteryBatches.reduce((total, item) => total + item);
return totalBatteries

}

console.log(sumOf(batteryBatches))
