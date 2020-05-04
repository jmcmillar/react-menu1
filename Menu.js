import React, { Component } from 'react';


class Menu extends Component {
	render() {
		return (
            <div>
                {
					this.props.menu.map((item, i) => {
						return (
							<div key={i}>
								<div>
								
									<div>
										<div>
											<h2 href={item.category}>{item.category}</h2>
										</div>
											{item.menuItems.map(function (menuitems, i) { 
												return <div className="row" key={i}>
													<div className="col-8"><p>{menuitems.itemTitle}</p></div>
                          <div className={
                            'col-4 ' + 
                              (menuitems.itemPrice === '' ? 'hide': '')
                                }><p>${parseFloat(menuitems.itemPrice).toFixed(2)}
                                 </p></div>
                                 <div className="clearfix"></div>
                                {menuitems.multi.isMulti == true ? 
                                menuitems.multi.multiItems.map(function (multiitems, i)
                                {
                                  return <div className="row" style={{width: "100%", paddingLeft: "40px"}} key={i}>
                                  <div className="col-8 multi-item"><p>{multiitems.multiName}
                                  </p>
                                  </div>
                                   <div className="col-4">$ {parseFloat(multiitems.multiPrice).toFixed(2)}</div>
                                  </div>
                                }

                                )
                                 : ''}
                                
                                
                               
												
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Menu;