import React from 'react'
import './App.css'
import Amazon from './PROPS/Amazon';
import Netflix from './PROPS/Netflix';
import Props from './PROPS/Props'
import SeriesData from './PROPS/SeriesData'


const series = "youtube";

//  const FavoriteSeries = () => {
//   if (series === "netflix") {
//     return (
//       <Netflix/>
//     );
//   }
//   else {
//     return (
//       <Amazon/>
//     )
//   }
// }
const App = () => {
  return (
    <div className='App'>
      <h1>Top 5 Netflix Series of 2022</h1>
      {/* <FavoriteSeries/> */}
      {(series === "netflix") ? <Netflix /> : <Amazon />}
    </div>
  )
}

export default App
