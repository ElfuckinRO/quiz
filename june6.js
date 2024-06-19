const formInfo = document.querySelector('.form')
console.log(formInfo);
console.log(formInfo.children);

const tag = document.querySelector('.response');

const hag = document.querySelector('.quiz-questions');

const load = document.querySelector('.loadwrapper')

formInfo.addEventListener('submit', (e)=>{
    e.preventDefault();

    load.style.display = 'block';
    formInfo.style.display = 'none';

    
    const data = new FormData(formInfo);
    const datainfo = Object.fromEntries(data);
    console.log(datainfo);
    const btn = document.querySelectorAll('.btn-one');

    
    fetch('https://sha-api.onrender.com/employee', {
        'method' : 'post',
        'headers' : {
            'Accept' : "application/JSON",
            'Content-Type' : "application/JSON"
        },
        'body' : JSON.stringify(datainfo)
    }).then((res)=>{
        if(res.status === 201){
            hag.style.display = 'block';
            formInfo.style.display = 'none';
            load.style.display = 'none';
        }
    })["catch"](()=>{
        tag.innerHTML = 'Error'
    })
})

// quiz form

const formInfotwo = document.querySelector('.questions')
console.log(formInfotwo);
console.log(formInfotwo.children);

const pag = document.querySelector('.resp');
const result = document.querySelector('.result')

formInfotwo.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log('yes');

    load.style.display = 'block';
    formInfotwo.style.display = 'none';

    const dataa = new FormData(formInfotwo);
    const datainformation = Object.fromEntries(dataa);
    console.log(datainformation);

    fetch('https://sha-api.onrender.com/employee', {
        'method' : 'post',
        'headers' : {
            'Accept' : "application/JSON",
            'Content-Type' : "application/JSON"
        },
        'body' : JSON.stringify(datainformation)
    }).then((res)=>{
        if(res.status === 201){
            load.style.display = 'none';
            result.style.display = 'block';
        }
    })["catch"](()=>{
        pag.innerHTML = 'Error'
    })
})
