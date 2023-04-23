const buttons=document.getElementsByClassName('button');
const maindisplay=document.getElementById('main-display');

  for(let i=0;i<buttons.length;i++){
buttons[i].addEventListener('click',(e)=>{
         let displayText='';
      switch(e.target.value){
        case 'AC':
            break;
        case '=':
            displayText=eval(maindisplay.value);
            break;
        case 'DE':
            displayText=maindisplay.value.slice(0,maindisplay.value.length-1);
            break;
        default:
            displayText=`${maindisplay.value}${e.target.value}`;
      }
      maindisplay.value=displayText;

})
  }
