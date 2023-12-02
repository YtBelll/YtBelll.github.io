let btn = [new Array(3),new Array(3),new Array(3)];
btn[0][0] = document.getElementById("l1c1");
btn[0][1] = document.getElementById("l1c2");
btn[0][2] = document.getElementById("l1c3");
btn[1][0] = document.getElementById("l2c1");
btn[1][1] = document.getElementById("l2c2");
btn[1][2] = document.getElementById("l2c3");
btn[2][0] = document.getElementById("l3c1");
btn[2][1] = document.getElementById("l3c2");
btn[2][2] = document.getElementById("l3c3");

let vez = 0;

let gamemode = true;
let btnGM = document.getElementById("mudagamemode");
let jogando = true;


function reiniciar(){
    vez = 0;
    jogando = true;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            btn[i][j].textContent = "";
        }
    }
}

function mudagamemode(){
    gamemode = !gamemode;
    gamemode?btnGM.textContent=" mudar para dois jogadores":btnGM.textContent="jogar contra o sistema";
    reiniciar();
}
function validar(){
    if(
        //linhas
        (btn[0][0].textContent == "X" && 
        btn[0][1].textContent == "X" && 
        btn[0][2].textContent == "X") ||
        (btn[1][0].textContent == "X" && 
        btn[1][1].textContent == "X" && 
        btn[1][2].textContent == "X") ||
        (btn[2][0].textContent == "X" && 
        btn[2][1].textContent == "X" && 
        btn[2][2].textContent == "X") ||
        //colunas
        (btn[0][0].textContent == "X" && 
        btn[1][0].textContent == "X" && 
        btn[2][0].textContent == "X") ||
        (btn[0][1].textContent == "X" && 
        btn[1][1].textContent == "X" && 
        btn[2][1].textContent == "X") ||
        (btn[0][2].textContent == "X" && 
        btn[1][2].textContent == "X" && 
        btn[2][2].textContent == "X") ||
        //diagonais
        (btn[0][0].textContent == "X" && 
        btn[1][1].textContent == "X" && 
        btn[2][2].textContent == "X") ||
        (btn[2][0].textContent == "X" && 
        btn[1][1].textContent == "X" && 
        btn[0][2].textContent == "X")
    ){
        alert("X venceu");
        jogando = false;
    } else if(//linhas
    (btn[0][0].textContent == "O" && 
    btn[0][1].textContent == "O" && 
    btn[0][2].textContent == "O") ||
    (btn[1][0].textContent == "O" && 
    btn[1][1].textContent == "O" && 
    btn[1][2].textContent == "O") ||
    (btn[2][0].textContent == "O" && 
    btn[2][1].textContent == "O" && 
    btn[2][2].textContent == "O") ||
    //colunas
    (btn[0][0].textContent == "O" && 
    btn[1][0].textContent == "O" && 
    btn[2][0].textContent == "O") ||
    (btn[0][1].textContent == "O" && 
    btn[1][1].textContent == "O" && 
    btn[2][1].textContent == "O") ||
    (btn[0][2].textContent == "O" && 
    btn[1][2].textContent == "O" && 
    btn[2][2].textContent == "O") ||
    //diagonais
    (btn[0][0].textContent == "O" && 
    btn[1][1].textContent == "O" && 
    btn[2][2].textContent == "O") ||
    (btn[2][0].textContent == "O" && 
    btn[1][1].textContent == "O" && 
    btn[0][2].textContent == "O")
    ){
        alert("O venceu");
        jogando = false;
    } else if (vez > 8){
        alert("VELHA!!!!!!");
        jogando = false;
    }
}

function marcar(caixa){
    
    if (caixa.textContent != "X" && caixa.textContent != "O" && jogando){
        vez%2==0?caixa.textContent="X":caixa.textContent="O";
        vez++;
        validar();
        if (gamemode){
            switch (vez){ // tem uns erros aqui
                case 1: //funcionando bem
                    if (btn[1][1].textContent == "X"){
                        switch(Math.floor(Math.random() * 4)){
                            case 0:
                                btn[0][0].textContent = "O";
                            break;
                            case 1:
                                btn[2][0].textContent = "O";
                            break;
                            case 2:
                                btn[0][2].textContent = "O";
                            break;
                            case 3:
                                btn[2][2].textContent = "O";
                            break;
                        }
                    } else {
                        btn[1][1].textContent="O";
                    }
                break;
                case 3: // parece que funciona
                    if(btn[1][1].textContent == "X"){
                        if(btn[0][0].textContent == "O"){
                            if(btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if(btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if(btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if(btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if(btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else if(btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else if(btn[2][2].textContent == "X"){
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[2][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[0][2].textContent = "O";
                                    break;
                                }
                            }

                        } else if(btn[2][0].textContent == "O"){
                            if(btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if(btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if(btn[0][2].textContent == "X"){
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[0][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[2][2].textContent = "O";
                                    break;
                                }
                            } else if(btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if(btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if(btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else if(btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O"; 
                            }
                        } else if(btn[0][2].textContent == "O"){
                            if(btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if(btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if(btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if(btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if(btn[2][0].textContent == "X"){
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[0][0].textContent = "O";
                                    break; 
                                    case 1:
                                        btn[2][2].textContent = "O";
                                    break;
                                }
                            } else if(btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else if(btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O";
                            }

                        } else if(btn[2][2].textContent == "O"){
                            if(btn[0][0].textContent == "X"){
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[2][0].textContent = "O"; 
                                    break;
                                    case 1:
                                        btn[0][2].textContent = "O";
                                    break;
                                }
                            } else if(btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if(btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if(btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if(btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if(btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else if(btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            }
                        }
                    } else if(btn[0][0].textContent == "X"){
                        if(btn[0][1].textContent == "X"){
                            btn[0][2].textContent = "O";
                        } else if(btn[0][2].textContent == "X"){
                            btn[0][1].textContent = "O";
                        } else if(btn[1][0].textContent == "X"){
                            btn[2][0].textContent = "O";
                        } else if(btn[1][2].textContent == "X"){
                            btn[2][2].textContent = "O";
                        } else if(btn[2][0].textContent == "X"){
                            btn[1][0].textContent = "O";
                        } else if(btn[2][1].textContent == "X"){
                            btn[2][2].textContent = "O";
                        } else if(btn[2][2].textContent == "X"){
                            switch(Math.floor(Math.random() * 4)){
                                case 0:
                                    btn[1][2].textContent = "O";
                                break;
                                case 1:
                                    btn[2][1].textContent = "O";
                                break;
                                case 2:
                                    btn[1][0].textContent = "O";
                                break;
                                case 3:
                                    btn[0][1].textContent = "O";
                                break;
                            }
                        }
                    } else if(btn[0][1].textContent == "X"){
                        if(btn[0][2].textContent == "X"){
                            btn[0][0].textContent = "O";
                        } else if(btn[1][0].textContent == "X"){
                            btn[0][0].textContent = "O";
                        } else if(btn[1][2].textContent == "X"){
                            btn[0][2].textContent = "O";
                        } else if(btn[2][0].textContent == "X"){
                            btn[0][2].textContent = "O";
                        } else if(btn[2][1].textContent == "X"){
                            switch(Math.floor(Math.random() * 6)){
                                case 0:
                                    btn[0][0].textContent = "O";
                                break;
                                case 1:
                                    btn[0][2].textContent = "O";
                                break;
                                case 2:
                                    btn[1][0].textContent = "O";
                                break;
                                case 3:
                                    btn[1][2].textContent = "O";
                                break;
                                case 4:
                                    btn[2][0].textContent = "O";
                                break;
                                case 5:
                                    btn[2][2].textContent = "O";
                                break;
                            }
                        } else if(btn[2][2].textContent == "X"){
                            btn[0][0].textContent = "O";
                        }
                    } else if(btn[0][2].textContent == "X"){
                        if(btn[1][0].textContent == "X"){
                            btn[2][0].textContent = "O";
                        } else if(btn[1][2].textContent == "X"){
                            btn[2][2].textContent = "O";
                        } else if(btn[2][0].textContent == "X"){
                            switch(Math.floor(Math.random() * 4)){
                                case 0:
                                    btn[1][2].textContent = "O";
                                break;
                                case 1:
                                    btn[2][1].textContent = "O";
                                break;
                                case 2:
                                    btn[1][0].textContent = "O";
                                break;
                                case 3:
                                    btn[0][1].textContent = "O";
                                break;
                            }
                        } else if(btn[2][1].textContent == "X"){
                            btn[2][0].textContent = "O";
                        } else if(btn[2][2].textContent == "X"){
                            btn[1][2].textContent = "O";
                        }
                    } else if(btn[1][0].textContent == "X"){
                        if(btn[1][2].textContent == "X"){
                            switch(Math.floor(Math.random() * 6)){
                                case 0:
                                    btn[0][0].textContent = "O";
                                break;
                                case 1:
                                    btn[0][1].textContent = "O";
                                break;
                                case 2:
                                    btn[0][2].textContent = "O";
                                break;
                                case 3:
                                    btn[2][0].textContent = "O";
                                break;
                                case 4:
                                    btn[2][1].textContent = "O";
                                break;
                                case 5:
                                    btn[2][2].textContent = "O";
                                break;
                            }
                        } else if(btn[2][0].textContent == "X"){
                            btn[0][0].textContent = "O";
                        } else if(btn[2][1].textContent == "X"){
                            btn[2][0].textContent = "O";
                        } else if(btn[2][2].textContent == "X"){
                            btn[0][0].textContent = "O";
                        }
                    } else if(btn[1][2].textContent == "X"){
                        if(btn[2][0].textContent == "X"){
                            btn[0][2].textContent = "O";
                        } else if(btn[2][1].textContent == "X"){
                            btn[2][2].textContent = "O";
                        } else if(btn[2][2].textContent == "X"){
                            btn[0][2].textContent = "O";
                        }
                    } else if(btn[2][0].textContent == "X"){
                        if(btn[2][1].textContent == "X"){
                            btn[2][2].textContent = "O";
                        } else if(btn[2][2].textContent == "X"){
                            btn[2][1].textContent = "O";
                        }
                    } else {
                        btn[2][0].textContent = "O";
                    }
                break;
                case 5: // tambem parece funcionar
                    if (btn[1][1].textContent == "O"){ //totamlmente verificado, funciona perfeitamente
                        if (btn[0][0].textContent == "O"){
                            if (btn[2][2].textContent == "X"){
                                if (btn[0][2].textContent == "X"){
                                    btn[1][2].textContent = "O";
                                } else if (btn[1][2].textContent == "X"){
                                    btn[0][2].textContent = "O";
                                } else if (btn[2][0].textContent == "X"){
                                    btn[2][1].textContent = "O";
                                } else if (btn[2][1].textContent == "X"){
                                    btn[2][0].textContent = "O";
                                } else {
                                    switch(Math.floor(Math.random() * 2)){
                                        case 0:
                                            btn[0][2].textContent = "O";
                                        break;
                                        case 1:
                                            btn[2][0].textContent = "O";
                                        break;
                                    }
                                }
                            } else {
                                btn[2][2].textContent = "O";
                            }

                        }else if (btn[0][1].textContent == "O"){
                            if(btn[2][1].textContent == "X"){
                                if(btn[2][0].textContent == "X"){
                                    btn[2][2].textContent = "O";
                                } else if(btn[2][2].textContent == "X"){
                                    btn[2][0].textContent = "O";    
                                } else if(btn[0][0].textContent == "X"){
                                    if(btn[0][2].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[1][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[1][2].textContent = "O";
                                            break;
                                        }
                                    } else if(btn[1][0].textContent == "X"){
                                        btn[2][0].textContent = "O";
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[2][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    }

                                } else if(btn[0][2].textContent == "X"){
                                    if(btn[1][0].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[2][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        btn[2][2].textContent = "O";
                                    }
                                } else{
                                    switch(Math.floor(Math.random() * 2)){
                                        case 0:
                                            btn[0][0].textContent = "O";
                                        break;
                                        case 1:
                                            btn[0][2].textContent = "O";
                                        break;
                                    }
                                }
                            } else{
                                btn[2][1].textContent = "O";
                            }
                        }else if (btn[0][2].textContent == "O"){
                            if (btn[2][0].textContent == "X"){
                                if (btn[0][0].textContent == "X"){
                                    btn[1][0].textContent = "O";
                                } else if (btn[1][0].textContent == "X"){
                                    btn[0][0].textContent = "O";
                                } else if (btn[2][1].textContent == "X"){
                                    btn[2][2].textContent = "O";
                                } else if (btn[2][2].textContent == "X"){
                                    btn[2][1].textContent = "O";
                                } else {
                                    switch(Math.floor(Math.random() *2)){
                                        case 0:
                                            btn[0][0].textContent = "O";
                                        break;
                                        case 1:
                                            btn[2][2].textContent = "O";
                                        break;
                                    }
                                }
                            } else {
                                btn[2][0].textContent = "O";
                            }
                        }else if (btn[1][0].textContent == "O"){
                            if(btn[1][2].textContent == "X"){
                                if(btn[0][2].textContent == "X"){
                                    btn[2][2].textContent = "O";
                                } else if(btn[2][2].textContent == "X"){
                                    btn[0][2].textContent = "O";    
                                } else if(btn[0][0].textContent == "X"){
                                    if(btn[0][1].textContent == "X"){
                                        btn[0][2].textContent = "O";
                                    } else if(btn[2][0].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][1].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][1].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][2].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    }

                                } else if(btn[0][1].textContent == "X"){
                                    if(btn[2][0].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][2].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[0][2].textContent = "O";
                                            break;
                                        }
                                    }
                                } else{
                                    btn[2][2].textContent = "O";
                                }
                            } else{
                                btn[1][2].textContent = "O";
                            }
                        }else if (btn[1][2].textContent == "O"){
                            if(btn[1][0].textContent == "X"){
                                if(btn[0][0].textContent == "X"){
                                    btn[2][0].textContent = "O";
                                } else if(btn[2][0].textContent == "X"){
                                    btn[0][0].textContent = "O";    
                                } else if(btn[0][1].textContent == "X"){
                                    if(btn[0][2].textContent == "X"){
                                        btn[0][0].textContent = "O";
                                    } else if(btn[2][1].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][2].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][0].textContent = "O";
                                            break;
                                        }
                                    }

                                } else if(btn[0][2].textContent == "X"){
                                    if(btn[2][1].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][0].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][1].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][1].textContent = "O";
                                            break;
                                        }
                                    }
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else{
                                btn[1][0].textContent = "O";
                            }
                        }else if (btn[2][0].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                if (btn[0][0].textContent == "X"){
                                    btn[0][1].textContent = "O";
                                } else if (btn[0][1].textContent == "X"){
                                    btn[0][0].textContent = "O";
                                } else if (btn[1][2].textContent == "X"){
                                    btn[2][2].textContent = "O";
                                } else if (btn[2][2].textContent == "X"){
                                    btn[1][2].textContent = "O";
                                } else {
                                    switch(Math.floor(Math.random() *2)){
                                        case 0:
                                            btn[0][0].textContent = "O";
                                        break;
                                        case 1:
                                            btn[2][2].textContent = "O";
                                        break;
                                    }
                                }
                            } else {
                                btn[0][2].textContent = "O";
                            }
                        }else if (btn[2][1].textContent == "O"){
                            if(btn[0][1].textContent == "X"){
                                if(btn[0][0].textContent == "X"){
                                    btn[0][2].textContent = "O";
                                } else if(btn[0][2].textContent == "X"){
                                    btn[0][0].textContent = "O";    
                                } else if(btn[1][0].textContent == "X"){
                                    if(btn[1][2].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[2][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[2][2].textContent = "O";
                                            break;
                                        }
                                    } else if(btn[2][0].textContent == "X"){
                                        btn[0][0].textContent = "O";
                                    } else {
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[0][2].textContent = "O";
                                            break;
                                        }
                                    }

                                } else if(btn[1][2].textContent == "X"){
                                    if(btn[2][0].textContent == "X"){
                                        switch(Math.floor(Math.random() * 2)){
                                            case 0:
                                                btn[0][0].textContent = "O";
                                            break;
                                            case 1:
                                                btn[0][2].textContent = "O";
                                            break;
                                        }
                                    } else {
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    switch(Math.floor(Math.random() * 2)){
                                        case 0:
                                            btn[1][0].textContent = "O";
                                        break;
                                        case 1:
                                            btn[1][2].textContent = "O";
                                        break;
                                    }
                                }
                            } else{
                                btn[0][1].textContent = "O";
                            }
                        }else{
                            if (btn[0][0].textContent == "X"){
                                if (btn[0][1].textContent == "X"){
                                    btn[0][2].textContent = "O";
                                } else if (btn[0][2].textContent == "X"){
                                    btn[0][1].textContent = "O";
                                } else if (btn[1][0].textContent == "X"){
                                    btn[2][0].textContent = "O";
                                } else if (btn[2][0].textContent == "X"){
                                    btn[1][0].textContent = "O";
                                } else {
                                    switch(Math.floor(Math.random() *2)){
                                        case 0:
                                            btn[0][2].textContent = "O";
                                        break;
                                        case 1:
                                            btn[2][0].textContent = "O";
                                        break;
                                    }
                                }
                            } else {
                                btn[0][0].textContent = "O";
                            }

                        }
                    } else if (btn[0][0].textContent == "O"){
                        if (btn[0][1].textContent == "O"){
                            btn[0][2].textContent == "X"?btn[2][0].textContent = "O":btn[0][2].textContent = "O";
                        } else if (btn[0][2].textContent == "O"){
                            btn[0][1].textContent == "X"?btn[2][1].textContent = "O":btn[0][1].textContent = "O"; 
                        } else if (btn[1][0].textContent == "O"){
                            btn[2][0].textContent == "X"?btn[0][2].textContent = "O":btn[2][0].textContent = "O"; 
                        } else if (btn[1][2].textContent == "O"){
                            if (btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if (btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if (btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else if (btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:btn[0][1].textContent = "O";
                                    break;
                                    case 1:
                                        btn[0][2].textContent = "O";
                                    break;
                                }
                            }
                        } else if (btn[2][0].textContent == "O"){
                            btn[1][0].textContent == "X"?btn[1][2].textContent = "O":btn[1][0].textContent = "O"; 
                        } else if (btn[2][1].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if (btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if (btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if (btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[1][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[2][0].textContent = "O";
                                    break;
                                }
                            }
                        } else {
                            if (btn[0][1].textContent != "X"){
                                btn[0][1].textContent = "O";
                            } else if (btn[0][2].textContent != "X"){
                                btn[0][2].textContent = "O";
                            } else {
                                btn[2][0].textContent = "O";
                            }
                        }
                    } else if (btn[0][2].textContent == "O"){
                        if (btn[0][0].textContent == "O"){
                            btn[0][1].textContent == "X"?btn[2][1].textContent = "O":btn[0][1].textContent = "O";
                        } else if (btn[0][1].textContent == "O"){
                            btn[0][0].textContent == "X"?btn[2][2].textContent = "O":btn[0][0].textContent = "O"; 
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if (btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if (btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else if (btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[0][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[0][1].textContent = "O";
                                    break;
                                }
                            }
                        } else if (btn[1][2].textContent == "O"){
                            btn[2][2].textContent == "X"?btn[0][0].textContent = "O":btn[2][2].textContent = "O"; 
                        } else if (btn[2][0].textContent == "O"){
                            if (btn[0][0].textContent != "X"){
                                btn[0][0].textContent = "O";
                            } else if (btn[0][1].textContent != "X"){
                                btn[0][1].textContent = "O";
                            } else {
                                btn[1][0].textContent = "O";
                            }
                        } else if (btn[2][1].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if (btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if (btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if (btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[1][2].textContent = "O";
                                    break;
                                    case 1:
                                        btn[2][2].textContent = "O";
                                    break;
                                }
                            }
                        } else {
                            btn[1][2].textContent == "X"?btn[1][0].textContent = "O":btn[1][2].textContent = "O"; 
                        }
                    } else if (btn[2][0].textContent == "O"){
                        if (btn[0][0].textContent == "O"){
                            btn[1][0].textContent == "X"?btn[1][2].textContent = "O":btn[1][0].textContent = "O";
                        } else if (btn[0][1].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if (btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if (btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if (btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[0][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[1][0].textContent = "O";
                                    break;
                                }
                            }
                        } else if (btn[0][2].textContent == "O"){
                            if (btn[0][0].textContent != "X"){
                                btn[0][0].textContent = "O";
                            } else if (btn[0][1].textContent != "X"){
                                btn[0][1].textContent = "O";
                            } else {
                                btn[1][0].textContent = "O";
                            }
                        } else if (btn[1][0].textContent == "O"){
                            btn[0][0].textContent == "X"?btn[2][2].textContent = "O":btn[0][0].textContent = "O"; 
                        } else if (btn[1][2].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                btn[2][2].textContent = "O";
                            } else if (btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if (btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if (btn[2][2].textContent == "X"){
                                btn[0][0].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[2][1].textContent = "O";
                                    break;
                                    case 1:
                                        btn[2][2].textContent = "O";
                                    break;
                                }
                            }
                        } else if (btn[2][1].textContent == "O"){
                            btn[2][2].textContent == "X"?btn[0][0].textContent = "O":btn[2][2].textContent = "O"; 
                        } else {
                            btn[2][1].textContent == "X"?btn[0][1].textContent = "O":btn[2][1].textContent = "O"; 
                        }
                    } else {
                        if (btn[0][0].textContent == "O"){
                            if (btn[0][1].textContent != "X"){
                                btn[0][1].textContent = "O";
                            } else if (btn[0][2].textContent != "X"){
                                btn[0][2].textContent = "O";
                            } else {
                                btn[2][0].textContent = "O";
                            }
                        }else if (btn[0][1].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if (btn[1][0].textContent == "X"){
                                btn[1][2].textContent = "O";
                            } else if (btn[1][2].textContent == "X"){
                                btn[1][0].textContent = "O";
                            } else if (btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[0][2].textContent = "O";
                                    break;
                                    case 1:
                                        btn[1][2].textContent = "O";
                                    break;
                                }
                            }
                        } else if (btn[0][2].textContent == "O"){
                            btn[1][2].textContent == "X"?btn[1][0].textContent = "O":btn[1][2].textContent = "O"; 
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[0][1].textContent == "X"){
                                btn[2][1].textContent = "O";
                            } else if (btn[0][2].textContent == "X"){
                                btn[2][0].textContent = "O";
                            } else if (btn[2][0].textContent == "X"){
                                btn[0][2].textContent = "O";
                            } else if (btn[2][1].textContent == "X"){
                                btn[0][1].textContent = "O";
                            } else{
                                switch(Math.floor(Math.random() * 2)){
                                    case 0:
                                        btn[2][0].textContent = "O";
                                    break;
                                    case 1:
                                        btn[2][1].textContent = "O";
                                    break;
                                }
                            } 
                        } else if (btn[1][2].textContent == "O"){
                            btn[0][2].textContent == "X"?btn[2][0].textContent = "O":btn[0][2].textContent = "O";
                        } else if (btn[2][0].textContent == "O"){
                            btn[2][1].textContent == "X"?btn[0][1].textContent = "O":btn[2][1].textContent = "O"; 
                        } else {
                            btn[2][0].textContent == "X"?btn[0][2].textContent = "O":btn[2][0].textContent = "O";
                        }
                    }
                break;
                case 7: // funciona bem
                    if(btn[1][1].textContent == "O"){
                        if (btn[0][0].textContent == "O"){
                            if (btn[2][2].textContent == "X"){
                                if (btn[0][1].textContent == "O"){
                                    if(btn[0][2].textContent == "X"){
                                        if(btn[2][1].textContent == "X"){
                                            // nem é pra chegar aqui, mas depois eu vejo
                                        } else {
                                            btn[2][1].textContent = "O"; 
                                        }   
                                    } else {
                                        btn[0][2].textContent = "O"; 
                                    }
                                } else if (btn[0][2].textContent == "O"){
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[2][0].textContent == "X"){
                                            btn[2][1].textContent = "O";
                                        } else {
                                            btn[2][0].textContent = "O"; 
                                        }
                                    } else {
                                        btn[0][1].textContent = "O"; 
                                    }
                                } else if (btn[1][0].textContent == "O"){
                                    if(btn[1][2].textContent == "X"){
                                        if(btn[2][0].textContent == "X"){
                                            // tbm n é pra chegar aqui n ó
                                        } else {
                                            btn[2][0].textContent = "O"; 
                                        }
                                    } else {
                                        btn[1][2].textContent = "O"; 
                                    }
                                } else if (btn[1][2].textContent == "O"){
                                    if(btn[1][0].textContent == "X"){
                                        if(btn[2][1].textContent == "X"){
                                            btn[2][0].textContent = "O"; 
                                        } else {
                                            btn[2][1].textContent = "O"; 
                                        }
                                    } else {
                                        btn[1][0].textContent = "O"; 
                                    }
                                } else if (btn[2][0].textContent == "O"){
                                    if(btn[0][2].textContent == "X"){
                                        if(btn[1][0].textContent == "X"){
                                            btn[1][2].textContent = "O"; 
                                        } else {
                                            btn[1][0].textContent = "O"; 
                                        }
                                    } else {
                                        btn[0][2].textContent = "O"; 
                                    }
                                } else { //2,1
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[1][2].textContent == "X"){
                                            btn[0][2].textContent = "O"; 
                                        } else {
                                            btn[1][2].textContent = "O"; 
                                        }
                                    } else {
                                        btn[0][1].textContent = "O"; 
                                    }
                                }
                            } else {
                                btn[2][2].textContent = "O";
                            }
                        } else if (btn[0][1].textContent == "O"){
                            if(btn[2][1].textContent == "X"){    
                                if (btn[0][2].textContent == "O"){
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[2][0].textContent == "X"){
                                            //não é pra chegar aqui.
                                        } else{
                                            btn[2][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                } else if (btn[1][0].textContent == "O"){
                                    if(btn[1][2].textContent == "X"){
                                        if(btn[2][2].textContent == "X"){
                                            btn[0][2].textContent = "O";
                                        } else{
                                            btn[2][2].textContent = "O";
                                        }
                                    } else{
                                        btn[1][2].textContent = "O";
                                    }
                                } else if (btn[1][2].textContent == "O"){
                                    if(btn[1][0].textContent == "X"){
                                        if(btn[2][0].textContent == "X"){
                                            btn[0][0].textContent = "O";
                                        } else{
                                            btn[2][0].textContent = "O";
                                        }
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else if (btn[2][0].textContent == "O"){
                                    if(btn[0][2].textContent == "X"){
                                        if(btn[1][2].textContent == "X"){
                                            btn[2][2].textContent = "O";
                                        } else{
                                            btn[1][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[1][0].textContent == "X"){
                                            btn[2][0].textContent = "O";
                                        } else{
                                            btn[1][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                }
                            } else{
                                btn[2][1].textContent = "O";
                            }
                    
                        } else if (btn[0][2].textContent == "O"){
                            if (btn[2][0].textContent == "X"){    
                                if (btn[1][0].textContent == "O"){
                                    if(btn[1][2].textContent == "X"){
                                        if(btn[2][1].textContent == "X"){
                                            btn[2][2].textContent = "O";
                                        } else{
                                            btn[2][1].textContent = "O";
                                        }
                                    } else{
                                        btn[1][2].textContent = "O";
                                    }
                                } else if (btn[1][2].textContent == "O"){
                                    if(btn[1][0].textContent == "X"){
                                        if(btn[2][2].textContent == "X"){
                                            // num é pra chegar aqui
                                        } else{
                                            btn[2][2].textContent = "O";
                                        }
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else if (btn[2][1].textContent == "O"){
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[1][0].textContent == "X"){
                                            btn[0][0].textContent = "O";
                                        } else{
                                            btn[1][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[1][2].textContent == "X"){
                                            btn[1][0].textContent = "O";
                                        } else{
                                            btn[1][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                }
                            } else{
                                btn[2][0].textContent = "O";
                            }
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[1][2].textContent == "X"){
                                if (btn[2][0].textContent == "O"){
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[0][2].textContent == "X"){
                                            //n era pra isso acontecer
                                        } else{
                                            btn[0][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                } else if (btn[2][1].textContent == "O"){
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[0][2].textContent == "X"){
                                            btn[0][0].textContent = "O";
                                        } else{
                                            btn[0][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[0][1].textContent == "X"){
                                            btn[0][2].textContent = "O";
                                        } else{
                                            btn[0][1].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                }
                            } else{
                                btn[1][2].textContent = "O";
                            }
                        } else if (btn[1][2].textContent == "O"){
                            if(btn[1][0].textContent == "X"){
                                if (btn[2][0].textContent == "O"){
                                    if(btn[0][2].textContent == "X"){
                                        if(btn[0][1].textContent == "X"){
                                            btn[0][0].textContent = "O";
                                        } else{
                                            btn[0][1].textContent = "O";
                                        }
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else if (btn[2][1].textContent == "O"){
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[0][0].textContent == "X"){
                                            btn[0][2].textContent = "O";
                                        } else{
                                            btn[0][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[0][2].textContent == "X"){
                                            //n era....
                                        } else{
                                            btn[0][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                }
                            } else{
                                btn[1][0].textContent = "O";
                            }
                        } else if (btn[2][0].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                if (btn[2][1].textContent == "O"){
                                    if(btn[0][1].textContent == "X"){
                                        if(btn[2][2].textContent == "X"){
                                            //n era....
                                        } else{
                                            btn[2][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    if(btn[0][0].textContent == "X"){
                                        if(btn[2][1].textContent == "X"){
                                            btn[0][1].textContent = "O";
                                        } else{
                                            btn[2][1].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                }
                            } else{
                                btn[0][2].textContent =  "O";
                            }
                        } else{
                            if(btn[0][0].textContent == "X"){
                                if(btn[0][1].textContent == "X"){
                                    if(btn[2][0].textContent == "X"){
                                        //ja sabe ne....
                                    } else {
                                        btn[2][0].textContent = "O";
                                    }
                                } else {
                                    btn[0][1].textContent = "O";
                                }
                            } else {
                                btn[0][0].textContent = "O";
                            }
                        }
                    } else if (btn[0][0].textContent == "O"){
                        if (btn[0][1].textContent == "O"){
                            if(btn[0][2].textContent == "X"){    
                                if (btn[2][0].textContent == "O"){
                                    if (btn[1][0].textContent == "X"){
                                        btn[1][2].textContent = "O";
                                    } else{
                                        btn[1][0].textContent = "O";
                                    } 
                                } else{
                                    btn[2][0].textContent = "O";
                                } 
                            } else {
                                btn[0][2].textContent = "O";
                            }
                        } else if (btn[0][2].textContent == "O"){
                            if (btn[0][1].textContent == "X"){
                                if (btn[2][1].textContent == "O"){
                                    if (btn[1][0].textContent == "X"){
                                        btn[1][2].textContent = "O";
                                    } else{
                                        btn[1][0].textContent == "O";
                                    }
                                } else {
                                    btn[2][1].textContent = "O";
                                }
                            } else{
                                btn[0][1].textContent = "O";
                            }
                        } else if (btn[1][0].textContent == "O"){
                            if(btn[2][0].textContent == "X"){    
                                if (btn[0][2].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[2][1].textContent = "O";
                                    } else{
                                        btn[0][1].textContent = "O";
                                    } 
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else {
                                btn[2][0].textContent = "O";
                            }
                        } else if (btn[1][2].textContent == "O"){
                            if(btn[0][1].textContent == "X"){    
                                if (btn[2][1].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[2][0].textContent = "O";
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    btn[2][1].textContent = "O";
                                }
                            } else if(btn[0][2].textContent == "X"){    
                                if (btn[2][0].textContent == "O"){
                                    if (btn[1][0].textContent == "X"){
                                        if (btn[2][1].textContent == "X"){
                                            btn[0][1].textContent = "O";
                                        } else{
                                            btn[2][1].textContent = "O";
                                        }
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else if(btn[2][0].textContent == "X"){    
                                if (btn[0][2].textContent == "O"){
                                    if (btn[1][0].textContent == "X"){
                                        if (btn[2][2].textContent == "X"){
                                            btn[2][1].textContent = "O";
                                        } else{
                                            btn[2][2].textContent = "O";
                                        }
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else{
                                    btn[0][2].textContent = "O";
                                }
                            } else if(btn[2][1].textContent == "X"){    
                                if (btn[0][1].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[2][0].textContent = "O";
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    btn[0][1].textContent = "O";
                                }
                            }


                        } else if (btn[2][0].textContent == "O"){
                            if (btn[1][0].textContent == "X"){
                                if (btn[1][2].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[2][1].textContent = "O";
                                    } else{
                                        btn[0][2].textContent == "O";
                                    }
                                } else {
                                    btn[1][2].textContent = "O";
                                }
                            } else{
                                btn[1][0].textContent = "O";
                            }
                        } else if (btn[2][1].textContent == "O"){
                            if(btn[0][2].textContent == "X"){    
                                if (btn[2][0].textContent == "O"){
                                    if (btn[1][0].textContent == "X"){
                                        if (btn[2][2].textContent == "X"){
                                            btn[1][2].textContent = "O";
                                        } else{
                                            btn[2][2].textContent = "O";
                                        }
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else if(btn[1][0].textContent == "X"){    
                                if (btn[1][2].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[2][0].textContent = "O";                                        
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else if (btn[0][1].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[1][2].textContent = "O";                                        
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else if (btn[0][2].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[1][2].textContent = "O";                                        
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else if (btn[2][0].textContent == "O"){
                                    if (btn[2][2].textContent == "X"){
                                        btn[1][2].textContent = "O";                                        
                                    } else{
                                        btn[2][2].textContent = "O";
                                    }
                                } else{
                                    if (btn[2][0].textContent == "X"){
                                        btn[1][2].textContent = "O";                                        
                                    } else{
                                        btn[2][0].textContent = "O";
                                    }
                                }
                            } else if(btn[1][2].textContent == "X"){    
                                if (btn[1][0].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[2][0].textContent = "O";
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                }  else if (btn[0][1].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        btn[1][0].textContent = "O";                                        
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else if (btn[0][2].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[1][0].textContent = "O";                                        
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else if (btn[2][0].textContent == "O"){
                                    if (btn[2][2].textContent == "X"){
                                        btn[1][0].textContent = "O";                                        
                                    } else{
                                        btn[2][2].textContent = "O";
                                    }
                                } else{
                                    if (btn[2][0].textContent == "X"){
                                        btn[1][0].textContent = "O";                                        
                                    } else{
                                        btn[2][0].textContent = "O";
                                    }
                                }
                            } else if(btn[2][0].textContent == "X"){    
                                if (btn[0][2].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        if (btn[1][2].textContent == "X"){
                                            btn[1][0].textContent = "O";
                                        } else{
                                            btn[1][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    btn[0][2].textContent = "O";
                                }
                            }
                        } else{
                            //não severia acontecer
                        }
                    } else if (btn[0][2].textContent == "O"){
                        if (btn[0][1].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                if (btn[2][2].textContent == "O"){
                                    btn[1][2].textContent = "O";
                                } else{
                                    btn[2][2].textContent = "O";
                                }
                            } else{
                                btn[0][0].textContent = "O";
                            }
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                if (btn[2][2].textContent == "O"){
                                    if (btn[1][2].textContent == "X"){
                                        if (btn[2][1].textContent == "X"){
                                            btn[0][1].textContent == "O";
                                        } else{
                                            btn[2][1].textContent = "O";
                                        } 
                                    } else{
                                        btn[1][2].textContent = "O";
                                    }                                
                                } else{
                                    btn[2][2].textContent = "O";
                                }                            
                            } else if (btn[2][2].textContent == "X"){
                                if (btn[0][0].textContent == "O"){
                                    if (btn[2][0].textContent == "X"){
                                        if (btn[2][1].textContent == "X"){
                                            btn[0][1].textContent = "O"; 
                                        } else{
                                            btn[2][1].textContent = "O";
                                        }
                                    } else{
                                        btn[2][0].textContent = "O";
                                    }
                                } else{
                                    btn[0][0].textContent = "O";
                                }                            
                            } else {
                                if (btn[0][1].textContent == "X"){
                                    btn[2][1].textContent = "O"; 
                                } else{
                                    btn[0][1].textContent = "O"; 
                                }
                            }
                        } else if (btn[1][2].textContent == "O"){
                            if (btn[2][2].textContent == "X"){
                                if (btn[0][0].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[2][1].textContent = "O";
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    btn[0][0].textContent = "O";
                                }
                            } else{
                                btn[2][2].textContent = "O";
                            }
                        } else if (btn[2][0].textContent == "O"){
                            //não deveria...
                        } else if (btn[2][1].textContent == "O"){
                            if (btn[2][2].textContent == "X"){
                                if (btn[0][0].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        if (btn[1][0].textContent == "X"){
                                            btn[1][2].textContent == "O";
                                        } else{
                                            btn[1][0].textContent = "O";
                                        } 
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }                                
                                } else{
                                    btn[0][0].textContent = "O";
                                }                            
                            } else if (btn[0][0].textContent == "X"){
                                if (btn[2][2].textContent == "O"){
                                    if (btn[2][0].textContent == "X"){
                                        if (btn[1][2].textContent == "X"){
                                            btn[1][0].textContent = "O"; 
                                        } else{
                                            btn[1][2].textContent = "O";
                                        }
                                    } else{
                                        btn[2][0].textContent = "O";
                                    }
                                } else{
                                    btn[2][2].textContent = "O";
                                }
                            } else {
                                if (btn[1][2].textContent == "X"){
                                    btn[1][0].textContent = "O"; 
                                } else{
                                    btn[1][2].textContent = "O"; 
                                }
                            }
                        } else{
                            if (btn[1][2].textContent == "X"){
                                if (btn[1][0].textContent == "O"){
                                    if (btn[10][1].textContent == "O"){
                                        btn[2][1].textContent = "O";
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }                                
                                } else{
                                    btn[1][0].textContent = "O";
                                }
                            } else{
                                btn[1][2].textContent = "O";
                            }
                        }
                    } else if (btn[2][0].textContent == "O"){
                        if (btn[0][1].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                if (btn[2][2].textContent == "O"){
                                    if (btn[2][1].textContent == "X"){
                                        if (btn[1][2].textContent == "X"){
                                            btn[1][0].textContent == "O";
                                        } else{
                                            btn[1][2].textContent = "O";
                                        } 
                                    } else{
                                        btn[2][1].textContent = "O";
                                    }                                
                                } else{
                                    btn[2][2].textContent = "O";
                                }                            
                            } else if (btn[2][2].textContent == "X"){
                                if (btn[0][0].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        if (btn[1][2].textContent == "X"){
                                            btn[1][0].textContent = "O"; 
                                        } else{
                                            btn[1][2].textContent = "O";
                                        }
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    btn[0][0].textContent = "O";
                                }                            
                            } else {
                                if (btn[1][0].textContent == "X"){
                                    btn[1][2].textContent = "O"; 
                                } else{
                                    btn[1][0].textContent = "O"; 
                                }
                            }
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[0][0].textContent == "X"){
                                if (btn[2][2].textContent == "O"){
                                    if (btn[2][1].textContent == "X"){
                                        btn[0][1].textContent = "O";
                                    } else{
                                        btn[2][1].textContent = "O";
                                    }
                                } else{
                                    btn[2][2].textContent = "O";
                                }
                            } else{
                                btn[0][0].textContent = "O";
                            }
                        } else if (btn[1][2].textContent == "O"){
                            if (btn[2][2].textContent == "X"){
                                if (btn[0][0].textContent == "O"){
                                    if (btn[0][1].textContent == "X"){
                                        btn[2][1].textContent = "O";
                                    } else{
                                        btn[0][1].textContent = "O";
                                    }
                                } else{
                                    btn[0][0].textContent = "O";
                                }
                            } else{
                                btn[2][2].textContent = "O";
                            }
                        } else{
                            if (btn[2][1].textContent == "X"){
                                if (btn[0][1].textContent == "O"){
                                    if (btn[1][0].textContent == "OX"){
                                        btn[1][2].textContent = "O";
                                    } else{
                                        btn[1][0].textContent = "O";
                                    }
                                } else{
                                    btn[0][1].textContent = "O";
                                }
                            } else{
                                btn[2][1].textContent = "O";
                            }
                        }
                    } else{ //2,2
                        if (btn[0][1].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                if (btn[2][0].textContent == "O"){
                                    if (btn[2][1].textContent == "X"){
                                        if (btn[1][0].textContent == "X"){
                                            btn[1][2].textContent == "O";
                                        } else{
                                            btn[1][0].textContent = "O";
                                        } 
                                    } else{
                                        btn[2][1].textContent = "O";
                                    }                                
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else if (btn[2][0].textContent == "X"){
                                if (btn[0][2].textContent == "O"){
                                    if (btn[0][2].textContent == "X"){
                                        if (btn[0][0].textContent == "X"){
                                            if (btn[1][2].textContent == "X"){
                                                btn[1][0].textContent = "O"; 
                                            } else{
                                                btn[1][2].textContent = "O";
                                            }
                                        } else{
                                            btn[0][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][2].textContent = "O";
                                    }
                                } else{
                                    btn[0][0].textContent = "O";
                                }                            
                            } else {
                                if (btn[1][0].textContent == "X"){
                                    btn[1][2].textContent = "O"; 
                                } else{
                                    btn[1][0].textContent = "O"; 
                                }
                            }
                        } else if (btn[1][0].textContent == "O"){
                            if (btn[2][0].textContent == "X"){
                                if (btn[0][2].textContent == "O"){
                                    if (btn[1][2].textContent == "X"){
                                        if (btn[0][1].textContent == "X"){
                                            btn[2][1].textContent == "O";
                                        } else{
                                            btn[0][1].textContent = "O";
                                        }
                                    } else{
                                        btn[1][2].textContent = "O";
                                    }                                
                                } else{
                                    btn[0][2].textContent = "O";
                                }
                            } else if (btn[0][2].textContent == "X"){
                                if (btn[2][0].textContent == "O"){
                                    if (btn[0][0].textContent == "X"){
                                        if (btn[0][0].textContent == "X"){
                                            if (btn[2][1].textContent == "X"){
                                                btn[0][1].textContent = "O"; 
                                            } else{
                                                btn[2][1].textContent = "O";
                                            }
                                        } else{
                                            btn[0][0].textContent = "O";
                                        }
                                    } else{
                                        btn[0][0].textContent = "O";
                                    }
                                } else{
                                    btn[2][0].textContent = "O";
                                }                            
                            } else {
                                if (btn[2][1].textContent == "X"){
                                    btn[0][1].textContent = "O"; 
                                } else{
                                    btn[2][1].textContent = "O"; 
                                }
                            }
                        } else if (btn[1][2].textContent == "O"){
                            if (btn[0][2].textContent == "X"){
                                if (btn[2][0].textContent == "O"){
                                    if (btn[2][1].textContent == "X"){
                                        btn[0][1].textContent = "O";
                                    } else{
                                        btn[2][1].textContent = "O";
                                    }
                                } else{
                                    btn[2][0].textContent = "O";
                                }
                            } else{
                                btn[0][2].textContent = "O";
                            }
                        } else if (btn[2][1].textContent == "O"){
                            if (btn[2][0].textContent == "X"){
                                if (btn[0][2].textContent == "O"){
                                    if (btn[1][2].textContent == "X"){
                                        btn[1][0].textContent = "O";
                                    } else{
                                        btn[1][2].textContent = "O";
                                    }
                                } else{
                                    btn[0][2].textContent = "O";
                                }
                            } else{
                                btn[2][0].textContent = "O";
                            }
                        }
                    }
                break;
            }
            vez++;
            validar();
        }
    }
}

function clickL1C1(){
    marcar(btn[0][0]);
}

function clickL2C1(){
    marcar(btn[1][0]);
}

function clickL3C1(){
    marcar(btn[2][0]);
}

function clickL1C2(){
    marcar(btn[0][1]);
}

function clickL2C2(){
    marcar(btn[1][1]);
}

function clickL3C2(){
    marcar(btn[2][1]);
}

function clickL1C3(){
    marcar(btn[0][2]);
}

function clickL2C3(){
    marcar(btn[1][2]);
}

function clickL3C3(){
    marcar(btn[2][2]);
}