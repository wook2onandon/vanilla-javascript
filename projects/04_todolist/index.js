const inputText = document.querySelector('#input_text')
const inputButton = document.querySelector('#input_button')
const inputListContainer = document.querySelector('#input_list_container')
const listEditContainer = document.querySelector('#input_list')
const editButton = document.querySelector('.edit_button')
const deleteButton = document.querySelector('.delete_button')

const createCard = () => {
  const createList = document.createElement('div')
  const createListText = document.createElement('input')
  createList.id = 'input_list_box';
  createListText.id = 'input_list';
  inputListContainer.appendChild(createList)
  createList.appendChild(createListText)
  createListText.value = inputText.value;
  inputText.value = '';
  createListText.disabled = true;
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
  createEditButton.className = 'edit_button';
  createEditButton.innerText = 'edit';
  container.appendChild(createEditButton)
  return createEditButton;
}

const createDelete = (container) => {
  const createDeleteButton = document.createElement('button')
  createDeleteButton.className = 'delete_button';
  createDeleteButton.innerText = 'delete';
  container.appendChild(createDeleteButton)
  return createDeleteButton;
}

const clickEventHandler = () => {
  if (inputText.value) {
    const createTodolist = createCard()
    const createContainer = createButtonContainer(createTodolist)
    const createEditBtn = createEdit(createContainer)
    const createDelBtn = createDelete(createContainer)
    const clickDeleteHandler = () => {
      createDelBtn.parentNode.parentNode.remove();
    }
    const clickEditHandler = () => {
      if (createEditBtn.parentNode.previousSibling.disabled) {
        createEditBtn.parentNode.previousSibling.disabled = false;
      } else {
        createEditBtn.parentNode.previousSibling.disabled = true;
      }
    }
    createEditBtn.addEventListener('click', clickEditHandler)
    createDelBtn.addEventListener('click', clickDeleteHandler)
  } else {
    inputText.classList.toggle('input_text_error')
    return;
  }
}

const keydownEventHandler = (e) => {
  if (e.keyCode === 13) {
    if (inputText.value) {
      const createTodolist = createCard()
      const createContainer = createButtonContainer(createTodolist)
      const createEditBtn = createEdit(createContainer)
      const createDelBtn = createDelete(createContainer)
      const clickDeleteHandler = () => {
        createDelBtn.parentNode.parentNode.remove();
      }
      const clickEditHandler = () => {
        if (createEditBtn.parentNode.previousSibling.disabled) {
          createEditBtn.parentNode.previousSibling.disabled = false;
        } else {
          createEditBtn.parentNode.previousSibling.disabled = true;
        }
      }
      createEditBtn.addEventListener('click', clickEditHandler)
      createDelBtn.addEventListener('click', clickDeleteHandler)
    } else {
      inputText.classList.toggle('input_text_error')
      return;
    }
  }
}


inputButton.addEventListener('click', clickEventHandler)
document.addEventListener('keydown', keydownEventHandler)
