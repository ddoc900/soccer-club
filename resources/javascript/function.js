
let title = document.getElementById('cage');
let time = document.getElementById('cage time');


const toggle = () => {
        if (time.style.display === 'none'){
        time.style.display = 'block';
    } else {
        time.style.display = 'none'
    }
}


const quotesArry = ['It\'s really fun out here', 'Theres a good turn out in the winter', 
                'Great cominuty, great people, great soccer', 'You don\'t find this in other towns']

let quote = document.getElementById('testimonial').querySelector('h1');

const testimonial = () => {
    
        if(quote.innerHTML == quotesArry[0]){
            return quote.innerHTML = quotesArry[1];
        } 
        else if (quote.innerHTML == quotesArry[1]){
            return quote.innerHTML = quotesArry[2];
        } 
        else if (quote.innerHTML == quotesArry[2]){
            return quote.innerHTML = quotesArry[3];
        } 
        else {
            return quote.innerHTML = quotesArry[0];
    
    }
    
}


let map = document.getElementById('map');

const down = () => {
    map.style.borderRadius = '25px';
}

// const up = () {
//     map.style.borderRadius = '';
// }



quote.addEventListener('click', testimonial);
title.addEventListener('click', toggle);

document.addEventListener('keydown', down);
// document.addEventListener('click', up);



