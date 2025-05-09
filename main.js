const quest = document.querySelectorAll('.quest');
const resp = document.querySelectorAll('.resp');

console.log(resp);

const addClick = ()=> {
    for (let i = 0; i < quest.length; i++) {
        quest[i].addEventListener('click', ()=> { 
            resp.forEach(elem => elem.hidden = true);
            resp[i].hidden = !resp[i].hidden;
        })
    }

}
addClick();