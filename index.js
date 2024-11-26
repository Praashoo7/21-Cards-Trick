/* ----------------------------- THE-ONLOAD ----------------------------- */

window.addEventListener('load', function() {
    var elements = document.querySelectorAll('.aCard');
    elements.forEach(function(element) {
      var animation = window.getComputedStyle(element, null).getPropertyValue('animation');
      if (animation) {
        element.style.animationPlayState = 'paused';
      }
    });
    openHelp()
});



/* ----------------------------- BGIMG-ONLOAD ----------------------------- */

const div = document.querySelector("#bgImg");
const imageUrl = "imgs/leather.png";

div.style.opacity = "0";
  
const img = new Image();
img.src = imageUrl;
  
img.onload = function() {
  div.style.backgroundImage = `url(${imageUrl})`;
  div.style.opacity = "1";
};
  


/* ----------------------------- INFO-POPUP ----------------------------- */

function openHelp(){
    document.getElementById('infoMain').style.opacity = 1
    document.getElementById('infoMain').style.zIndex = 9999
}

let closeCount = 0
function closeHelp(){
    closeCount += 1
    document.getElementById('infoMain').style.opacity = 0
    document.getElementById('infoMain').style.zIndex = -2
    let audio = document.getElementById('firstAudio');
    
    if(closeCount == 1){

        setTimeout(() => {
            document.getElementById('main').style.display = 'flex'
        }, 100);
        setTimeout(() => {
            document.getElementById('mainH').style.opacity = 1
        }, 400);
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1
        }, 800);
        setTimeout(() => {
            let loopCount = 0;

            if(audio.play()){
                audio.addEventListener('ended', function() {
                loopCount++;
                if (loopCount < 2) {
                    audio.currentTime = 0.83;
                    audio.play();
                }
                });
                
                var elements = document.querySelectorAll('.aCard');
                elements.forEach(function(element) {
                var animation = window.getComputedStyle(element, null).getPropertyValue('animation');
                if (animation) {
                    element.style.animationPlayState = 'running';
                }
                });
            }
        }, 1200);
    }

    setTimeout(() => {
        document.getElementById('start').style.pointerEvents = 'auto';
    }, 4500);
}



/* -------------------------- TRANSITION-FROM-1-2 -------------------------- */

function start(){
    document.getElementById("allCards").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("allCards").style.display = "none";
    }, 400);
    setTimeout(() => {
        document.getElementById("game").style.display = "flex";
    }, 400);
    setTimeout(() => {
        document.getElementById("game").style.opacity = 1;
    }, 500);
}



/* ------------------------------- MAIN-DATA ------------------------------- */

// let first = [1, 4, 7, 10, 13, 16, 19]
// let second = [2, 5, 8, 11, 14, 17, 20]
// let third = [3, 6, 9, 12, 15, 18, 21]

let mainData = [
    {"name": "A", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"name": "3", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"name": "2", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"name": "A", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"name": "3", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"name": "2", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"name": "4", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"name": "2", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"name": "4", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"name": "A", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"name": "3", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"name": "K", "suit": "imgs/hearts.webp", "color": "red", "source": "imgs/king.webp"},
    {"name": "4", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"name": "A", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"name": "2", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"name": "Q", "suit": "imgs/clubs.webp", "color": "black", "source": "imgs/queen.webp"},
    {"name": "10", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"name": "4", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"name": "J", "suit": "imgs/diamondsuit.webp", "color": "red", "source": "imgs/jack.webp"},
    {"name": "3", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"name": "JOKER", "suit": "imgs/jokersuit.webp", "color": "", "source": "imgs/joker.webp"}
]

const main = mainData.map((value) => {

    let suitSymbol = `${value.suit}`;
    suitSymbol = suitSymbol.slice(1, -1);

    if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
        return `
        <div class="aCard" id="aCard">
            <div class="upper">
                <div class="name" id="${value.name}">${value.name}</div>
                <div class="symbol"><img style="width:12px; height: 12px;" src="${value.suit}"></div>
            </div>
            <div class="middle">
                <img style="width:30px; height: 30px; scale: 0.9" src="${value.source}">
            </div>
            <div class="bottom">
                <div class="name" id="${value.name}">${value.name}</div>
                <div class="symbol"><img style="width:12px; height: 12px;" src="${value.suit}"></div>
            </div>
       </div>
        `
    } else {
        return `
        <div class="aCard" id="aCard">
            <div class="upper">
                <div class="name" id="${value.name}">${value.name}</div>
                <div class="symbol"><img style="width:12px; height: 12px;" src="${value.suit}"></div>
            </div>
            <div class="middle"><img style="width:30px; height: 30px;" src="${value.suit}"></div>
            <div class="bottom">
                <div class="name" id="${value.name}">${value.name}</div>
                <div class="symbol"><img style="width:12px; height: 12px;" src="${value.suit}"></div>
            </div>
        </div>
        `
    }
})
document.getElementById('cards').innerHTML = main.join(" ");



/* ------------------------------ SECOND-PAGE ------------------------------ */

let first = [
    {"id": 1, "name": "A", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"id": 4, "name": "4", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"id": 7, "name": "3", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"id": 10, "name": "2", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"id": 13, "name": "A", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"id": 16, "name": "4", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"id": 19, "name": "Q", "suit": "imgs/clubs.webp", "color": "black", "source": "imgs/queen.webp"}
]
let second = [
    {"id": 2, "name": "2", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"id": 5, "name": "A", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"id": 8, "name": "4", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"id": 11, "name": "3", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"id": 14, "name": "2", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"id": 17, "name": "10", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"id": 20, "name": "K", "suit": "imgs/hearts.webp", "color": "red", "source": "imgs/king.webp"}
]
let third = [
    {"id": 3, "name": "3", "suit": "imgs/spades.webp", "color": "black", "source": ""},
    {"id": 6, "name": "2", "suit": "imgs/hearts.webp", "color": "red", "source": ""},
    {"id": 9, "name": "A", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"id": 12, "name": "4", "suit": "imgs/clubs.webp", "color": "black", "source": ""},
    {"id": 15, "name": "3", "suit": "imgs/diamondsuit.webp", "color": "red", "source": ""},
    {"id": 18, "name": "J", "suit": "imgs/diamondsuit.webp", "color": "red", "source": "imgs/jack.webp"},
    {"id": 21, "name": "JOKER", "suit": "imgs/jokersuit.webp", "source":"imgs/joker.webp"}
]

function blocksData1(name, suit, source){
    return `
    <div class="aCard">
        <div class="upper">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
        <div class="middle">
            <img style="width:30px; height: 30px; scale: 0.9" src="${source}">
        </div>
        <div class="bottom">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
    </div>
    `
}
function blocksData2(name, suit){
    return `
    <div class="aCard">
        <div class="upper">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
        <div class="middle"><img style="width:30px; height: 30px;" src="${suit}"></div>
        <div class="bottom">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
    </div>
    `
}

const dataFirst = first.map((value) => {
    if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
        return blocksData1(value.name, value.suit, value.source)
    } else {
        return blocksData2(value.name, value.suit)
    }
})
document.getElementById("firstBlock").innerHTML = dataFirst.join("");

const dataSecond = second.map((value) => {
    if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
        return blocksData1(value.name, value.suit, value.source)
    } else {
        return blocksData2(value.name, value.suit)
    }
})
document.getElementById("secondBlock").innerHTML = dataSecond.join("");

const dataThird = third.map((value) => {
    if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
        return blocksData1(value.name, value.suit, value.source)
    } else {
        return blocksData2(value.name, value.suit)
    }
})
document.getElementById("thirdBlock").innerHTML = dataThird.join("");



/* --------------------- SUBMIT-SELECTION-AND-FINAL ------------------------ */

function secondScreenData1(name, suit, source){
    return `
    <div class="aCard">
        <div class="upper">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
        <div class="middle">
            <img style="width:30px; height: 30px; scale: 0.9" src="${source}">
        </div>
        <div class="bottom">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
    </div>
    `
}
function secondScreenData2(name, suit){
    return `
    <div class="aCard">
        <div class="upper">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
        <div class="middle"><img style="width:30px; height: 30px;" src="${suit}"></div>
        <div class="bottom">
            <div class="name" id="${name}">${name}</div>
            <div class="symbol"><img style="width:12px; height: 12px;" src="${suit}"></div>
        </div>
    </div>
    `
}


let all = []
counter = 0
function submitSelection(){

    if(document.getElementById('col1').checked || document.getElementById('col2').checked || document.getElementById('col3').checked){

        var audio = document.getElementById('middleAudio');
        var loopCount = 0;

        if(audio.play()){
            audio.addEventListener('ended', function() {
                loopCount++;
                if(counter == 2){
                    audio.currentTime = 0;
                } else {
                    if (loopCount < 2) {
                        if(loopCount == 1){
                            setTimeout(() => {
                                audio.currentTime = 0;
                                audio.play();
                            }, 450);
                        } else {
                            audio.currentTime = 0;
                            audio.play();
                        }
                    }
                }
            });
        }

        document.getElementById("submitSelection").style.pointerEvents = "none"
        setTimeout(() => {
            document.querySelector('.firstBlock').classList.add('firstBlockMove')
        }, 200);
        setTimeout(() => {
            document.querySelector('.secondBlock').classList.add('secondBlockMove')
        }, 400);
        setTimeout(() => {
            document.querySelector('.thirdBlock').classList.add('thirdBlockMove')
        }, 600);

        setTimeout(() => {
            if (counter < 3){
                if(document.getElementById("col1").checked){
                    counter += 1
                    all=[]
                    second.map((value) => {all.push(value)})
                    first.map((value) => {all.push(value)})
                    third.map((value) => {all.push(value)})
        
                    first=[]
                    second=[]
                    third=[]
                    for(i=0; i<all.length; i=i+3){first.push(all[i])}
                    for(i=1; i<all.length; i=i+3){second.push(all[i])}
                    for(i=2; i<all.length; i=i+3){third.push(all[i])}
        
                    if(counter == 3){
        
                        const final = all.map((value) => {
                            if((all[10].name == value.name) && (all[10].suit == value.suit)){
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            }
                        })
                        document.getElementById('answer').innerHTML = final.join(" ")

                        document.getElementById("lastAudio").play();
        
                        document.getElementById('game').style.opacity = 0
                        setTimeout(() => {
                            document.getElementById('game').style.display = "none"
                            document.getElementById('mainPile').style.display = "none"
                        }, 200);
                        
                        
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'flex'
                        }, 200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 1
                        }, 400);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 0
                        }, 2200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'none'
                        }, 2700);
                        setTimeout(() => {
                            document.getElementById('answer').style.opacity = 1
                        }, 3000);
                        setTimeout(() => {
                            setTimeout(() => {
                                document.getElementById('answer').style.display = "flex"
                                document.getElementById('answer').style.animationPlayState = "running"
                            }, 50);
                            setTimeout(() => {
                                document.getElementById('answer').classList.add('firework-animation')
                            }, 50);
                        }, 3200);
                    }
        
                    if(counter == 3){
                        setTimeout(() => {
                            const dataFirst = first.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                            })
                            document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                            const dataSecond = second.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                            const dataThird = third.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                        }, 500);
                    } else {
                        const dataFirst = first.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                        const dataSecond = second.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                        const dataThird = third.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                    }
        
                } else if (document.getElementById("col2").checked){
                    counter += 1
                    all=[]
                    first.map((value) => {all.push(value)})
                    second.map((value) => {all.push(value)})
                    third.map((value) => {all.push(value)})
            
                    first=[]
                    second=[]
                    third=[]
                    for(i=0; i<all.length; i=i+3){first.push(all[i])}
                    for(i=1; i<all.length; i=i+3){second.push(all[i])}
                    for(i=2; i<all.length; i=i+3){third.push(all[i])}
        
                    if(counter == 3){
        
                        const final = all.map((value) => {
                            if((all[10].name == value.name) && (all[10].suit == value.suit)){
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            }
                        })
                        document.getElementById('answer').innerHTML = final.join(" ")

                        document.getElementById("lastAudio").play();
        
                        document.getElementById('game').style.opacity = 0
                        setTimeout(() => {
                            document.getElementById('game').style.display = "none"
                            document.getElementById('mainPile').style.display = "none"
                        }, 200);
                        
                        
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'flex'
                        }, 200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 1
                        }, 400);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 0
                        }, 2200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'none'
                        }, 2700);
                        setTimeout(() => {
                            document.getElementById('answer').style.opacity = 1
                        }, 3000);
                        setTimeout(() => {
                            setTimeout(() => {
                                document.getElementById('answer').style.display = "flex"
                                document.getElementById('answer').style.animationPlayState = "running"
                            }, 50);
                            setTimeout(() => {
                                document.getElementById('answer').classList.add('firework-animation')
                            }, 50);
                        }, 3200);
                    }
        
                    if(counter == 3){
                        setTimeout(() => {
                            const dataFirst = first.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                            const dataSecond = second.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                            const dataThird = third.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                        }, 500);
                    } else {
                        const dataFirst = first.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                        const dataSecond = second.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                        const dataThird = third.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                    }
                } else if (document.getElementById("col3").checked){
                    counter += 1
                    all=[]
                    first.map((value) => {all.push(value)})
                    third.map((value) => {all.push(value)})
                    second.map((value) => {all.push(value)})
            
                    first=[]
                    second=[]
                    third=[]
                    for(i=0; i<all.length; i=i+3){first.push(all[i])}
                    for(i=1; i<all.length; i=i+3){second.push(all[i])}
                    for(i=2; i<all.length; i=i+3){third.push(all[i])}
        
                    if(counter == 3){
        
                        const final = all.map((value) => {
                            if((all[10].name == value.name) && (all[10].suit == value.suit)){
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            }
                        })
                        document.getElementById('answer').innerHTML = final.join(" ")

                        document.getElementById("lastAudio").play();
        
                        document.getElementById('game').style.opacity = 0
                        setTimeout(() => {
                            document.getElementById('game').style.display = "none"
                            document.getElementById('mainPile').style.display = "none"
                        }, 200);
                        
                        
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'flex'
                        }, 200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 1
                        }, 400);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.opacity = 0
                        }, 2200);
                        setTimeout(() => {
                            document.getElementById('hypeUp').style.display = 'none'
                        }, 2700);
                        setTimeout(() => {
                            document.getElementById('answer').style.opacity = 1
                        }, 3000);
                        setTimeout(() => {
                            setTimeout(() => {
                                document.getElementById('answer').style.display = "flex"
                                document.getElementById('answer').style.animationPlayState = "running"
                            }, 50);
                            setTimeout(() => {
                                document.getElementById('answer').classList.add('firework-animation')
                            }, 50);
                        }, 3200);
                    }
                    if(counter == 3){
                        setTimeout(() => {
                            const dataFirst = first.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                            })
                            document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                            const dataSecond = second.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                            const dataThird = third.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                    return secondScreenData1(value.name, value.suit, value.source)
                                } else {
                                    return secondScreenData2(value.name, value.suit)
                                }
                            })
                            document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                        }, 500);
                    } else {
                        const dataFirst = first.map((value) => {
                                if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("firstBlock").innerHTML = dataFirst.join("");
        
                        const dataSecond = second.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("secondBlock").innerHTML = dataSecond.join("");
        
                        const dataThird = third.map((value) => {
                            if((value.name == "K") || (value.name == "Q") || (value.name == "J") || (value.name == "JOKER")){
                                return secondScreenData1(value.name, value.suit, value.source)
                            } else {
                                return secondScreenData2(value.name, value.suit)
                            }
                        })
                        document.getElementById("thirdBlock").innerHTML = dataThird.join("");
                    }
                }
            }
        }, 1000);

        if(counter!==3){
            setTimeout(() => {
                document.querySelector('.firstBlock').classList.remove('firstBlockMove')
            }, 1200);
            setTimeout(() => {
                document.querySelector('.secondBlock').classList.remove('secondBlockMove')
            }, 1400);
            setTimeout(() => {
                document.querySelector('.thirdBlock').classList.remove('thirdBlockMove')
            }, 1600);
            setTimeout(() => {
                document.getElementById("submitSelection").style.pointerEvents = "auto"
            }, 2500);
        }
    } else {
        document.getElementById('radioButtons').classList.add('pressRadioMan')
        setTimeout(() => {
            document.getElementById('radioButtons').classList.remove('pressRadioMan')
        }, 500);
    }
}



/* ----------------------------- SOUND-SWITCH ----------------------------- */

const toggleSwitch = document.querySelector('.muteCheck input[type="checkbox"]');

function switchSound(e) {
    toggleMute()
    if (e.target.checked) {
        document.querySelector('.line').style.minHeight = '1.5em'
        document.documentElement.setAttribute('sound-check', 'muted');
    } else {
        document.querySelector('.line').style.minHeight = '0em'
        document.documentElement.setAttribute('sound-check', 'unmuted');
    }
}

toggleSwitch.addEventListener('change', switchSound, false);

function switchSound(e) {
    toggleMute()
    if (e.target.checked) {
        document.querySelector('.line').style.minHeight = '1.5em'
        document.documentElement.setAttribute('sound-check', 'muted');
        localStorage.setItem('sound', 'muted');
    }
    else {
        document.querySelector('.line').style.minHeight = '0em'
        document.documentElement.setAttribute('sound-check', 'unmuted');
        localStorage.setItem('sound', 'unmuted');
    }    
  }

function toggleMute(){
    var myAudio1 = document.getElementById('firstAudio');
    myAudio1.muted = !myAudio1.muted;
    var myAudio2 = document.getElementById('middleAudio');
    myAudio2.muted = !myAudio2.muted;
    var myAudio3 = document.getElementById('lastAudio');
    myAudio3.muted = !myAudio3.muted;
}

const currentSoundCheck = localStorage.getItem('sound');

if (currentSoundCheck === null) {
    toggleSwitch.checked = true;
    document.documentElement.setAttribute('sound-check', 'muted');
    document.querySelector('.line').style.minHeight = '1.5em';
    localStorage.setItem('sound', 'muted');
    toggleMute();
} else {
    toggleSwitch.checked = (currentSoundCheck === 'muted');
    document.documentElement.setAttribute('sound-check', currentSoundCheck);
    if (currentSoundCheck === 'muted') {
        document.querySelector('.line').style.minHeight = '1.5em';
        toggleMute();
    } else {
        document.querySelector('.line').style.minHeight = '0em';
    }
}

toggleSwitch.addEventListener('change', switchSound);



/* ----------------------------- SMALL-DEVICE ----------------------------- */

window.addEventListener('resize', function(){
    if(window.innerWidth < 281){
        document.querySelector('.buttonSet').style.display = 'none'
        document.querySelector('.overlay').style.display = 'none'
        document.querySelector('.mainH').style.display = 'none'
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.mainStepper').style.display = 'none'
        document.querySelector('.muteCheck').style.display = 'none'
    } else {
        document.querySelector('.buttonSet').style.display = ''
        document.querySelector('.overlay').style.display = 'flex'
        document.querySelector('.mainH').style.display = 'flex'
        document.querySelector('.main').style.display = 'flex'
        document.querySelector('.mainStepper').style.display = 'flex'
        document.querySelector('.muteCheck').style.display = 'flex'
    }
})