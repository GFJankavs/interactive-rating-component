let selectedChoice;

const choiceHandler = (e) => {
  const choiceQuery = document.querySelectorAll('.rating');
  choiceQuery.forEach((choice) => {
    if (Number(choice.innerText) !== e) {
      choice.classList.remove('rating--selected');
    } else if (Number(choice.innerText) === e) {
      selectedChoice = e;
      choice.classList.add('rating--selected');
    }
  });
};

const submitHandler = () => {
  const selectionContainer = document.querySelector('#container__main');
  const resultContainer = document.querySelector('#container__result');
  const resultTextContainer = document.querySelector('.result__container');

  selectionContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  const resultTextElement = document.createElement('p');
  resultTextElement.classList.add('result__text');
  resultTextElement.innerText = `You selected ${selectedChoice} out of 5`;

  resultTextContainer.appendChild(resultTextElement);
};
