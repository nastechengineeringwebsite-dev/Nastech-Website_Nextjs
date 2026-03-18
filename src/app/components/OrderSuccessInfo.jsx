"use client"

import React, { useEffect, useRef } from "react"
import confetti from "canvas-confetti"
import Flex from "./Flex"
import Button from "./Button"

const OrderSuccessInfo = ({ oid }) => {
  const boxRef = useRef(null)

  useEffect(() => {
    fireConfetti()
  }, [])

  const fireConfetti = () => {
    if (!boxRef.current) return

    const rect = boxRef.current.getBoundingClientRect()

    const x = 0.5
    const y = (rect.top + rect.height / 2) / window.innerHeight

    const count = 200
    const defaults = {
      origin: { x, y }
    }

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      })
    }
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fire(0.2, {
      spread: 60,
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }
  

  return (
    <Flex className="w-full flex justify-center items-center my-60 flex-col gap-y-12">
      <Flex
        ref={boxRef}
        className="flex flex-col items-center gap-y-7 p-10 rounded-2xl shadow-xl bg-blue-50 text-3xl font-semibold text-gray-700"
      >
        <h2 className="text-4xl">Order Success!</h2>
        <h3>Order Invoice No: <span className="text-text_secondary">#{oid}</span></h3>
      </Flex>
      
      <Button link={"/grateful_tokens"}>Return to Products</Button>
    </Flex>
  )
}

export default OrderSuccessInfo