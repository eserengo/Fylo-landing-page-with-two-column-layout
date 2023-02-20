const DisplayOnResize = () => {
  if (window.matchMedia("(width<=375px)").matches) {
    // RULES
    document.querySelectorAll('.desktop').forEach(item => {
      item.classList.add('hidden');
    })
    document.querySelectorAll('.mobile').forEach(item => {
      item.classList.remove('hidden');
    })
    document.querySelectorAll('.flex').forEach(item => {
      item.classList.remove('flex-row');
      item.classList.add('flex-col');
    })
    document.querySelector('.main').classList.add('flex-col');
    document.querySelector('.main').classList.add('center');
    document.querySelector('.social').classList.add('center');
    document.querySelector('.aside').classList.add('center');
  }
  if (window.matchMedia("(width>375px)").matches) {
    // RULES
    document.querySelectorAll('.mobile').forEach(item => {
      item.classList.add('hidden');
    })
    document.querySelectorAll('.desktop').forEach(item => {
      item.classList.remove('hidden');
    })
    document.querySelectorAll('.flex').forEach(item => {
      item.classList.remove('flex-col');
      item.classList.add('flex-row');
    })
    document.querySelector('.main').classList.remove('flex-col');
    document.querySelector('.main').classList.remove('center');
    document.querySelector('.social').classList.remove('center');
    document.querySelector('.aside').classList.remove('center');
  }
}

export default DisplayOnResize;