import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Bollywood() {
  const data = useContext(bucket)
  console.log(data);
  return (
    <h1>Bollywood Page</h1>
  )
}
 