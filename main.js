import 'normalize.css';
import './index.less';

// const button = document.querySelector('button_scroll');
// const topic = document.querySelector('.title_for_btn');

// button.addEventListener('click', (e) => {
//   topic.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//   });
// });

var hiddenElement = document.getElementById("box");
var btn = document.querySelector('.button');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}


btn.addEventListener('click', handleButtonClick);