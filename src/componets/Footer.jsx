import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
function Footer() {
  



  return (
    <div className="fcontainer">

    <div className='ftcontainer'>
      <div className="ftl">

<GitHubIcon/>
<span>https://github.com/fmpaul1</span>

      </div>
      <div className="ftc">
        <WifiCalling3Icon/>
     <i> 07080824483</i>

      </div>
      <div className="ftr">
<AttachEmailIcon/>
<span>abelpaul12@gmail.com</span>
      </div>

  
    </div>
    </div>
  )
}

export default Footer