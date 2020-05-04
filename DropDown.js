import React, {Component} from 'react';
import moment from 'moment';
import Accordion from 'react-bootstrap/Accordion'


class DropDown extends Component {
render() {
  //  console.log(moment().format("HH:mm"));
   var timeNow = moment().format("HH:mm");
    
   function findCat(e) {
//  var lights = document.getElementsByClassName("light");
// while (lights.length)
//     lights[0].className = lights[0].className.replace(/\blight\b/g, "");
    
    let catinfo = e.target.parentElement.getAttribute('data-cat');
    console.log(catinfo);
   document.getElementById(catinfo).classList.add('show');

   }
  return(
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu Options
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

  	{this.props.menu.map(function (cat, i) {
				return <a key={i} data-cat={cat.category.replace(" ", "-")} className={'nav-item '+ (timeNow > cat.startTime && timeNow < cat.endTime ? '' : 'hide')} onClick={findCat}>
							  <p>{cat.category}</p>
              </a>})}
  </div>
</div>
  )
}
}

export default DropDown