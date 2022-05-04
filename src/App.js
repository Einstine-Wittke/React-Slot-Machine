import React from 'react'
import './Conditional Rendering/Cond.css'


const SlotMach = (props) => {
  // let x = '😃'
  // let y = '😃'
  // let z = '😂'

  // let x = props.x
  // let y = props.y
  // let z = props.z

  let { x, y, z } = props


  if ((x === y) && (y === z)) {
    return (
      <>
        <div className='space'>
          {x}  {y}   {z}
        </div>
        <h6>This is Matching</h6>
        <hr />
      </>
    )
  } else {
    return (
      <>
        <div className='space'>
          {x}   {y}   {z}
        </div>
        <h6>This is Not Matching </h6>
        <hr />
      </>
    )
  }

}



function App() {
  return (
    <>
      <div className='App'>
        <h1 className='heading'>🎰   <span className=' animate-charcter'>Welcome To Slot Machine Game </span> 🎰</h1>

      </div>

      <div className='slotmachine'>
        <SlotMach x='🎅' y='🎅' z='🎅' />
        <SlotMach x='🍗' y='🍩' z='🥩' />
        <SlotMach x='💔' y='⭕' z='⭕' />
        <SlotMach x='✅' y='✅' z='✅' />
      </div>
    </>
  )
}

export default App