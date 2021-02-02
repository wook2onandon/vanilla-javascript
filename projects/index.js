const inputText = document.querySelector('#input_text')
const inputButton = document.querySelector('#input_button')
const inputListContainer = document.querySelector('#input_list_container')
const deleteButton = document.querySelector('#delete_button')

const createCard = () => {
  const createList = document.createElement('li')
  createList.id = 'input_list';
  createList.innerText = inputText.value;
  inputListContainer.appendChild(createList)
  inputText.value = '';
  return createList;
}

const createButtonContainer = (card) => {
  const createEditContainer = document.createElement('div')
  createEditContainer.id = 'list_edit_container';
  card.appendChild(createEditContainer)
  return createEditContainer;
}

const createEdit = (container) => {
  const createEditButton = document.createElement('button')
  createEditButton.id = 'edit_button';
  createEditButton.innerText = 'edit';
  container.appendChild(createEditButton)
  return createEditButton;
}

const createDelete = (container) => {
  const createDeleteButton = document.createElement('button')
  createDeleteButton.id = 'delete_button';
  createDeleteButton.innerText = 'delete';
  container.appendChild(createDeleteButton)
  return createDeleteButton;
}

// const editList = () => {

// }

// const deleteList = (node) => {
//   const card = node.parentNode;
//   const cardList = card.parentNode;
//   cardList.removeChild(card.nextSibling)
//   cardList.removeChild(card)
// }

const handleInputClick = () => {
  if (inputText.value) {
    const createTodolist = createCard()
    const createContainer = createButtonContainer(createTodolist)
    createEdit(createContainer)
    createDelete(createContainer)
  } else {
    return;
  }
}

// const hadleDeleteClick = () => {
// deleteList()
// }

inputButton.addEventListener('click', handleInputClick)
// deleteButton.addEventListener('click', hadleDeleteClick)