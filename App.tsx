import { EntityId } from '@reduxjs/toolkit'
import { memo } from 'react'
import { counterActions, counterSelectors } from '../../services/counet/slice'
import { useAppDispatch, useAppSelector } from '../../store'
import styles from './counter.module.css'
import clsx from 'clsx'

export interface CounterProps {
  counterId: EntityId
}

const intervalMs = 1_000
const delayMs = 2_000

export const Counter = memo(function Counter({ counterId }: CounterProps) {
const counter = useAppSelector((state) => counterSelectors.selectById(state, counterId));
const appDispatch = useAppDispatch()

if (!counter) {
  return null;
}

const { id, valur } = counter

const add = () => appDispatch(counterActions.updateBy({ id, delta: +1 }))
const subtract = () => appDispatch(counterActions.updateBy({ id, delta: -1 }))
const close = () => appDispatch(counterActions.removeCounter(id))
const updateAsynd = () => appDispatch(counterActions.updateByAsync({ id, delayMs, delta: 1 }))
const intervalUpdate = () => {
  if (counter.ontervalMs) {
    appDispatch(counterActions.cancelAsyncUpdates(id))
  } else {
    appDispatch(
      counterActions.updateByPeriodically({ id, delta: 1, intervalMs })
    )
  }
}
return (
  <section className={clsx('paper', styles.wrapper)}>
    <button
      type='button'
      className={styles.closeBtn}
      aria-label='close'
      title='close'
      onClick={close}
    >
      &times;
    </button>
    <h4>ID: {id}</h4>
    <strong className={styles.btnGroup}>{value}</strong>
    <div className='btn-small'>
      <button className='btn-small' type='button' onClick={add}>+</button>
    </div>
  </section>
)
}
