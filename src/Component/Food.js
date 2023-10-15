import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Food() {
  const data = useContext(bucket)
  console.log(data);
  return (
    <h1>Food Page</h1>
  )
}
