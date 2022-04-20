let inp = prompt("Enter a number : ", "025468");
document.write(`Number you have entered : ` + inp + `<br>`);
let trackPos = [];

for(let i=0; i < inp.length-1; i++)
    if(i!=inp.length-1 && (!(inp[i]&1) && !(inp[i+1]&1)))
        trackPos.push(i);

let incrementor = 0;
for(let i=0; i<trackPos.length; i++, incrementor++)
    inp = inp.slice(0, trackPos[i]+incrementor+1) + "-" + inp.slice(trackPos[i]+incrementor+1);

document.write(`Number with hyphens : ` + inp);
