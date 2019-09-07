import React from 'react'
import withLocation from "../components/withLocation"

const ItsMe = ({search}) => {
  const {token} = search
  return (
    <p>{token === process.env.GATSBY_TOKEN ? process.env.GATSBY_SECRET_KEY : "Hola"}</p>
  )
}

export default withLocation(ItsMe)
