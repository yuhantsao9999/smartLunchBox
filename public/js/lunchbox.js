// $(function(){
//     $(".flip").click(function(){
//         $(".panel").slideToggle("slow");
//         $(".xs1").toggle();
//         $(".xs2").toggle();
//       });});

const getHealth = () => {
    // const data = {
    //     //email: localStorage.getItem('email'),
    //     userId: '1234'
    // }
    console.log('enter fondend2');
    const email=localStorage.getItem('email');
    console.log(email)
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
            // window.alert('成功！');
            // window.location = '/shop';
            return data;
        })
        .catch((err) => {
            console.log('err', err);
        });
};

