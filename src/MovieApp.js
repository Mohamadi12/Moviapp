import React from 'react'

const MovieApp = () => {
    const movie=[
    {   id:1,
        title:"Mon Film",
        Description:"Formidable"
    },
    {   id:2,
        title:"Mon Film",
        Description:"Formidable"
    },
    {   id:3,
        title:"Mon Film",
        Description:"Formidable"
    }
    ]
  return (
    <div>
      {movie.map((el)=>(
   (    <> <h1 key={el.id}>{el.title}</h1>
        <p>{el.Description}</p> </>)
      ))}
    </div>
  )
}

export default MovieApp
