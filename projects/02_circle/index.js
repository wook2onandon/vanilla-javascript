const container = document.querySelector('#container')

const createCircle = () => {
  const nextCircle = document.createElement('div')
  nextCircle.setAttribute('id', 'randomCircle');
  container.appendChild(nextCircle)

  return nextCircle;
}

const circleRandomPos = (circle) => {
  circle.style.left = 0 + 'px'
  circle.style.top = 0 + 'px'

  const getRandomX = () => Math.floor(Math.random() * 1900) + 1;
  const getRandomY = () => Math.floor(Math.random() * 900) + 1;
  const nextPosX = getRandomX()
  const nextPosY = getRandomY()

  circle.style.left = nextPosX + 'px'
  circle.style.top = nextPosY + 'px'
}

const circleClickPos = (clickX, clcickY, circle) => {
  circle.style.left = clickX + 'px'
  circle.style.top = clcickY + 'px'
}

const deleteCircle = (circle) => {
  container.removeChild(circle)
}

const colorAndSize = (circle) => {
  const randomNumber = (min, max) => {
    const nextNum = Math.floor(Math.random() * (max - min) + min);

    return nextNum;
  }

  const randomColor = (circle) => {
    const nextRandomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    return nextRandomColor;
  }

  let nextWidthAndHeight = randomNumber(50,300)
  let nextRadius = nextWidthAndHeight/2
  let nextColor = randomColor()

  circle.style.width = nextWidthAndHeight + 'px'
  circle.style.height = nextWidthAndHeight + 'px'
  circle.style.backgroundColor = nextColor
  circle.style.borderRadius = nextRadius + 'px'

  // let circleStyle = circle.setAttribute('style', `width: ${nextWidthAndHeight}px; height: ${nextWidthAndHeight}px; border-radius: ${nextRadius}px; background-color:${nextColor}`)

  const intervalSizeAndColor = setInterval(() => {
    circle.style.width = nextWidthAndHeight + 'px'
    circle.style.height = nextWidthAndHeight + 'px'
    circle.style.backgroundColor = nextColor
    circle.style.borderRadius = nextRadius + 'px'

    nextWidthAndHeight += 1
    nextRadius += 0.5
    nextColor = randomColor()
    if (nextWidthAndHeight > 500) {
      clearInterval(intervalSizeAndColor)
      deleteCircle(circle)
    }
  } , 100)
}

const handleKeydown = (e) => {
  const judgekey = e.keyCode;
  if(judgekey === 68) {
    const createdCircle = createCircle()
    circleRandomPos(createdCircle)
    colorAndSize(createdCircle)
  }
}

const handleClick = (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;
  const createdCircle = createCircle()
  circleClickPos(clickX, clickY, createdCircle)
  colorAndSize(createdCircle)
}

window.addEventListener('keydown', handleKeydown)
window.addEventListener('click', handleClick)
