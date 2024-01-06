import '@/scss/style.scss'

window.addEventListener('load', () => {
  console.log('ロード完了')
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="start_1">
    <div class="start_1--circle_1"></div>
  </div>
`
