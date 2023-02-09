let state = 0;   // condition 0 - first num 1 - second num  2 - get and print res 3 - res = a
let a = [];      // first num storage
let b = [];      // second num storage
let tRes = [];   // resolt num storage  
let act = 0;         // action button value storage
let queueAct = [];
const enqueue = (item) => queueAct.push(item);  // add to the end queueAct[]
let queueCount = 0;
const board = [];

//board for calculation history
function boardItem (A, Act, B, Res){
    let item = new Object();
    item.a = A;
    item.b = B;
    item.res = Res;
    item.act = (Act == 'sum') ? '+':
                (Act == 'min') ? '-':
                (Act == 'mult') ? '*': '/';
    board.push(item);
    console.log(board);
    let div = document.createElement('div');
    for ( let i = 0 ; i < board.length ; i++ ) {
        div.innerHTML = `${item.a} ${item.act} ${item.b} = ${item.res}<br>`;
    }
    document.getElementById('board').prepend(div);
}

//action buttons from buttons 
function getButton(tap){ 
    if((tap != 'point') && (tap != 'equal')){
        queueCount++;
        console.log('HERE queueCount ' + queueCount);
        enqueue(tap);
        console.log(queueAct);
        console.log('state ' + state);
        if((state !=0) && (state !=2) ){
            console.log('here');

            act = queueAct[queueCount-2];
        }
        else{
            act = tap;
        }
        console.log(act);
    }
    switch (tap) {
        case 'sum':
        case 'min':
        case 'mult':
        case 'div':
            if(state != 0 ){
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
            console.log(a, act, b, res);
            boardItem (a, act, b, res);
            break;
        case 'min':
            res = (a) - (b);
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            boardItem (a, act, b, res);
            break;
        case 'mult':
            res = a * b;
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            boardItem (a, act, b, res);
            break;
        case 'div':
            res = a / b;
            console.log(res);
            tRes = res;
            printOnScreen(Number(res.toFixed(4)));
            boardItem (a, act, b, res);
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







