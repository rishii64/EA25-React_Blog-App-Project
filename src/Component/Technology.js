import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Technology() {
  const data = useContext(bucket)
  console.log(data);
  return (
    <h1>Technology Page</h1>
  )
}
