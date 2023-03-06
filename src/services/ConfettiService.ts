const confettiId = 'img'

interface ConfettiType {
  setCount: (count: number) => void
  setSize: (size: number) => void
  setPower: (power: number) => void
  setFade: (fade: boolean) => void
  destroyTarget: (destroy: boolean) => void
}

export const ConfettiService = {
  play () {
    let confetti: ConfettiType | null = null

    try {
      // @ts-expect-error
      confetti = Confetti !== undefined ? new Confetti(confettiId) : null
      confetti?.setCount(300)
      confetti?.setSize(1)
      confetti?.setPower(40)
      confetti?.setFade(false)
      confetti?.destroyTarget(false)
    } catch (e) {
      console.warn('Confetti service is not available')
    }

    if (confetti == null) return

    setTimeout(() => {
      document.getElementById(confettiId)?.click()
    }, 0)
  }
}
