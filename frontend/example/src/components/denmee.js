import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/counterSlice'

export default ()=> {

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}