class User {
  money;
  sword;

  constructor(money, sword) {
    this.money = money;
    this.sword = sword;
  }

  getName() {
    return this.name;
  }

  getMoney() {
    return this.money
  }

  getSword() {
    return this.sword
  }

  enhance() {
    if (this.sword == false) {
      return '칼이 없습니다.';
    }
    if (this.sword.level >= this.sword.maxLevel) {
      return '더 이상 강화할 수 없습니다.';
    }
    if (this.money < this.sword.enhanceCostPerLevel[this.sword.level - 1]) {
      return '강화비용이 부족합니다.';
    }
    this.money -= this.sword.getEnhanceCost();
    const res = this.sword.enhance();
    return res
  }

}

class Sword {
  name;
  damage = 1;
  level = 1;
  maxLevel = 9
  enhanceCostPerLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  enhanceCostPerPropobility = [100, 64, 32, 16, 8, 4, 2, 1]
  damagePerLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(name) {
    this.name = name
  }

  getLevel() {
    return this.level;
  }

  getDamage() {
    return this.damage;
  }

  getEnhanceCost() {
    return this.enhanceCostPerLevel[this.level - 1];
  }

  getEnhancePropobility() {
    return this.enhanceCostPerPropobility[this.level - 1];
  }

  enhance() {
    if (Math.floor(Math.random() * 100) <= this.getEnhancePropobility()) {
      this.level += 1;
      this.damage = this.damagePerLevel[this.level - 1]
      return true;
    } else {
      return false;
    }
    // 성공 여부 알려주기
  }


}

const name = document.querySelector('#name')
const money = document.querySelector('#money')
const level = document.querySelector('#level')
const damage = document.querySelector('#damage')
const cost = document.querySelector('#cost')
const propobility = document.querySelector('#propobility')
const enhanceButton = document.querySelector('#enhanceButton')
const message = document.querySelector('#message')

const bfSword = new Sword('bfSword')
const wook = new User(100, bfSword)

console.log(bfSword, wook);

const draw = () => {

  name.innerText = `name: ${wook.getName()}`
  money.innerText = `money: ${wook.getMoney()}`

  level.innerText = `level: ${wook.getSword().getLevel()}`
  damage.innerText = `damage: ${wook.getSword().getDamage()}`

  cost.innerText = `cost: ${wook.getSword().getEnhanceCost()}`
  propobility.innerText = `propobility: ${wook.getSword().getEnhancePropobility()}`

}

enhanceButton.addEventListener('click', () => {
  const result = wook.enhance()

  const getMessage = () => {
    if (typeof result === 'string') {
      return result
    } else if (result) {
      return `강화에 성공하셨습니다. level (${wook.getSword().getLevel() - 1} -> ${wook.getSword().getLevel()})`
    } else {
      return `강화에 실패하셨습니다. `
    }
  }

  message.innerText = getMessage()

  draw()

})

draw()