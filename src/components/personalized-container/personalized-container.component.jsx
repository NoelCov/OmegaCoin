import React from 'react'
import "./personalized-container.styles.scss"

export const PersonalizedContainer = ({ title, information }) => {
  return (
    <div className="container">
      <p className="container-title">{title.toUpperCase()}</p>
      <p className="container-information">{information}</p>
    </div>
  )
}
