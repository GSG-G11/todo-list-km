import React from 'react'

const TopForms = ({ toggleBtn, openAdd }) => {
  return (
    <div className="sec-top">
      <h3 className="sec-title">My Tasks</h3>
      <button
        className={`btn open-btn ${openAdd ? 'close' : ''}`}
        onClick={toggleBtn}
      >
        {openAdd ? (
          <div className="close-span">
            <span className="ri-close-line icon"></span> Cancel
          </div>
        ) : (
          <div className="add-span">
            <span className="ri-add-fill icon"></span> Add Task
          </div>
        )}
      </button>
    </div>
  )
}

export default TopForms
