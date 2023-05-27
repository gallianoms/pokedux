import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        aria-label='increment value'
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <span>{count}</span>
      <button
        aria-label='decrement value'
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  )
}

export default Counter
