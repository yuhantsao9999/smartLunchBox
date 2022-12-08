// $(function(){
//     $(".flip").click(function(){
//         $(".panel").slideToggle("slow");
//         $(".xs1").toggle();
//         $(".xs2").toggle();
//       });});

const getHealth = () => {
    const email = localStorage.getItem('email');
    console.log(email);
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
            console.log('data =', data);
            return fetchLunchbox(data);
        })
        .catch((err) => {
            console.log('err', err);
        });
};

const fetchLunchbox = async (userdata) => {
    const { height, weight, sportcal, step, sleep, age } = userdata;
    const data = {
        gender: userdata.gender === 'male' ? 1 : 2,
        weight,
        height,
        age,
        sportcal,
        step,
        sleep,
        period: userdata.period === 0 ? false : true,
    };
    try {
        console.log('fetch =', data);
        return fetch('http://123.193.50.31:1234/yummy', {
            method: 'POST',
            // body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log('response', response);
                return response;
            })
            .catch((error) => {
                console.error(`Error:lunchbox data not found`);
            });
    } catch (error) {
        return;
    }
};

const submit = () => {
    window.alert('訂購完成！');
    window.location = 'profile.html';
};
