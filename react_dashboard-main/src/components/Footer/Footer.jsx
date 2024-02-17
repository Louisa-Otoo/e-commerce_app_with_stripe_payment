import React from 'react'
import '../Footer/Footer.css'

export const Footer = () => {
  const today = new Date();

  return (
    <>
      <div className='footer'>
        <p>Heights &copy; {today.getFullYear()}</p>
      </div>
    </>
  )
}


export default Footer;