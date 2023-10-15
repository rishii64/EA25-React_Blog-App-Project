import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Hollywood() {
  const data = useContext(bucket)
  console.log(data);
  return (
    <h1>Hollywood Page</h1>
  )
}
