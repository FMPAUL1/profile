
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navcontainer'>
        <div className="navbar">
            <div className="navleft">
<h1> <a href="/">  ABEL PAUL   </a></h1>
            </div>
            <div className="navright">
<ul>
    <li><a href="/">HOME</a>  </li>
    <li><a href="/about">ABOUT  </a>  </li>
    <li><a href="project">RECENT PROJECTS</a></li>
    <li><a href="/resume">MY RESUME</a></li>
   

</ul>
            </div>
        </div>


    </div>
  )
}

export default Navbar