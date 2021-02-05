const cookie = document.getElementById('bigCookie')
const upgrade = document.querySelectorAll('.product, unlocked')

function inc() {
  cookie.click()
  upgrade.forEach((u) => {
    u.click()
  })
}

setInterval(inc, 10)
