import "./index.scss"

import 'onsignal/dist/OneSignalSDK'
import OnSignal from 'onsignal'

function showSubscription() {
  document.querySelector('.Hero__subscribe a.button').innerHTML = '🎉 Thank you for subscribing! 🎉'
}

document.addEventListener('DOMContentLoaded', () => {
  const onSignal = new OnSignal('ab35e854-f655-483c-aa26-c8f2dc12a2b8')
  if (onSignal.isSubscribed())
    showSubscription()
  else {
    document.querySelector('.Hero__subscribe a.button').addEventListener('click', () => {
      onSignal.subscribe()
      showSubscription()
    })
  }

  document.querySelector('a#more').addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.Hero').offsetHeight,
      behavior: 'smooth'
    })
  })
})
