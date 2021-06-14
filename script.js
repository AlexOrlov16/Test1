let btn = document.getElementById('b1')

btn.onclick = function() {
    let div = document.createElement('div');
    div.innerHTML = "я знаю что такое GitHub";
    document.body.append(div);
};