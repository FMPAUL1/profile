import React from 'react'
import "./Project.css"
import { GitHub, GiteRounded } from '@mui/icons-material'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
function Projectpage() {
  return (
    <div className='general'>
<h1> WELCOME TO MY PROJECT PAGE </h1>
<p>THE RECENT PROJECT OF DATA ANALYTICS USING PYTHON,MATPLOTLIB,SNS </p>
<p> ALSO VIEW SOME OF MY LATEST SOFTWARE DEVELOPMENT PROJECTS COMPRISING OF DJANGO, PHP, REACT JS, AND EXPRESS JS BOTH SQL AND NOSQL DB </p>
     
     
        <h1>DATA SCIENCE/ANALYTICS PROJECTS </h1>
      <div className="data">
        <div className="datagrid">

<div className="dimg">
<img src="/images/datasciencetable.png" alt="boxplat" />
</div>
<div className="dinfo">
<p> Lorem ipsum dolor, sit amet <br/>consectetur adipisicing elit. Voluptas ipsum aut ipsam sit voluptates hic! </p>
        </div>
        </div>
        <div className='datagrid'>
        <div className="dimg">
<img src="/images/boxplot.jpg" alt="boxplat" />
</div>
<div className="dinfo">
<p> Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Voluptas ipsum aut ipsam sit voluptates hic! </p>
       
        </div>
        </div> 
        <div className='datagrid'>
        <div className="dimg">
<img src="/images/ds.jpg" alt="boxplat" />
</div>
<div className="dinfo">
<p> Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Voluptas ipsum aut ipsam sit voluptates hic! </p>
       
        </div>
        </div> 
</div>

      <h1> SOFT DEVELOPMENT PROJECTS </h1>
      <p>PROJECTS WILL BE UPDATED EVERY SUNDAY  </p>
   <div className="softcont">
    <div className="softleft">
<h1> PYTHON DJANGO</h1>
<ol>
  <li> BUILT WORD COUNTER APP,TO COUNT WORDS AND RETURN IN A DIFFERENT PAGE USING SESSION <a href="#"> 
  <a href="https://github.com/fmpaul1/wordscounterwithdjango"><GitHub/></a>
   </a></li>
  <li> BUILT A REST API WITH DJANGO  <a href="#"> 
  <a href="https://github.com/fmpaul1/djangotodoapp"><GitHub/></a>
   </a></li>
</ol>
    </div>
    <div className="softcenter">
<h1>EXPRESS AND REACT JS</h1>
<ol>
  <li>HOTEL BOOKING APP <a href="https://hotelbooking-h7fz.vercel.app/">
     <ArrowOutwardOutlinedIcon/> </a></li>
     <li> MERN AUTHENTICATION RESTAPI WITH SWAGGER DOC 
      <a href="https://github.com/fmpaul1/mytask"> <GitHub/> </a>

       </li>
</ol>
    </div>
    <div className="softright">
<h1>PHP </h1>
<ol> 
  <li> VOTING SYSTEM APP <a href="#"><GitHub/>
  </a></li>
  <li> SCHOOL MANAGEMENT SYSTEM <a href="#"><GitHub/> </a></li>
   </ol>
    </div>
   </div>
    
    </div>
  )
}

export default Projectpage