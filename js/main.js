let calc=document.querySelectorAll('#calc');//1 столбец
let calc2=document.querySelectorAll('#calc2');// 2 столбец
let calc5=document.querySelectorAll('#calc5');// 3 столбец
let calc3=document.querySelectorAll('#calc3'); //  1 таблица расходов
let calc4=document.querySelectorAll('#calc4');//  2 таблица расходов
let calc6=document.querySelectorAll('#calc6');//  3 таблица расходов
let it=document.querySelectorAll('#it');

//основная таблица : итоги 1 столбец
let result=0;

for(let i=1;i<=calc.length;i++){
    result=result+Number(document.all.tbl.rows[i].cells[2].innerText) ;
   
}

document.all.tbl.rows[22].cells[2].innerText=result ;

// основная таблица : итоги 2 столбец

let result2=0;
for(let i=1;i<=calc2.length;i++){
    result2=result2+Number(document.all.tbl.rows[i].cells[3].innerText) ;
   
}
document.all.tbl.rows[22].cells[3].innerText=result2 ;

//основная таблица : итоги 3 столбец

// let result6=0;

// for(let i=1;i<=calc5.length;i++){
//     result6=result6+Number(document.all.tbl.rows[i].cells[4].innerText) ;
   
// }
// document.all.tbl.rows[23].cells[4].innerText=result6 ;


// 1 таблица расходов
let result3=result;

for(let i=1;i<=calc3.length;i++){
result3=result3-Number(document.all.tblRes1.rows[i].cells[2].innerText)
   
}
document.all.tblRes1.rows[15].cells[2].innerText=result3.toFixed(1) ;

// 2 таблица расходов
let result4=result3+result2; //это остаток с 1 взноса + 2 взнос (92)

let result8;




for(let i=1;i<=calc4.length;i++){
    result4=result4-Number(document.all.tblRes2.rows[i].cells[2].innerText)
   
}
console.log(result4)

document.all.tblRes2.rows[4].cells[2].innerText=result4.toFixed(1) ; //сдесь добавлять rows

// 3 таблица расходов
// let result5=result4+result6;

// for(let i=1;i<=calc6.length;i++){
// result5=result5-Number(document.all.tblRes3.rows[i].cells[2].innerText)
   
// }
// document.all.tblRes3.rows[23].cells[2].innerText=result5.toFixed(1) ;