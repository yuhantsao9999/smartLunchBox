// $(function(){
//     $(".flip").click(function(){
//         $(".panel").slideToggle("slow");
//         $(".xs1").toggle();
//         $(".xs2").toggle();
//       });});

const showhealth = () => {
    const email=localStorage.getItem('email');
    fetch(`/health?email=${email}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json',
        },
    })
        .then(async (response) => {
            console.log('response', response);
            if (!response.ok) {
                const error = await response.text();
                // document.getElementById('error').innerHTML = 'Error : ' + error;
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            addTr(data.date, data.step, data.sportcal, data.weight, data.height, data.waistline, data.bodyfat);
        })
        .catch((err) => {
            console.log('err', err);
        });
};

const addTr = (date, step, cal, weight, height, waistline, bodyfat) => {
    console.log('date', date);
    // const tbody = document.getElementById(body);
    const tr = document.createElement('tr');
    // if (body === 'sportData') {
    const tbody = document.getElementById('sportData');
    td = document.createElement('td');
    td.appendChild(document.createTextNode(date));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(cal));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(step));
    tr.appendChild(td);
    tr.appendChild(td);
    tbody.appendChild(tr);
    // } else if (body === 'bodyData') {
    const tr2 = document.createElement('tr');
    const tbody2 = document.getElementById('bodyData');
    td = document.createElement('td');
    td.appendChild(document.createTextNode(date));
    tr2.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(weight));
    tr2.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(bodyfat));
    tr2.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(waistline));
    tr2.appendChild(td);
    // }
    // return
    tr2.appendChild(td);
    tbody2.appendChild(tr2);
};
