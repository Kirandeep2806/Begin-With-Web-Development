let rows = parseInt(prompt("Enter the no.of rows : "));
let cols = parseInt(prompt("Enter the no.of cols : "));

const getTable = document.getElementById('mul-table');

if(!rows || !cols)
    rows = cols = 10;

const myStyle = `
    padding: 10px;
    text-align: center;
`;

for(let i=1; i<=rows; i++) {
    let createElement1 = document.createElement('tr');
    for(let j=1; j<=cols; j++) {
        const createElement2 = document.createElement('td');
        createElement2.innerHTML = i*j;
        createElement2.style = myStyle;
        console.log(createElement2.style);
        createElement1.append(createElement2);
    }
    getTable.append(createElement1);
}
