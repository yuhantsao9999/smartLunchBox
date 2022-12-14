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

// 
const lunchboxData = localStorage.getItem('cart');

console.log(lunchboxData)
var nutrition = new Vue({
    el: "#app01",
    data: JSON.parse(lunchboxData)[0],
    computed:{
        sumbox: function(){
            rice =  this.rice[1]*( 4*this.rice[2] + 4*this.rice[3]+ 9*this.rice[4]);
            main_meal = this.main_meal[1]*( 4*this.main_meal[2] + 4*this.main_meal[3] + 9*this.main_meal[4]);
            veg1 = this.veg1[1]* ( 4*this.veg1[2] + 4*this.veg1[3] + 9*this.veg1[4]);
            veg2 = this.veg2[1]*( 4*this.veg2[2] + 4*this.veg2[3] + 9*this.veg2[4]);
            veg3 = this.veg3[1]*( 4*this.veg3[2] + 4*this.veg3[3] + 9*this.veg3[4]);
            
            // const tr = document.getElementById('eatData');
            // td = document.createElement('td');
            // td.appendChild(document.createTextNode(rice+main_meal+veg1+veg2+veg3));
            // tr.appendChild(td);

            return rice + main_meal + veg1 + veg2 + veg3;
        },
        sumveg: function(){
            return this.veg1[1]+this.veg2[1]+this.veg3[1]
        },

        sumrice: function(){
            return this.rice[1]
        },

        sumprotien: function(){
            return this.main_meal[1]
        },

        sumoil: function(){
            return (this.rice[4] + this.main_meal[4] + this.veg1[4] + this.veg2[4] + this.veg3[4]).toFixed(2);
        }
    }
})

console.log("nutrtuion ",nutrition.sumbox)
const add_data=()=>{
    const tr = document.getElementById('eatData');
       td = document.createElement('td');
       td.appendChild(document.createTextNode(nutrition.sumbox + "cal"));
       tr.appendChild(td);

       td = document.createElement('td');
       td.appendChild(document.createTextNode('20g'));
       tr.appendChild(td);

       td = document.createElement('td');
       td.appendChild(document.createTextNode(nutrition.sumveg + 'g'));
       tr.appendChild(td);


       td = document.createElement('td');
       td.appendChild(document.createTextNode(nutrition.sumrice + 'g'));
       tr.appendChild(td);

       td = document.createElement('td');
       td.appendChild(document.createTextNode(nutrition.sumprotien + 'g'));
       tr.appendChild(td);

       td = document.createElement('td');
       td.appendChild(document.createTextNode(nutrition.sumoil + 'g'));
       tr.appendChild(td);

       td = document.createElement('td');
       td.appendChild(document.createTextNode('建議攝取'+2000 + 'ml'));
       tr.appendChild(td);

   }

add_data();