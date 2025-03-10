const JB = document.querySelector('.justButtons');
const anyButton = document.querySelectorAll('.button');
const reload = document.querySelector('.menu__button-first');
const reloadStr = document.querySelector('.reload-wrapper')
reload.addEventListener("click", function(){
    reloadStr.style.rotate = 720+'deg';
    setTimeout(() => {
        location.reload();
      }, 400);
})
// Три кнопки
const TRfirst = document.querySelector('.third-row-first');
TRfirst.addEventListener("click",function(){
    TRfirst.classList.toggle('bgtoggle');
});
const TRsecond = document.querySelector('.third-row-second');
TRsecond.addEventListener("click",function(){
    TRsecond.classList.toggle('rotate');
});
const TRthird = document.querySelector('.third-row-third');
TRthird.addEventListener("click",function(){
    TRthird.classList.toggle('scale');
});
// Три кнопки
const FRfirst = document.querySelector('.fourth-row-first');
let aboba = document.querySelector('.aboba');
let i = 0;
FRfirst.addEventListener("click",function(){
i++
if ((i>=10) && (i<35)){
    aboba.textContent ='Ну все, хватит' ; 
}
else if (i>=35){
    aboba.textContent ='Пасхалка номер один.'
    FRfirst.classList.add('bgtoggle');
    FRfirst.classList.add('rotate');
    FRfirst.classList.add('scaleZ');
}
else aboba.textContent ='Нажал ' + i + ' раз' ;
});
let j = 0;
const FRsecond = document.querySelector('.fourth-row-second');
FRsecond.addEventListener("click",function(){
    j++
    if((j>=3) && (j<35)){
    alert('Тут пасхалки не будет. Две подряд перебор')}
    else if(j>=35){
        alert('ПАСХАЛКА НОМЕР ДВА');
        JB.classList.add('bgtoggle');
        FRsecond.textContent = 'ПАСХАЛКА НОМЕР ДВА';
    }
    else  alert('Спасибо, что нажал на кнопку!')
});
const FRthird = document.querySelector('.fourth-row-third');
FRthird.addEventListener("click",function(){
    let random = Math.round(Math.random()*120);
    if(random%2==0){random*=-1}
    FRthird.style.left = random + 'px';
});
// Три кнопки
const FifRfirst = document.querySelector('.fifth-row-first');
let aa = 0;
FifRfirst.addEventListener("click",function(){
    if(aa%2==0){
    for(let ss = 0;ss<anyButton.length;ss++){
    anyButton[ss].textContent = 'Click on ME!';
    }
}
else if(aa%2==1){
    for(ss = 0;ss<anyButton.length;ss++){
        anyButton[ss].textContent = 'Нажми на меня!';
        }
}
if(aa>35){
    for(ss = 0;ss<anyButton.length;ss++){
        anyButton[ss].textContent = 'ПаСхАлКа НоМеР тРи';
        anyButton[ss].classList.add('scaleZZ')
        anyButton[ss].classList.add('rotate')
        }
}
aa++
});
const FifRsecond = document.querySelector('.fifth-row-second');
let bigScale = 1;
let total = 1;
FifRsecond.addEventListener("click",function(){
    bigScale+= (Math.round(Math.random()*10)/100);
    FifRsecond.style.scale = bigScale;
    total+=(Math.round(Math.random()*10)/100);
    if(total>=2){
        bigScale=1;
        FifRsecond.style.scale = 1;
        total = 1;
    }
});
const FifRthird = document.querySelector('.fifth-row-third');
const hardLine = document.querySelector('.hard')
FifRthird.addEventListener("click",function(){
FifRthird.style.rotate=30+'deg'
for(let pp = 0;pp<anyButton.length;pp++){
    anyButton[pp].style.rotate=Math.round(Math.random()*100) + 'deg';
    }
});