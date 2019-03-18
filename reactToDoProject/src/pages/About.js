import React from 'react'

const About = (props) => {
  console.log(props);
  return(
      <div className="container">
      <h2> About us </h2>
      <p>lkjsalkdjsalkjdsa
        lkkjdlksajdklas
        ljlskdjlkasjdlkajd
      </p>
      <button type="button" onClick={
        () => {
          props.history.push('/')
        }

      }>Go to home</button>
            <button type="button" onClick={
        () => {
          props.history.push('/contact')
        }

      }>Go to Contact</button>
    </div>
  )
}
export default About