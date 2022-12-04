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
      console.log(data)
      // window.alert('成功！');
        // window.location = '/shop';  
      return data.cal 
    })
    .catch((err) => {
        console.log('err', err);
    });
}
