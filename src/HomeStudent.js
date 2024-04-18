import React from 'react'
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Home from './Home';
const HomeStudent = () => {
  return (
    <div>
      <section>
        <HeaderAfterLogin/>
      </section>
      <section>
       <Home/>
      </section>
    </div>
  )
}

export default HomeStudent
