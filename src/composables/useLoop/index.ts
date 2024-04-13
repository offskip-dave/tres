import type { Fn } from '@vueuse/core'
import { useTresContext } from '../useTresContextProvider'

export function useLoop(cb: (arg0: any) => void, index = 0) {
  const ctx = useTresContext()
  const wrappedCallback = (params: any) => {
    cb({ ...params, ctx })
  }
  return ctx.loop.onLoop(wrappedCallback as Fn, index)
}