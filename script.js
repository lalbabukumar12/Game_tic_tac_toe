let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-Btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turn0=true; // playerX ,playerO

const winPatterns=[
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8],  [2,4,6],
];

const resetGameBtn=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add('hide');
};

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        
        if(turn0){      //playerX
            box.innerText="X";
            turn0=false;
        }else{        //playerO
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();

    });
});

const disabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=false; // FIXED
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let postion1Value=boxes[pattern[0]].innerText;
        let postion2Value=boxes[pattern[1]].innerText;
        let postion3Value=boxes[pattern[2]].innerText;

        if(postion1Value!="" && postion2Value!="" && postion3Value!="" ){
            if(postion1Value===postion2Value && postion2Value===postion3Value){      
                showWinner(postion1Value);
            }
        }
    }
};

const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        box.classList.remove('win-box');    
    });
};

newGameBtn.addEventListener('click',resetGameBtn);
resetBtn.addEventListener('click',resetGame);
