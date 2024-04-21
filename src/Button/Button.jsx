import React from 'react'

function Button(props) {
  return (
    <button className="text-white hover:scale-105 border-white border-2 rounded-lg px-5 py-2 text-xl font-semibold  bg-[#3f7261]">
      {props.name}
    </button>
  )
}

export default Button
