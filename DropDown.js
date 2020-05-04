import React, {Component} from 'react';


class DropDown extends Component {
render() {
  console.log(this.props.menu);
  return(
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select An Options
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  	{this.props.menu.map(function (cat, i) { 
												return <a key={i}>
													<p>{cat.category}</p>
                    
												</a>
											})}
  </div>
</div>
  )
}
}

export default DropDown