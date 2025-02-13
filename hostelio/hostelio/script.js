const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('option');

selectBtn.addEventListener('click', function(){
    selectBtn.classList.toggle('active');
});

for(options of option){
    options.onclick = function() {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
}



const selectBtnn = document.getElementById('select-btnn');
const textt = document.getElementById('textt');
const optionn = document.getElementsByClassName('optionn');

selectBtnn.addEventListener('click', function(){
    selectBtnn.classList.toggle('actives');
});

for(options of optionn){
    options.onclick = function() {
        textt.innerHTML = this.textContent;
        selectBtnn.classList.remove('actives');
    }
}