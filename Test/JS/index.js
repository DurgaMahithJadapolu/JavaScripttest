
  let userScore = 0;
  let computerScore = 0;
  let userChoice, computerChoice;


  document.getElementById('selection').style.display = 'none';
  document.getElementById('rules').style.display = 'none';
  document.getElementById('main').style.display = 'none';

  function playGame(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    userChoice = choice;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    document.getElementById('buttons').style.display = 'none';

    // Display user and computer choices with images
    displayUserChoice();
    displayComputerChoice();

    if (userChoice === computerChoice) {
      result = 'It\'s a draw!';
      displayPlayAgainButton();
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
      userScore++;
      displayNextButton();
    } else {
      result = 'You lose!';
      computerScore++;
      displayPlayAgainButton();
    }

    updateScore();
    displayResult(result);
    displayChoices();
  }


  //   function displayUserChoice() {
  //     document.getElementById('selection').style.display = 'block';
  //     const userSelectButton = document.getElementById('user_select');
  //     userSelectButton.querySelector('img').src = `/images/icons-${choices}-64 1.png`;
  //     userSelectButton.querySelector('img').alt = `${userChoice} icon`;

  // }

  function displayUserChoice() {
    document.getElementById('selection').style.display = 'block';
    const userSelectButton = document.getElementById('user_select');

    userSelectButton.classList.remove('btn-rock', 'btn-paper', 'btn-scissors');


    // Set the correct image source based on the user's choice
    switch (userChoice) {
      case 'rock':
        userSelectButton.querySelector('img').src = '/images/icon-rock.png';
        userSelectButton.querySelector('img').alt = 'rock';
        // userSelectButton.style.backgroundColor = 'lightgray';
        // userSelectButton.style.border = '2px solid darkgray';
        // userSelectButton.style.border-radius = '2px solid darkgray';
        // userSelectButton.style.border-radius ='20px';
        // userSelectButton.classList.add('btn-rock');
        userSelectButton.classList.add('btn-rock');
        break;
      case 'paper':
        userSelectButton.querySelector('img').src = '/images/icon-paper.png';
        userSelectButton.querySelector('img').alt = 'paper';
        userSelectButton.classList.add('btn-paper');
        break;
      case 'scissors':
        userSelectButton.querySelector('img').src = '/images/icon-Scissors.png';
        userSelectButton.querySelector('img').alt = 'scissors';
        userSelectButton.classList.add('btn-scissors');
        break;
      default:
        // Handle any other cases or errors
        break;
    }
  }

  function displayComputerChoice() {
    document.getElementById('selection').style.display = 'block';
    const computerSelectButton = document.getElementById('computer_select');
    // Remove existing classes
    computerSelectButton.classList.remove('btn-rock', 'btn-paper', 'btn-scissors');

    // Set the correct image source based on the Computer's choice
    switch (computerChoice) {
      case 'rock':
        computerSelectButton.querySelector('img').src = '/images/icon-rock.png';
        computerSelectButton.querySelector('img').alt = 'rock';
        computerSelectButton.classList.add('btn-rock');



        break;
      case 'paper':
        computerSelectButton.querySelector('img').src = '/images/icon-paper.png';
        computerSelectButton.querySelector('img').alt = 'paper';
        computerSelectButton.classList.add('btn-paper');


        break;
      case 'scissors':
        computerSelectButton.querySelector('img').src = '/images/icon-Scissors.png';
        computerSelectButton.querySelector('img').alt = 'scissors';
        computerSelectButton.classList.add('btn-scissors');


        break;
      default:
        // Handle any other cases or errors
        break;
    }
  }

  // function displayComputerChoice() {
  //     document.getElementById('selection').style.display = 'block';
  //     const computerSelectButton = document.getElementById('computer_select');
  //     computerSelectButton.querySelector('img').src = `/images/icons8-${computerChoice}.png`;
  //     computerSelectButton.querySelector('img').alt = `${computerChoice} icon`;
  // }

  function updateScore() {
    document.getElementById('userScore').innerText = `${userScore}`;
    document.getElementById('computerScore').innerText = `${computerScore}`;
  }

  function displayResult(result) {
    document.getElementById('result').innerText = result;
  }

  function displayChoices() {
    document.getElementById('choices').innerText = `You chose: ${userChoice} | Computer chose: ${computerChoice}`;
  }

  function displayNextButton() {
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('playAgainButton').style.display = 'block';
  }

  function displayPlayAgainButton() {
    document.getElementById('playAgainButton').style.display = 'block';
    document.getElementById('nextButton').style.display = 'none';
  }

  function nextRound() {
    // Redirect to a new page for the next round
    window.location.href = '/images/next page.html';
  }
  function ruleButton(){
  document.getElementById('rules').style.display = 'block';

  }
  function closeButton(){
  document.getElementById('rules').style.display = 'none';

  }


  function startingPage(){
    document.getElementById('rules').style.display = 'block';
    document.getElementById('main').style.display = 'block';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('choices').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('selection').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('header').style.display = 'none';
  }

  function page(){
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('choices').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('selection').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('header').style.display = 'block';
    document.getElementById('score').style.marginBottom = '300px';

  }

  function playAgain() {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('choices').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('selection').style.display = 'none';

  }