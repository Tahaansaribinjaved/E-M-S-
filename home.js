import { auth } from './config.js';
import { signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'login.html'
    }
});

const btn = document.querySelector('#bt');


btn.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout succesfully');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})



//   Expense managnent system



var getTr = document.getElementById('td')//tr ko get karlia
var gettotal = document.getElementById('total')

var tAmount = 0;
// tAmount = gettotal.innerText
function addExpense() {
    var getTitle = document.getElementById('title')
    var getAmount = document.getElementById('amount')
    var getDate = document.getElementById('date')
    var tr = document.createElement('tr')
    var amountal = parseInt(getAmount.value);
    
    
    var tdt = document.createElement('td')
    tdt.setAttribute('class', "table-light ntd")
    tdt.textContent = getTitle.value
    
    var tda = document.createElement('td')
    tda.setAttribute('class', "table-light ntd")
    tda.textContent = getAmount.value
    
    var tdd = document.createElement('td')
    tdd.setAttribute('class', "table-light ntd")
    tdd.textContent = getDate.value;
    
    var action = document.createElement('td')
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    action.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Update')
    editbtn.appendChild(editbtntext)
    action.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'editfunc(this)')
    deletebtn.setAttribute('class', 'btn btn-danger')
    editbtn.setAttribute('class', 'btn btn-warning ')
    tr.appendChild(tdt)
    tr.appendChild(tda)
    tr.appendChild(tdd)
    tr.appendChild(action)
    
    
    getTr.appendChild(tr)
    if (getTitle.value == '' || getAmount.value == '' || getDate.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You did not write, please write  ',
        }) 
        tr.style.display = "none"
        
    }
    getAmount.value = ''
    getTitle.value = ''
    getDate.value = ''
    tAmount += amountal
    gettotal.textContent = tAmount 
    // var tta=  tda.textContent + tAmount
    // console.log(tta)
    
//     for(var i = 0 ; i >tr.lenght ; i++  ){
// }

}

function deleteAll() {
    getTr.innerHTML = ''
    tAmount = '00'
    gettotal.textContent = tAmount
}
function del(e) {
    e.parentNode.parentNode.remove()
    var a =   e.parentNode.parentNode.children[1].textContent
    tAmount -= a
    gettotal.textContent = tAmount
    // console.log(e.parentNode.parentNode.children[1].textContent)
    
}


function editfunc(e) {
    var a = prompt('Enter update title', e.parentNode.parentNode.firstChild.textContent);
    var b = +prompt('Enter update amount', e.parentNode.parentNode.children[1].textContent);
    var newValue = parseInt(b);
    var oldValue = parseInt(e.parentNode.parentNode.children[1].textContent);

    e.parentNode.parentNode.firstChild.textContent = a;
    e.parentNode.parentNode.children[1].textContent = b;

    tAmount = tAmount - oldValue + newValue;
    gettotal.textContent = tAmount;
}


