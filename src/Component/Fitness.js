import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Fitness() {
  const data = useContext(bucket)
  console.log(data);
  return (
    <h1>Fitness Page</h1>
  )
}
