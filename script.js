// let btn = document.getElementById('b1')

// btn.addEventListener('click', text)

// function text(){
//     const container = document.querySelector('.container')
//     container.innerHTML = 'я знаю что такое GitHub';
// }




// let container = document.querySelector('.container')

// container.addEventListener('click', function(){
//     container.innerHTML = 'я знаю что такое GitHub';
// })



// 1. removeEventListener

// 2. DOM manipulation 


const sqr = document.querySelector('.square')

// sqr.onclick = function() {
//     if (sqr.style.backgroundColor === 'rgb(250, 76, 76)') {
      // sqr.style.borderRadius = '100%'
      // sqr.style.backgroundColor = 'yellow'
//     } else {
//       sqr.style.borderRadius = '0'
//       sqr.style.backgroundColor = 'rgb(250, 76, 76)'
//     }
    
//   };



// function crl() {
//   if (sqr.style.backgroundColor === 'rgb(250, 76, 76)') {
//     sqr.style.borderRadius = '100%'
//     sqr.style.backgroundColor = 'yellow'
//   } else {
//     sqr.style.borderRadius = '0'
//     sqr.style.backgroundColor = 'rgb(250, 76, 76)'
//   }
// }

function crl() {
  sqr.classList.toggle('circle')
}

sqr.addEventListener('click', crl)


