const urlParams = new URLSearchParams(window.location.search);

document.getElementById('title').innerHTML = '訂購的餐盒';

window.addEventListener('load', () => {
    if (!checkLocalStorage()) {
        window.alert('Please log in first.');
        window.location = 'index.html';
    }
    const email = localStorage.getItem('email');
    fetch(`./finishLunchbox?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(async (response) => {
            if (!response.ok) {
                var noclass_done_Content = document.createTextNode('尚未有需要評論的餐盒哦!');
                document.getElementById('profile_add_info').appendChild(noclass_done_Content);
                throw await response.text();
            }
            return response.json();
        })
        .then((data) => {
            console.log('yuhan data', data);
            var count = data.length;
            console.log('test name', data[0].name);
            for (var i = 0; i < count; i++) {
                //替換課程
                var starDiv = document.createElement('div');
                starDiv.className = 'star';
                var start1_Input = document.createElement('input');
                var start2_Input = document.createElement('input');
                var start3_Input = document.createElement('input');
                var start4_Input = document.createElement('input');
                var start5_Input = document.createElement('input');

                start1_Input.type = 'radio';
                start1_Input.name = 'rdStar';
                start1_Input.value = '1';
                start1_Input.setAttribute('onClick', 'star_num(1)');

                start2_Input.type = 'radio';
                start2_Input.name = 'rdStar';
                start2_Input.value = '2';
                start2_Input.setAttribute('onClick', 'star_num(2)');

                start3_Input.type = 'radio';
                start3_Input.name = 'rdStar';
                start3_Input.value = '3';
                start3_Input.setAttribute('onClick', 'star_num(3)');

                start4_Input.type = 'radio';
                start4_Input.name = 'rdStar';
                start4_Input.value = '4';
                start4_Input.setAttribute('onClick', 'star_num(4)');

                start5_Input.type = 'radio';
                start5_Input.name = 'rdStar';
                start5_Input.value = '5';
                start5_Input.setAttribute('onClick', 'star_num(5)');

                starDiv.appendChild(start1_Input);
                starDiv.appendChild(start2_Input);
                starDiv.appendChild(start3_Input);
                starDiv.appendChild(start4_Input);
                starDiv.appendChild(start5_Input);

                var titleInput = document.createElement('input');
                titleInput.type = 'hidden';
                titleInput.id = 'product_name';

                titleInput.value = data[i].name;
                var titleContent = document.createTextNode(data[i].name);
                var classDiv_a = document.createElement('a');
                classDiv_a.href = '#';
                classDiv_a.appendChild(titleContent);
                classDiv_a.appendChild(titleInput);

                var title_comment_form = document.createElement('div');

                var comment_textarea = document.createElement('textarea');
                comment_textarea.className = 'comment_textarea';
                comment_textarea.type = 'text';
                comment_textarea.id = 'comment_textarea';

                var subtitleContent = document.createTextNode(data[i].date.split('T')[0]);
                var subtitleClassDiv = document.createElement('div');
                // subtitleClassDiv_a.href = '#';
                subtitleClassDiv.appendChild(subtitleContent);
                let starInput = document.createElement('input');
                starInput.type = 'hidden';
                starInput.id = 'star_number';
                starInput.name = 'star_number';
                starInput.value = '5';

                var submitInput = document.createElement('input');
                submitInput.type = 'button';
                submitInput.className = 'btn btn-info';

                submitInput.setAttribute('onclick', 'comment(' + data[i].contract_id + ')');
                submitInput.value = '送出評論';

                title_comment_form.appendChild(classDiv_a);
                title_comment_form.appendChild(subtitleClassDiv);

                var star_number = data[i].star;
                if (star_number == null || star_number == undefined || star_number == '') {
                    title_comment_form.appendChild(starDiv);
                    title_comment_form.appendChild(starInput);
                    title_comment_form.appendChild(comment_textarea);
                    title_comment_form.appendChild(submitInput);
                } else {
                    var commentContent = document.createTextNode('感謝評論！');
                    var commentDiv = document.createElement('div');
                    commentDiv.className = 'thank_text';
                    commentDiv.appendChild(commentContent);
                    title_comment_form.appendChild(commentDiv);
                }

                var classImg = document.createElement('img');
                var classImg_a = document.createElement('a');
                classImg.src = 'images/lunchbox-01.png';
                classImg_a.href = '#';

                var classDiv = document.createElement('div');
                classDiv.className = 'profile_class_info';
                classDiv.appendChild(title_comment_form);

                var imgDiv_a = document.createElement('a');
                imgDiv_a.href = '#';

                var imgDiv_img = document.createElement('img');
                imgDiv_img.src = 'images/lunchbox-01.png';

                imgDiv_a.appendChild(imgDiv_img);

                var profileDiv = document.createElement('div');
                profileDiv.className = 'profile_info';

                profileDiv.appendChild(imgDiv_a);
                profileDiv.appendChild(classDiv);

                document.getElementById('profile_add_info').appendChild(profileDiv);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

function star_num(e) {
    document.getElementById('star_number').value = e;
}

const comment = (contract_id) => {
    // const data = {
    //     contract_id: contract_id,
    //     email: localStorage.getItem('email'),
    //     product_name: document.getElementById('product_name').value,
    //     star_number: document.getElementById('star_number').value,
    //     comment_textarea: document.getElementById('comment_textarea').value,
    // };
    let comment = true;
    window.alert('評論成功！');
    window.location = '/comment.html';
    // console.log('data', data);
    // const fetchPath = urlParams.get('title') === 'user' ? '/comment_publish' : `/comment_rent`;

    // fetch(fetchPath, {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then(async (response) => {
    //         if (!response.ok) {
    //             const error = await response.text();
    //         }
    //         return response;
    //     })
    //     .then((data) => {
    //         window.alert('評論成功！');
    //         window.location = '/comment.html';
    //     })
    //     .catch((err) => {
    //         console.log('err', err);
    //     });
};
