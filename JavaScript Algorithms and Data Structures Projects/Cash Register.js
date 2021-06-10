function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    
    let hundred = ["ONE HUNDRED", Math.floor(change / 100) * 100];
    let twenty = ["TWENTY", Math.floor((change - hundred[1]) / 20) * 20];
    let ten = ["TEN", Math.floor((change - hundred[1] - twenty[1]) / 10) * 10];
    let five = ["FIVE", Math.floor((change - hundred[1] - twenty[1] - ten[1]) / 5) * 5];
    let one = ["ONE", Math.floor(change - hundred[1] - twenty[1] - ten[1] - five[1])];
    let quarter = ["QUARTER", Math.floor((change - hundred[1] - twenty[1] - ten[1] - five[1] - one[1]) / 0.25) * 0.25];
    let dime = ["DIME", Math.floor((change - hundred[1] - twenty[1] - ten[1] - five[1] - one[1] - quarter[1]).toFixed(2) / 0.1) * 0.1];
    let nickel = ["NICKEL", Math.floor((change - hundred[1] - twenty[1] - ten[1] - five[1] - one[1] - quarter[1] - dime[1]).toFixed(2) / 0.05) * 0.05];
    let penny = ["PENNY", Math.floor((change - hundred[1] - twenty[1] - ten[1] - five[1] - one[1] - quarter[1] - dime[1] - nickel[1]).toFixed(2) / 0.01) * 0.01];

    let drawArr = [penny, nickel, dime, quarter, one, five, ten, twenty, hundred];
    let stat;
    let draw = [];

    let cidTotal = 0;
    let drawTotal = 0;
    for(let i = 0; i < cid.length; i++){
        cidTotal += cid[i][1];
    }
    for(let i = 0; i < drawArr.length; i++){
        drawTotal += drawArr[i][1];
    }

    if(drawTotal > cidTotal){
        noFunds();
        return {
            status: stat,
            change: draw
        };
    } else if (drawTotal === cidTotal){
        closed();
        return {
            status: stat,
            change: draw
        };
    } else {
        for (let k = drawArr.length - 1; k > 1; k--) {
            if (drawArr[k][1] > cid[k][1]) {
                    drawArr[k - 1][1] += drawArr[k][1] - cid[k][1];
                    drawArr[k][1] = cid[k][1];
                }
            }
        if (drawArr[1][1]>cid[1][1]) {
            noFunds();
            return {
                status: stat,
                change: draw
            };
        }else {
            open();
            return {
                status: stat,
                change: draw
            };
        }
    }

    function open(){
        stat = "OPEN";
        for (let j = (drawArr.length-1); j >=0 ; j--) {
            if (drawArr[j][1] > 0) {
                draw.push(drawArr[j]);
            }
        }
    }
    function closed(){
        stat = "CLOSED";
        draw = cid;
    }
    function noFunds(){
        stat = "INSUFFICIENT_FUNDS";
        draw = [];
    }

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
    ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));