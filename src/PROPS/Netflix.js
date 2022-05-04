import React from 'react'
import Props from './Props'
import SeriesData from './SeriesData'

function Netflix() {
    return (
        <div><Props key={SeriesData[0].id}
            image={SeriesData[0].image}
            title={SeriesData[0].title}
            name={SeriesData[0].name}
            link={SeriesData[0].link} /></div>
    )
}

export default Netflix