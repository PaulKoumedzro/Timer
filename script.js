/* get the html elements. */
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
/* create clock function */
function updateClock(){
    /*get Date data from computer*/
    let h = new Date().getHours() 
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()   
    let ampm =  "AM"
/* condition to reset the time after 12PM */
    if ( h > 12) {
        h -=12
         ampmEl.innerHTML='PM';
    };
    
    h = h < 10 ? "0" + h : h; 
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl, (innerText = ampm);
    
    setTimeout(() =>{
    updateClock()

    }, 1000)
};
updateClock();

/*    MESSAGE GENERATOR    */
//Store the message.
const messages = ['The journey of thousands miles begin with one step  —Lao Zhu',
'All our dreams can come true, if we have the courage to pursue them. —Walt Disney',
'The secret of getting ahead is getting started.  —Mark Twain','Do not limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. —Mary Kay Ash',
'The best time to plant a tree was 20 years ago. The second best time is now.” ―Chinese Proverb',
'Only the paranoid survive.” —Andy Grove',
'It is hard to beat a person who never gives up.” —Babe Ruth',
'If people are doubting how far you can go, go so far that you cannot hear them anymore.” —Michele Ruiz',
'Do what you feel in your heart to be right―for you will be criticized anyway. ―Eleanor Roosevelt',
'You can either experience the pain of discipline or the pain of regret. The choice is yours.'
,'Impossible is just an opinion. —Paulo Coelho','Magic is believing in yourself. If you can make that happen, you can make anything happen. —Johann Wolfgang Von Goethe'
,'If something is important enough, even if the odds are stacked against you, you should still do it. —Elon Musk'];



// get the html element.
let messageEl=document.getElementById('message');
// generate the random message.
const randomMessage=()=>{
    var newMessage = Math.floor(Math.random() *(messages.length ))// iterate through the array randomly.
    messageEl.innerText=messages[newMessage];// change the html element with the message.
};


