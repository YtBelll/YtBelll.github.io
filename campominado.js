alert("o campo minado não esta funcionando corretamente, lamento o transtorno");

let tamanho = 10;
let bombas = [new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho), new Array<Boolean>(tamanho)];
let btn = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)];
btn[0][0] = document.getElementById("l0c0");
btn[0][1] = document.getElementById("l0c1");
btn[0][2] = document.getElementById("l0c2");
btn[0][3] = document.getElementById("l0c3");
btn[0][4] = document.getElementById("l0c4");
btn[0][5] = document.getElementById("l0c5");
btn[0][6] = document.getElementById("l0c6");
btn[0][7] = document.getElementById("l0c7");
btn[0][8] = document.getElementById("l0c8");
btn[0][9] = document.getElementById("l0c9");

btn[1][0] = document.getElementById("l1c0");
btn[1][1] = document.getElementById("l1c1");
btn[1][2] = document.getElementById("l1c2");
btn[1][3] = document.getElementById("l1c3");
btn[1][4] = document.getElementById("l1c4");
btn[1][5] = document.getElementById("l1c5");
btn[1][6] = document.getElementById("l1c6");
btn[1][7] = document.getElementById("l1c7");
btn[1][8] = document.getElementById("l1c8");
btn[1][9] = document.getElementById("l1c9");

btn[2][0] = document.getElementById("l2c0");
btn[2][1] = document.getElementById("l2c1");
btn[2][2] = document.getElementById("l2c2");
btn[2][3] = document.getElementById("l2c3");
btn[2][4] = document.getElementById("l2c4");
btn[2][5] = document.getElementById("l2c5");
btn[2][6] = document.getElementById("l2c6");
btn[2][7] = document.getElementById("l2c7");
btn[2][8] = document.getElementById("l2c8");
btn[2][9] = document.getElementById("l2c9");

btn[3][0] = document.getElementById("l3c0");
btn[3][1] = document.getElementById("l3c1");
btn[3][2] = document.getElementById("l3c2");
btn[3][3] = document.getElementById("l3c3");
btn[3][4] = document.getElementById("l3c4");
btn[3][5] = document.getElementById("l3c5");
btn[3][6] = document.getElementById("l3c6");
btn[3][7] = document.getElementById("l3c7");
btn[3][8] = document.getElementById("l3c8");
btn[3][9] = document.getElementById("l3c9");

btn[4][0] = document.getElementById("l4c0");
btn[4][1] = document.getElementById("l4c1");
btn[4][2] = document.getElementById("l4c2");
btn[4][3] = document.getElementById("l4c3");
btn[4][4] = document.getElementById("l4c4");
btn[4][5] = document.getElementById("l4c5");
btn[4][6] = document.getElementById("l4c6");
btn[4][7] = document.getElementById("l4c7");
btn[4][8] = document.getElementById("l4c8");
btn[4][9] = document.getElementById("l4c9");

btn[5][0] = document.getElementById("l5c0");
btn[5][1] = document.getElementById("l5c1");
btn[5][2] = document.getElementById("l5c2");
btn[5][3] = document.getElementById("l5c3");
btn[5][4] = document.getElementById("l5c4");
btn[5][5] = document.getElementById("l5c5");
btn[5][6] = document.getElementById("l5c6");
btn[5][7] = document.getElementById("l5c7");
btn[5][8] = document.getElementById("l5c8");
btn[5][9] = document.getElementById("l5c9");

btn[6][0] = document.getElementById("l6c0");
btn[6][1] = document.getElementById("l6c1");
btn[6][2] = document.getElementById("l6c2");
btn[6][3] = document.getElementById("l6c3");
btn[6][4] = document.getElementById("l6c4");
btn[6][5] = document.getElementById("l6c5");
btn[6][6] = document.getElementById("l6c6");
btn[6][7] = document.getElementById("l6c7");
btn[6][8] = document.getElementById("l6c8");
btn[6][9] = document.getElementById("l6c9");

btn[7][0] = document.getElementById("l7c0");
btn[7][1] = document.getElementById("l7c1");
btn[7][2] = document.getElementById("l7c2");
btn[7][3] = document.getElementById("l7c3");
btn[7][4] = document.getElementById("l7c4");
btn[7][5] = document.getElementById("l7c5");
btn[7][6] = document.getElementById("l7c6");
btn[7][7] = document.getElementById("l7c7");
btn[7][8] = document.getElementById("l7c8");
btn[7][9] = document.getElementById("l7c9");

btn[8][0] = document.getElementById("l8c0");
btn[8][1] = document.getElementById("l8c1");
btn[8][2] = document.getElementById("l8c2");
btn[8][3] = document.getElementById("l8c3");
btn[8][4] = document.getElementById("l8c4");
btn[8][5] = document.getElementById("l8c5");
btn[8][6] = document.getElementById("l8c6");
btn[8][7] = document.getElementById("l8c7");
btn[8][8] = document.getElementById("l8c8");
btn[8][9] = document.getElementById("l8c9");

btn[9][0] = document.getElementById("l9c0");
btn[9][1] = document.getElementById("l9c1");
btn[9][2] = document.getElementById("l9c2");
btn[9][3] = document.getElementById("l9c3");
btn[9][4] = document.getElementById("l9c4");
btn[9][5] = document.getElementById("l9c5");
btn[9][6] = document.getElementById("l9c6");
btn[9][7] = document.getElementById("l9c7");
btn[9][8] = document.getElementById("l9c8");
btn[9][9] = document.getElementById("l9c9");

let jogando = false;
let ndBombas = 10;
function gerarBombas(n){
    for (let i = 0; i < n; i++){
        let l = Math.floor(Math.random()*tamanho);
        let c = Math.floor(Math.random()*tamanho);

        bombas[l][c]?i--:bombas[l][c] = true;
    }
}
function reiniciar(){
    for(let i = 0;i<tamanho;i++){
        for(let j = 0; j<tamanho;j++){
            bombas[i][j] = false;
            btn[i][j].textContent = "X";
        }
    }
}

function calcular(l,c){
    let count = 0;
    if(l>0){
        if(c>0){
            if(bombas[l-1][c-1]){
                count++;
            }
        }
        if(bombas[l-1][c]){
            count++;
        }
        if(c<tamanho){
            if(bombas[l-1][c+1]){
                count++;
            }
        }
    }
    if(c>0){
        if(bombas[l][c-1]){
            count++;
        }
    }
    if(c<tamanho){
        if(bombas[l][c+1]){
            count++;
        }
    }
    if(l<tamanho){
        if(c>0){
            if(bombas[l+1][c-1]){
                count++;
            }
        }
        if(bombas[l+1][c]){
            count++;
        }
        if(c<tamanho){
            if(bombas[l+1][c+1]){
                count++;
            }
        }
    }
    return count;
}

function mostrar(l,c){
    if(jogando){
        if(bombas[l][c]){
            alert("perdeu");
        }else{
            btn[l][c].textContent = ""+calcular(l,c);
        }
        if(btn[l][c].textContent == 0){
            if(l>0){
                if(c>0){
                    if(btn[l-1][c-1].textContent == "X"){
                        mostrar(l-1,c-1);
                    }
                }
                if(btn[l-1][c].textContent == "X"){
                    mostrar(l-1,c);
                }
                if(c<tamanho){
                    if(btn[l-1][c+1].textContent == "X"){
                        mostrar(l-1,c+1);
                    }
                }
            }
            if(c>0){
                if(btn[l][c-1].textContent == "X"){
                    mostrar(l,c-1);
                }
            }
            if(c<tamanho){
                if(btn[l][c+1].textContent == "X"){
                    mostrar(l,c+1);
                }
            }
            if(l<tamanho){
                if(c>0){
                    if(btn[l+1][c-1].textContent == "X"){
                        mostrar(l+1,c-1);
                    }
                }
                if(btn[l+1][c].textContent == "X"){
                    mostrar(l+1,c);
                }
                if(c<tamanho){
                    if(btn[l+1][c+1].textContent == "X"){
                        mostrar(l+1,c+1);
                    }
                }
            }
        }
    }
}

function newgame(){
    alert("NEW GAME");
    reiniciar();
    gerarBombas(ndBombas);
    jogando=true;
}

function clicL0C0(){
    mostrar(0,0);
}
function clicL0C1(){
    mostrar(0,1);
}
function clicL0C2(){
    mostrar(0,2);
}
function clicL0C3(){
    mostrar(0,3);
}
function clicL0C4(){
    mostrar(0,4);
}
function clicL0C5(){
    mostrar(0,5);
}
function clicL0C6(){
    mostrar(0,6);
}
function clicL0C7(){
    mostrar(0,7);
}
function clicL0C8(){
    mostrar(0,8);
}
function clicL0C9(){
    mostrar(0,9);
}

function clicL1C0(){
    mostrar(1,0);
}
function clicL1C1(){
    mostrar(1,1);
}
function clicL1C2(){
    mostrar(1,2);
}
function clicL1C3(){
    mostrar(1,3);
}
function clicL1C4(){
    mostrar(1,4);
}
function clicL1C5(){
    mostrar(1,5);
}
function clicL1C6(){
    mostrar(1,6);
}
function clicL1C7(){
    mostrar(1,7);
}
function clicL1C8(){
    mostrar(1,8);
}
function clicL1C9(){
    mostrar(1,9);
}

function clicL2C0(){
    mostrar(2,0);
}
function clicL2C1(){
    mostrar(2,1);
}
function clicL2C2(){
    mostrar(2,2);
}
function clicL2C3(){
    mostrar(2,3);
}
function clicL2C4(){
    mostrar(2,4);
}
function clicL2C5(){
    mostrar(2,5);
}
function clicL2C6(){
    mostrar(2,6);
}
function clicL2C7(){
    mostrar(2,7);
}
function clicL2C8(){
    mostrar(2,8);
}
function clicL2C9(){
    mostrar(2,9);
}

function clicL3C0(){
    mostrar(3,0);
}
function clicL3C1(){
    mostrar(3,1);
}
function clicL3C2(){
    mostrar(3,2);
}
function clicL3C3(){
    mostrar(3,3);
}
function clicL3C4(){
    mostrar(3,4);
}
function clicL3C5(){
    mostrar(3,5);
}
function clicL3C6(){
    mostrar(3,6);
}
function clicL3C7(){
    mostrar(3,7);
}
function clicL3C8(){
    mostrar(3,8);
}
function clicL3C9(){
    mostrar(3,9);
}

function clicL4C0(){
    mostrar(4,0);
}
function clicL4C1(){
    mostrar(4,1);
}
function clicL4C2(){
    mostrar(4,2);
}
function clicL4C3(){
    mostrar(4,3);
}
function clicL4C4(){
    mostrar(4,4);
}
function clicL4C5(){
    mostrar(4,5);
}
function clicL4C6(){
    mostrar(4,6);
}
function clicL4C7(){
    mostrar(4,7);
}
function clicL4C8(){
    mostrar(4,8);
}
function clicL4C9(){
    mostrar(4,9);
}

function clicL5C0(){
    mostrar(5,0);
}
function clicL5C1(){
    mostrar(5,1);
}
function clicL5C2(){
    mostrar(5,2);
}
function clicL5C3(){
    mostrar(5,3);
}
function clicL5C4(){
    mostrar(5,4);
}
function clicL5C5(){
    mostrar(5,5);
}
function clicL5C6(){
    mostrar(5,6);
}
function clicL5C7(){
    mostrar(5,7);
}
function clicL5C8(){
    mostrar(5,8);
}
function clicL5C9(){
    mostrar(5,9);
}

function clicL6C0(){
    mostrar(6,0);
}
function clicL6C1(){
    mostrar(6,1);
}
function clicL6C2(){
    mostrar(6,2);
}
function clicL6C3(){
    mostrar(6,3);
}
function clicL6C4(){
    mostrar(6,4);
}
function clicL6C5(){
    mostrar(6,5);
}
function clicL6C6(){
    mostrar(6,6);
}
function clicL6C7(){
    mostrar(6,7);
}
function clicL6C8(){
    mostrar(6,8);
}
function clicL6C9(){
    mostrar(6,9);
}

function clicL7C0(){
    mostrar(7,0);
}
function clicL7C1(){
    mostrar(7,1);
}
function clicL7C2(){
    mostrar(7,2);
}
function clicL7C3(){
    mostrar(7,3);
}
function clicL7C4(){
    mostrar(7,4);
}
function clicL7C5(){
    mostrar(7,5);
}
function clicL7C6(){
    mostrar(7,6);
}
function clicL7C7(){
    mostrar(7,7);
}
function clicL7C8(){
    mostrar(7,8);
}
function clicL7C9(){
    mostrar(7,9);
}

function clicL8C0(){
    mostrar(8,0);
}
function clicL8C1(){
    mostrar(8,1);
}
function clicL8C2(){
    mostrar(8,2);
}
function clicL8C3(){
    mostrar(8,3);
}
function clicL8C4(){
    mostrar(8,4);
}
function clicL8C5(){
    mostrar(8,5);
}
function clicL8C6(){
    mostrar(8,6);
}
function clicL8C7(){
    mostrar(8,7);
}
function clicL8C8(){
    mostrar(8,8);
}
function clicL8C9(){
    mostrar(8,9);
}

function clicL9C0(){
    mostrar(9,0);
}
function clicL9C1(){
    mostrar(9,1);
}
function clicL9C2(){
    mostrar(9,2);
}
function clicL9C3(){
    mostrar(9,3);
}
function clicL9C4(){
    mostrar(9,4);
}
function clicL9C5(){
    mostrar(9,5);
}
function clicL9C6(){
    mostrar(9,6);
}
function clicL9C7(){
    mostrar(9,7);
}
function clicL9C8(){
    mostrar(9,8);
}
function clicL9C9(){
    mostrar(9,9);
}

