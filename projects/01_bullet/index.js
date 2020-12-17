
const container = document.querySelector('#main_container')

const createBullet = () => {
  const newBullet = document.createElement('img');
  newBullet.setAttribute('id', 'bullet');
  container.appendChild(newBullet);
  
  return newBullet;
}


const putBullet = (bullet) => {
  let curBullet = 220;
  bullet.style.left = curBullet + 'px'
  const intervalBullet = setInterval(()=>{
    bullet.style.left = curBullet + 'px'
    curBullet += 40;
    if (curBullet > 1300) {
      deleteBullet(bullet)
      clearInterval(intervalBullet)
    }
    console.log(curBullet)
  },100)
}

const deleteBullet = (bullet) => {
  container.removeChild(bullet)
}

const shot = (e) => {
  const judgekey = e.keyCode;
  
  // const curPutBullet = putBullet()
  // const valuePutbullet = putBullet(createNewBullet)
  // const valueDeletebullet = deleteBullet(curPutBullet)

  if (judgekey === 68) {
    const createNewBullet = createBullet()
    putBullet(createNewBullet)
  }
} 

document.addEventListener('keydown', shot);