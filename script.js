// generate random color

const RandomColor = function(){
    const hexItems = '0123456789ABCDEF' ;
    let color = '#' ;
    
    for(let i=0 ; i<6 ; i++){
        color += hexItems[Math.floor(Math.random()*16)] ;
        // console.log(color) ;
    }
    return color ;
}

let interval ;

const startChangingColor = function(){
    
    if(!interval)
        interval = setInterval(changeColor,550) ;

    function changeColor(){
        document.body.style.backgroundColor = RandomColor()
    }
    
}


document.querySelector('#start').addEventListener('click',startChangingColor)

const stopChangingColor = function(){
    clearInterval(interval) ;
    interval = null ;
}

document.querySelector('#stop').addEventListener('click',stopChangingColor)

