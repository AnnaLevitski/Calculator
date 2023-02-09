let state = 0;   // condition 0 - first num 1 - second num  2 - get and print res 3 - res = a
let a = [];      // first num storage
let b = [];      // second num storage
let tRes = [];   // resolt num storage  
let act = 0;         // action button value storage
let queueAct = [];
const enqueue = (item) => queueAct.push(item);  // add to the end queueAct[]
let queueCount = 0;

//action buttons from buttons 
function getButton(tap){ 
    if(tap != ('point' && 'equal')){
        queueCount++;
        console.log('queueCount ' + queueCount);
        enqueue(tap);
        console.log(queueAct);
        console.log('state ' + state);
        if(state !=0){
            console.log('here');

            act = queueAct[queueCount-2];
        }
        else{
            act = tap;
        }
        console.log(act);
    }
    switch (act) {
        case 'sum':
        case 'min':
        case 'mult':
        case 'div':
            if(state != 0 ){
                //act = tap; 
                equal();
                continueAfterEqals(); 
                break;
            };
            state = 1; 
            //act = tap;
            break;
        case 'point':  
            getNum('.');
            break;
        case 'equal':
            equal();
            state = 2; 
            break;
        default :
        console.log('NaN tap');
            break;
    }
};

// run ifEqual 
function equal(){
    a = Array.isArray(a) ? Number(a.join('')) : Number(a);
    b = (Array.isArray(b)) ? Number(b.join('')) : Number(b);
    console.log(a, act, b);
    ifEqual(act, a, b);
    state = 2; 
}

//get nuber buttons from buttons 
function getNum(num){
    switch (state) {
        case 0:
        case 2:
            a.push(num);
            //console.log(a, typeof(a), 'getNum A'); 
           // console.log(b, typeof(b), 'getNum B'); 
            printOnScreen(a);
            break;
        case 1:
        case 3:
            b.push(num);
           // console.log(a, typeof(a), 'getNum A'); 
           // console.log(b, typeof(b), 'getNum B'); 
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
            console.log(Number(res.toFixed(4)));
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            break;
        case 'min':
            res = (a) - (b);
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
    state = 3;
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







