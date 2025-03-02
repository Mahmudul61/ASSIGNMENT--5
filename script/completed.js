// id="Completed"
// task_count=23  incresed
// task_assigend = 6  dicresed

// document.getElementById('Completed').addEventListener('click', function(){
//     alert('Board Updated Successful...')
    
//     // const number_1 = document.getElementById('num-1').innerText;
//     // const convertNum1 = parseInt(number_1);

//     // const number_2 =  document.getElementById('num-2').innerText;
//     // const convertNum2 = parseInt(number_2);

//     // convertNum1++;
//     // convertNum2--;
// })

// const buttons = document.getElementById('Completed')
//  for( const button of buttons){
//     button.addEventListener('click', function () {
//         // show the title in alert
//         alert('Board updated Successfully')
//  })
// }
    
const buttons = document.querySelectorAll('.Completed');


let clickedItem = 0;
for (const button of buttons) {
    button.addEventListener('click', function () {
        // show the title in alert
        alert('Board updated Successfully')

        // change the task assigned number
        const taskAssigned = getNumericTextById('dicresed');
        setInnerText('dicresed', taskAssigned - 1);

        // disable button
        button.setAttribute('disabled', true);
        button.style.opacity = '0.3';

        // increase task count
        const taskCount = getNumericTextById('incresed');
        setInnerText('incresed', taskCount + 1);

        
        // make the time
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours > 12 ? hours - 12 : hours;
        const accurateTime = `${hours}:${minutes}:${seconds} ${amOrPm}`

        // add the task in the Activity log
        const activityContainer = document.getElementById('Show-sms');

        const card = button.parentNode.parentNode;
        const taskTitle = card.children[1].innerText;

        const p = document.createElement('p');
        p.innerText = `You have Complete The Task ${taskTitle} at ${accurateTime}
        `;
        p.classList.add('p-[10px]' , 'mb-5' , 'rounded-[8px]' , 'bg-[#F4F7FF]' , 'leading-6' , 'font-medium');
        activityContainer.appendChild(p);

        clickedItem++;

        // show the congrats message
        if(clickedItem === buttons.length){
            alert('Congrates , You have completed all the current task')
        }
    });
}


// // add event in clear history btn
document.getElementById('clear_history_btn').addEventListener('click',function(){
    document.getElementById('Show-sms').innerHTML = ``;
})

// // add event in blog button
document.getElementById('Discover').addEventListener('click', function(){
    window.location.href ='blog.html'
})


// // change background on click theme icon
document.getElementById('Click-button').addEventListener('click' , function(){
    const random1 = Math.ceil(Math.random()*255);
    const random2 = Math.ceil(Math.random()*255);
    const random3 = Math.ceil(Math.random()*255);

    document.body.style.background = `rgb(${random1} , ${random2} , ${random3})`
})

// // make dynamic the date
const day = document.getElementById('day');
const date = document.getElementById('date');

day.innerText = new Date().toLocaleString("en-US", {weekday: 'short'});
date.innerText = new Date().toLocaleString("en-US", { year: 'numeric', month: 'short', day: 'numeric'});
;