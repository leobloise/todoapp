import ChoreController from './controller/ChoreController.js';

const select = $('#activity_select');
const activities = ['Study', 'Work Out', 'Relax', 'Other'];

let form = $('#formchore');
let hideElement = $('.hide');
let hideMe = $('.hideMe');

let count = 0;
let cc = new ChoreController();

activities.forEach(activity => {

    let option = document.createElement('option');
    option.setAttribute('value', activity);
    option.innerHTML = activity;

    select.appendChild(option);
})


$('#formchore').addEventListener('submit', cc.RegisterNewChore.bind(cc))
$('#clear').addEventListener('click', cc.clearAll.bind(cc));

hideElement.addEventListener('click', (e) => {
    if(count == 0) {
        hideElement.innerHTML = 'Mostrar'
        hideMe.classList.add('displaynone');
        $('html').classList.add('overflowxnone')
        count++;
        return;
    }

    hideElement.innerHTML = 'Esconder'
    hideMe.classList.remove('displaynone');
    setTimeout(()=>$('html').classList.remove('overflowxnone'), 1000);
    count = 0;
    return;
})