// $(function(){
//     $(".flip").click(function(){
//         $(".panel").slideToggle("slow");
//         $(".xs1").toggle();
//         $(".xs2").toggle();
//       });});

const showhealth = () => {
    // const data = {
    //     //email: localStorage.getItem('email'),
    //     userId: '1234'
    // }
    console.log("enter fondend")
    const userId='1234';
    fetch(`/health?userid=${userId}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json',
        },
    })
    .then(async (response) => {
      console.log("response",response)
        if (!response.ok) {
            const error = await response.text();
            // document.getElementById('error').innerHTML = 'Error : ' + error;
        }
        return response.json();
    })
    .then((data) => {
      console.log(data);
        addTr('bodyData', data.date, data.step, data.cal);
    })
    .catch((err) => {
        console.log('err', err);
    });
}


const addTr = (body,date,step,cal)=>{
  console.log("date",date)
  const tbody = document.getElementById(body);
  const tr = document.createElement('tr');
  if (body === 'bodyData') {
        td = document.createElement('td');
        td.appendChild(document.createTextNode(date));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(step));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(cal));
        tr.appendChild(td);
  }
  // return
  tr.appendChild(td);
  tbody.appendChild(tr);
};