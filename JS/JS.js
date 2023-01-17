let state = 0;   // condition 0 - first num 1 - second num 2 - get and print res
let a = [];      // first num storage
let b = [];      // second num storage
let act;         // action button value storage

//action buttons from buttons 
function getButton(tap){ 
    switch (tap) {
        case 'sum':
            state = 1; 
            act = tap;
            console.log(act);
            break;
        case 'min':
            act = tap;
            state = 1;
            console.log(act); 
            break;
        case 'mult':
            act = tap;
            state = 1; 
            console.log(act);
            break;
        case 'div':
            act = tap;
            state = 1; 
            console.log(act);
            break;
        case 'point':  
            console.log(tap);
            getNum('.');
            break;
        case 'equal':
            a = Number(a.join(''));
            console.log(a, typeof(a));
            b = Number(b.join(''));
            console.log(b, typeof(b));
            ifEqual(act, a, b);
            state = 2; 
            break;
        default :
        console.log('NaN tap');
            break;
    }
};

//get nuber buttons from buttons 
function getNum(num){
    switch (state) {
        case 0:
            a.push(num);
            console.log(a, typeof(a)); 
            printOnScreen(a);
            break;
        case 1:
            b.push(num);
            console.log(b, typeof(b)); 
            printOnScreen(b);
            break;
        case 2:
            clean(); 
            a.push(num);
            console.log(a, typeof(a)); 
            printOnScreen(a);
            break;
        default :
            console.log('NaN state');
            break;
    }
} 

//run tap =   including calculations
function ifEqual(act, a, b){
    let res;
    switch (act) {
        case 'sum':
            res = a + b;
            console.log(res);
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'min':
            res = a - b;
            console.log(res);
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'mult':
            res = a * b;
            console.log(res);
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'div':
            res = a / b;
            console.log(res);
            printOnScreen(Number(res.toFixed(4)));
            break;
        default :
            printOnScreen('Sorry dude NaN Equal');
            break;
    }
};

// clean vars 
function clean(){
    state = 0;
    a = []; 
    b = []; 
};

//print on the scrin 
function printOnScreen(a){
    let b = (Array.isArray(a)) ? Number(a.join('')) : Number(a);
    let text =document.getElementById('screen');
    text.innerHTML = b;
    
}








