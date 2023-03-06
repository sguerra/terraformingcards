const confettiId = 'confetti'
// @ts-expect-error
const confetti = new Confetti(confettiId)

export const ConfettiService = {
  play () {
    confetti.setCount(300)
    confetti.setSize(1)
    confetti.setPower(40)
    confetti.setFade(false)
    confetti.destroyTarget(true)

    setTimeout(() => {
      document.getElementById(confettiId)?.click()
    }, 0)
  }
}
