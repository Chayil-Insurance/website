import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountUp = ({ end, label }) => {
  const [state, setState] = useState(null)
  const ref = useRef(0)

  const accumulator = end / 200

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator)
      if (result > end) return setState(end)
      setState(result)
      ref.current = result
    }
    setTimeout(updateCounterState, 50)
  }

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      updateCounterState()
    }

    return () => (isMounted = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end])

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
      }}>
      <motion.div className="md:text-6xl text-3xl font-bold lg:text-white text-black">
        {state}
      </motion.div>
      <div className="lg:text-white text-sm text-center font-medium text-black">
        {label}
      </div>
    </motion.div>
  )
}

export default CountUp
