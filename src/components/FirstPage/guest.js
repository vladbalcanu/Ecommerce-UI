import { useState, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Guest.css';
const Guest = () => {
    return (
        <div className="login-box">
        <head>
 <title>.EXE</title>
      </head>
      <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#E1701A">
  <tr>
  	 <td>
  	 	<table border="0" width="85%" cellpadding="15" cellspacing="0" align="center">
           <tr>
           	   <td>
           	 	  <font face="BEBAS NEUE" color="black" size="50">
           	    <strong>.EXE</strong>
           	    </font>
           	    </td>
           	    <td width="50%">&nbsp;</td>
           	    <td><a href="#home">
             	  <font face="arial" color="#ffffff" size="4">
           	    Home
           	    </font></a>
           	    </td>
                
           	    <td><a href="#products">
           	   	<font face="arial" color="#ffffff" size="4">
           	    Products
           	    </font></a>
           	    </td>
                
           	    <td><a href="#about">
           	   	<font face="arial" color="#ffffff" size="4">
           	    About
           	    </font></a>
           	    </td>           	   
           	    
           	    <td><a href="#Contact Us">
           	    <font face="arial" color="#ffffff" size="4">
           	    Contact Us
           	    </font></a>
                </td>
           	    <td><a href="#Order">
           	   	<font face="arial" color="#ffffff" size="4">
           	    Order
           	    </font></a>
           	   </td>
           </tr>
  	 	</table>
  	 </td>
  </tr>
</table>
        </div>
    )
}

export default Guest;
// ReactDom.render(React.createElement(App), document.getElementById("root"));