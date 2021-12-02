let calc=document.querySelectorAll('#calc');
let calc2=document.querySelectorAll('#calc2');


let result=0;

for(let i=1;i<=calc.length;i++){
    result=result+Number(document.all.tbl.rows[i].cells[2].innerText) ;
   
}
let result2=0;

document.all.tbl.rows[23].cells[2].innerText=result ;

for(let i=1;i<=calc2.length;i++){
    result2=result2+Number(document.all.tbl.rows[i].cells[3].innerText) ;
   
}
document.all.tbl.rows[23].cells[3].innerText=result2 ;
console.log(calc2.length)