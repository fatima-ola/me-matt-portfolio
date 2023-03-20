import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className='text-center footer'>
      <p>Copyright {year} @matthewabikoye </p>
    </div>
  )
}

export default Footer