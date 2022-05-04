import React from 'react'
import Props from './Props'
import SeriesData from './SeriesData'

function Amazon() {
  return (
    <div>
        <Props key={SeriesData[2].id}
        image={SeriesData[2].image}
        title={SeriesData[2].title}
        name={SeriesData[2].name}
        link={SeriesData[2].link} />
    </div>
  )
}

export default Amazon