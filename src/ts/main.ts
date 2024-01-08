import '@/scss/style.scss'

window.addEventListener('load', () => {
  console.log('ロード完了')
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="animation_1">
    <div class="animation_1--wrap">
      <div class="animation_1--circle animation_1--circle_1"></div>
      <div class="animation_1--circle animation_1--circle_2"></div>
      <div class="animation_1--circle animation_1--circle_3"></div>
      <div class="animation_1--bar animation_1--bar_1"></div>
      <div class="animation_1--bar animation_1--bar_2"></div>
      <div class="animation_1--bar animation_1--bar_3"></div>
      <div class="animation_1--text">約</div>
    </div>
  </div>
`
