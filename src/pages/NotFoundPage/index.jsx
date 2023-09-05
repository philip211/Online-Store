import React from 'react'
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.error}>
      <img src="/media/Error.png" alt="Error" aria-label="Error" />
    </div>
  )
}