const spans = document.querySelectorAll('span')

spans.forEach((span) => {
  span.innerText = 0

  updateCounter()

  function updateCounter() {
    const target = span.dataset.target
    const c = +span.innerText
    const increment = Math.ceil(target / 200)
    if (c < target) {
      span.innerText = `${c + increment}`
      setTimeout(updateCounter, 1)
    } else {
      span.innerText = target
    }
  }
})
