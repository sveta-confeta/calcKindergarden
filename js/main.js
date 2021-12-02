let calc=document.querySelectorAll('#calc');//1 столбец
let calc2=document.querySelectorAll('#calc2');// 2 столбец
let calc3=document.querySelectorAll('#calc3');


//основная таблица : итоги 1 столбец
let result=0;

for(let i=1;i<=calc.length;i++){
    result=result+Number(document.all.tbl.rows[i].cells[2].innerText) ;
   
}

document.all.tbl.rows[23].cells[2].innerText=result ;

//основная таблица : итоги 2 столбец

let result2=0;
for(let i=1;i<=calc2.length;i++){
    result2=result2+Number(document.all.tbl.rows[i].cells[3].innerText) ;
   
}
document.all.tbl.rows[23].cells[3].innerText=result2 ;

// 1bтаблица расходов
let result3=result;

for(let i=1;i<=calc3.length;i++){
result3=result3-Number(document.all.tblRes1.rows[i].cells[2].innerText)
   
}
document.all.tblRes1.rows[10].cells[2].innerText=result3 ;