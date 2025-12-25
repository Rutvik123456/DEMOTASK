

let start = 0;
document.querySelector('.countbox').innerText = `${start}`;


let intra = setInterval(updatec,100);

function updatec (){
    
        start++;
        document.querySelector('.countbox').innerText = `${start}+ `;
        
    if (start>49){
        clearInterval(intra);
        console.log('Counter stopped');
        // start = 0;
        // intra = setInterval(updatec,100);
    }
    };
    
    








