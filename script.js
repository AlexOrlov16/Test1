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


// const sqr = document.querySelector('.square')

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

// function crl() {
//   sqr.classList.toggle('circle')
// }

// sqr.addEventListener('click', crl)

// const it = document.querySelector('.it')
// const t1 = document.querySelector('.text1')
// const b1 = document.querySelector('#btn')

// function out() {
//   t1.innerHTML = it.value;
// }

// b1.addEventListener('click', out)


// const ip = document.querySelector('.ip')
// const btn = document.querySelector('.add')
// const t = [document.querySelector('.t1'),
//       document.querySelector('.t2'),
//       document.querySelector('.t3'),
//       document.querySelector('.t4'),
//       document.querySelector('.t5'),
//       document.querySelector('.t6'),
//       document.querySelector('.t7'),]


// function add() {
//       if (t[0].innerHTML == '') {
//             t[0].innerHTML = ip.value;
//             t[0].style.display = 'block'
//             t[0].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[0].firstChild.onclick = () => t[0].remove();
//       } else if (t[1].innerHTML == '') {
//             t[1].innerHTML = ip.value;
//             t[1].style.display = 'block'
//             t[1].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[1].firstChild.onclick = () => t[1].remove();
//       } else if (t[2].innerHTML == '') {
//             t[2].innerHTML = ip.value;
//             t[2].style.display = 'block'
//             t[2].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[2].firstChild.onclick = () => t[2].remove();
//       } else if (t[3].innerHTML == '') {
//             t[3].innerHTML = ip.value;
//             t[3].style.display = 'block'
//             t[3].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[3].firstChild.onclick = () => t[3].remove();
//       } else if (t[4].innerHTML == '') {
//             t[4].innerHTML = ip.value;
//             t[4].style.display = 'block'
//             t[4].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[4].firstChild.onclick = () => t[4].remove();
//       } else if (t[5].innerHTML == '') {
//             t[5].innerHTML = ip.value;
//             t[5].style.display = 'block'
//             t[5].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[5].firstChild.onclick = () => t[5].remove();
//       } else if (t[6].innerHTML == '') {
//             t[6].innerHTML = ip.value;
//             t[6].style.display = 'block'
//             t[6].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//             t[6].firstChild.onclick = () => t[6].remove();
//       }

// }

// btn.addEventListener('click', add)

// let list = document.querySelector('.container2');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'INPUT') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);



let listTodo = [];


const list = document.querySelector('.container2');

const input = document.querySelector('.input')
const btn = document.querySelector('.add')

function getRandomId() {
      function getRandom(min, max) {
      var int = Math.floor(Math.random() * (max - min + 1)) + min;
    
      return int.toString(36);
    }
    
    var id = getRandom(0, 1679615);
}

    



function addTodo() {

      let newList = {
            name: `${input.value}`,
            id: getRandomId,
            complete: false,
      }
      listTodo.push(newList)
     
     
}
addTodo();



function showList() {
      if (input.value === '') {
            alert('You must write something!')
      } else {
            let test = listTodo.map((item) => {
                  return `<li type='none'>${input.value}</li>
                  <input type='checkbox' class='checkbox'>
                  <button class="btnLi">X</button>
                  <hr>`
            })
            list.innerHTML += test;
            input.value = ''
      }

}


btn.addEventListener('click', showList)

function clickPress(event) {
      if (event.keyCode == 13) {
            showList()
      }
  }


    