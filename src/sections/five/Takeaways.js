import React, { useState } from 'react'
import { _mockTakeaways } from 'src/_mock/mockTakeaways'
import Takeaway from './Takeaway'
import Event from './event'

export default function Takeaways() {
  const [takeaways] = useState(_mockTakeaways)
  return (
    takeaways.length > 0 && takeaways.map((takeaway) => (
      <Event takeaway={takeaway} key={takeaway.id}/>
    ))
  )
}
