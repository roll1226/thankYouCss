import '@/scss/style.scss'

window.addEventListener('load', () => {
  console.log('ロード完了')
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="animation_1">
    <div class="animation_1--circle_1"></div>
    <div class="animation_1--circle_2"></div>
  </div>
`
