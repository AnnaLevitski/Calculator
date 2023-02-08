let state = 0;   // condition 0 - first num 1 - second num  2 - get and print res 3 - res = a
let a = [];      // first num storage
let b = [];      // second num storage
let tRes = [];   // resolt num storage  
let act;         // action button value storage

//action buttons from buttons 
function getButton(tap){ 
    switch (tap) {
        case 'sum':
            if(state == 2){
                state = 3;
                act = tap;
                console.log(act);
                continueAfterEqals();
                break;
            };
            state = 1; 
            act = tap;
            console.log(act);
            break;
        case 'min':
            if(state == 2){
                state = 3;
                act = tap;
                console.log(act);
                continueAfterEqals();
                break;
            };
            act = tap;
            state = 1;
            console.log(act); 
            break;
        case 'mult':
            if(state == 2){
                state = 3;
                act = tap;
                console.log(act);
                continueAfterEqals();
                break;
            };
            act = tap;
            state = 1; 
            console.log(act);
            break;
        case 'div':
            if(state == 2){
                state = 3;
                act = tap;
                console.log(act);
                continueAfterEqals();
                break;
            };
            act = tap;
            state = 1; 
            console.log(act);
            break;
        case 'point':  
            console.log(tap);
            getNum('.');
            break;
        case 'equal':
            console.log('getButton' + state);
            a = Array.isArray(a) ? Number(a.join('')) : Number(a);
            console.log(a, typeof(a));
            b = Number(b.join(''));
            console.log(b, typeof(b));
            ifEqual(act, a, b);
            state = 2; 
            console.log('getButton' + state);
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
            console.log(a, typeof(a), 'A'); 
            printOnScreen(a);
            break;
        case 1:
            b.push(num);
            console.log(b, typeof(b), 'B'); 
            printOnScreen(b);
            break;
        case 2:
            clean(); 
            a.push(num);
            console.log(a, typeof(a), 'A'); 
            printOnScreen(a);
            break;
        case 3:
            clean();
            b.push(num);
            console.log(b, typeof(b), 'B'); 
            printOnScreen(b);
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
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'min':
            res = a - b;
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'mult':
            res = a * b;
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'div':
            res = a / b;
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            break;
        default :
            printOnScreen('Sorry dude NaN Equal');
            break;
    }
};
// copy value from tRes to a 
function continueAfterEqals(){
    clean();
    a = tRes;
    state = 1;
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




