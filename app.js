let start_btn = document.querySelector('.start-btn');
let username = document.querySelector('#username');
let container = document.querySelector('.container');
let valid = document.querySelector('#valid');
let quiz_container = document.querySelector('.quiz-container');
let std_name = document.querySelector('#std_name');
let result_container = document.querySelector('.result_container');
result_container.style.display = 'none';
let remarks = document.getElementById('remarks');
let emoji = document.getElementById('emoji');


start_btn.addEventListener('click', function() {
    if (username.value === '' || username.value === ' ' || username.value === '  ') {
        valid.innerHTML = "Name is Required";
    } else {
        container.style.display = 'none';
        quiz_container.style.display = 'block';
        std_name.innerHTML = username.value;
    }
});

var allQs = [{
        qs: 'What is Color of Mango?',
        answer: 'Yellow',
        opt1: 'Red',
        opt2: 'Orange',
        opt3: 'Green',
        opt4: 'Yellow'
    },
    {
        qs: 'What is the full form of RAM?',
        answer: 'Random access memory',
        opt1: 'Read only memory',
        opt2: 'Random access memory',
        opt3: 'Remove all memory',
        opt4: 'Run all memory '
    }, {
        qs: 'What is 7*5 = ?',
        answer: '35',
        opt1: '35',
        opt2: '49',
        opt3: '37',
        opt4: '42'
    },
    {
        qs: 'Which is the capital city of Pakistan?',
        answer: 'Islamabad',
        opt1: 'Karachi',
        opt2: 'Lahore',
        opt3: 'Islamabad',
        opt4: 'Peshawar'
    }
];
//

let Question = document.getElementById('Ques');
let toal_Qs = document.getElementById('total_qs');
let toal_QS = document.getElementById('total_QS');
toal_Qs.innerHTML = allQs.length;
toal_QS.innerHTML = allQs.length;
let crr_Qs_no = document.getElementById('qs_no');

let opt1 = document.querySelector('.q1');
let opt2 = document.querySelector('.q2');
let opt3 = document.querySelector('.q3');
let opt4 = document.querySelector('.q4');
Question.innerHTML = 'Q1: ' + allQs[0].qs;
opt1.innerHTML = allQs[0].opt1;
opt2.innerHTML = allQs[0].opt2;
opt3.innerHTML = allQs[0].opt3;
opt4.innerHTML = allQs[0].opt4;

//

function selected_answer() {
    let selected_ans = document.querySelectorAll('div.q');
    let next_btn = document.querySelector('.next-btn');
    for (let i = 0; i < selected_ans.length; i++) {
        selected_ans[i].onclick = function() {
            for (let j = 0; j < selected_ans.length; j++) {
                if (selected_ans[j].classList.contains('selected_answer')) {
                    selected_ans[j].classList.remove('selected_answer');
                }
            }
            selected_ans[i].classList.add('selected_answer');
            next_btn.disabled = false;
            next_btn.style.opacity = .9;
        }
    }
    next_btn.disabled = true;
    next_btn.style.opacity = .3;

}
selected_answer();

let Next_btn = document.querySelector('.next-btn');
let a = 0;
crr_Qs_no.innerHTML = a + 1;
let r_score = 0;
let wr_score = 0;
//

Next_btn.addEventListener('click', function() {
    Next_btn.disabled = true;
    Next_btn.style.opacity = .3;
    let user_answer = document.querySelector('div.selected_answer').innerHTML;
    let right_ans = document.getElementById('right_ans');
    let wrong_ans = document.getElementById('wrong_ans');
    let Percentage = document.getElementById('percentage');
    if (user_answer == allQs[a].answer) {
        r_score++;
        right_ans.innerHTML = r_score;
    } else if (user_answer != allQs[a].answer) {
        wr_score++;
        wrong_ans.innerHTML = wr_score;
    }
    let perc = r_score * 100 / allQs.length;
    percentage.innerHTML = perc + "%";

    // **********************

    let selected_a = document.querySelectorAll('div.q');
    for (let i = 0; i < selected_a.length; i++) {
        selected_a[i].classList.remove('selected_answer');
    }
    //
    if (a < allQs.length - 1) {
        a++;
        let b = a + 1
        Question.innerHTML = 'Q' + b + ': ' + allQs[a].qs;
        opt1.innerHTML = allQs[a].opt1;
        opt2.innerHTML = allQs[a].opt2;
        opt3.innerHTML = allQs[a].opt3;
        opt4.innerHTML = allQs[a].opt4;
        crr_Qs_no.innerHTML = a + 1;
    } else {
        a = 0;
        let b = a + 1
        Question.innerHTML = 'Q' + b + ': ' + allQs[a].qs;
        opt1.innerHTML = allQs[a].opt1;
        opt2.innerHTML = allQs[a].opt2;
        opt3.innerHTML = allQs[a].opt3;
        opt4.innerHTML = allQs[a].opt4;
        crr_Qs_no.innerHTML = a + 1;
        quiz_container.style.display = 'none';
        result_container.style.display = 'block';
        if (perc >= 80) {
            remarks.innerHTML = "Congractulations!";
            remarks.style.color = 'green';
            emoji.src = "smile.png";
        } else if (perc >= 70) {
            remarks.innerHTML = "Well Done!";
            remarks.style.color = 'green';
            emoji.src = "smile.png";
        } else if (perc >= 50) {
            remarks.innerHTML = "Good. Keep it Up!";
            remarks.style.color = 'orange';
            emoji.src = "smile.png";
        } else {
            remarks.innerHTML = "Bad Luck! Try Again";
            remarks.style.color = 'red';
            emoji.src = "sad.png";
        }
    }
    // ***************
});


//

let try_again = document.querySelector('.try_again');
let go_home = document.querySelector('.go_home');
try_again.addEventListener('click', function() {
    quiz_container.style.display = 'block';
    result_container.style.display = 'none';
    r_score = 0;
    wr_score = 0;
    right_ans.innerHTML = 0;
    wrong_ans.innerHTML = 0;
});
//