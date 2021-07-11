let cid = [["PENNY", 3], ["NICKEL", 5], ["DIME", 6], ["QUARTER", 4],
    ["ONE", 10], ["FIVE", 5], ["TEN", 4], ["TWENTY", 5], ["ONE HUNDRED", 2]];
function show() {
    for (let i = 0; i < cid.length; i++) {
        document.getElementById(`cid${i}`).innerHTML = cid[i][1];
    }
}
let drawObj = {
    status: '',
    change: []
};

function checkCashRegister(price, cash) {
    let change = cash - price;
    document.getElementById('total').innerHTML = change;
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
        return drawObj;
    } else if (drawTotal === cidTotal){
        closed();
        return drawObj;
    } else {
        for (let k = drawArr.length - 1; k > 1; k--) {
            if (drawArr[k][1] > cid[k][1]) {
                drawArr[k - 1][1] += drawArr[k][1] - cid[k][1];
                drawArr[k][1] = cid[k][1];
            }
        }
        if (drawArr[1][1]>cid[1][1]) {
            noFunds();
            return drawObj;
        }else {
            open();
            return drawObj;
        }
    }

    function open(){
        drawObj.status = "OPEN";
        for (let j = (drawArr.length-1); j >=0 ; j--) {
            if (drawArr[j][1] > 0) {
                drawObj.change.push(drawArr[j]);
            }
        }
    }
    function closed(){
        drawObj.status = "CLOSED";
        drawObj.change = cid;
    }
    function noFunds(){
        drawObj.status = "INSUFFICIENT_FUNDS";
        drawObj.change = [];
    }
}

function statusPrint(){
    document.getElementById('statusId').innerHTML = drawObj.status;
}

function drawPrint(){
    if(document.getElementById('drawTable').hasChildNodes()){
        document.getElementById('drawTable').removeChild(document.getElementById('drawTable').lastChild);
    }
    let table = document.createElement('table');
    table.style.border = '2px solid black';
    table.border = "black";
    table.id = "newTable";
    let tr1 = document.createElement('tr'),
        th1 = document.createElement('th'),
        th2 = document.createElement('th');
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    table.appendChild(tr1);
    th1.innerHTML = "Cash";
    th2.innerHTML = "In stock";
    document.getElementById('drawTable').appendChild(table);
    for(let i = (drawObj.change.length - 1); i >= 0; i--){
        let cell = document.createElement('tr');
        let firstCell = document.createElement('td');
        let secondCell = document.createElement('td');
        document.getElementById('newTable').appendChild(cell);
        cell.appendChild(firstCell);
        cell.appendChild(secondCell);
        firstCell.innerHTML = drawObj.change[i][0];
        secondCell.innerHTML = drawObj.change[i][1];
    }
    clearStatusNChange()
}

function clearStatusNChange(){
    drawObj.status = '';
    drawObj.change = [];
}
