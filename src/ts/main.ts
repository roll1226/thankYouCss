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
      <div class="animation--text animation--text_1">約</div>
    </div>
  </div>

  <div class="animation_2">
    <div class="animation_2--tile animation_2--tile_1"></div>
    <div class="animation_2--tile animation_2--tile_2"></div>

    <div class="animation_2--triangle__wrap_1">
      <div class="animation_2--triangle animation_2--triangle_1"></div>
    </div>
    <div class="animation_2--triangle__wrap_2">
      <div class="animation_2--triangle animation_2--triangle_2"></div>
    </div>
    <div class="animation_2--triangle__wrap_3">
      <div class="animation_2--triangle animation_2--triangle_3"></div>
    </div>
    <div class="animation_2--triangle__wrap_4">
      <div class="animation_2--triangle animation_2--triangle_4"></div>
    </div>
    <div class="animation_2--triangle__wrap_5">
      <div class="animation_2--triangle animation_2--triangle_5"></div>
    </div>
    <div class="animation_2--triangle__wrap_6">
      <div class="animation_2--triangle animation_2--triangle_6"></div>
    </div>
    <div class="animation_2--triangle__wrap_7">
      <div class="animation_2--triangle animation_2--triangle_7"></div>
    </div>
    <div class="animation_2--triangle__wrap_8">
      <div class="animation_2--triangle animation_2--triangle_8"></div>
    </div>
    <div class="animation_2--triangle__wrap_9">
      <div class="animation_2--triangle animation_2--triangle_9"></div>
    </div>
    <div class="animation_2--triangle__wrap_10">
      <div class="animation_2--triangle animation_2--triangle_10"></div>
    </div>
    <div class="animation--text animation--text_2">２</div>
  </div>

  <div class="animation_3">
    <div class="animation_3--tile_wrap">
      <div class="animation_3--tile animation_3--tile_1"></div>
      <div class="animation_3--tile animation_3--tile_2"></div>
      <div class="animation_3--tile animation_3--tile_3"></div>
    </div>
    <div class="animation_3--square_wrap">
      <div class="animation_3--square animation_3--square_1"></div>
      <div class="animation_3--square animation_3--square_2"></div>
      <div class="animation_3--square animation_3--square_3"></div>
    </div>
    <div class="animation--text animation--text_3">年</div>
  </div>

  <div class="animation_4">
    <div class="animation_4--tile_wrap">
      <div class="animation_4--tile animation_4--tile_1"></div>
      <div class="animation_4--tile animation_4--tile_2"></div>
      <div class="animation_4--tile animation_4--tile_3"></div>
      <div class="animation_4--tile animation_4--tile_4"></div>
    </div>
    <div class="animation--text animation--text_4">間</div>
  </div>
`
