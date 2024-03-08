import React from 'react'

const GridSection = () => {
    const Data = ["hyy","hello","gand","marao"]
  return (
    <>
    <div>
        {Data.map((it)=>{
            return(
                <h1>{it}</h1>
            )
        })}
    </div>
    </>
  )
}

export default GridSection