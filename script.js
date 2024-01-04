function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function startGame() {
    let playerHand = getRandomNumber(4, 21);
    let dealerHand = getRandomNumber(2, 11);
    let playerBusted = false;
    let dealerBusted = false;
  
    alert(`Player's hand: ${playerHand}\nDealer's hand: ${dealerHand}`);
  
    while (!playerBusted) {
      let choice = prompt('Do you want to hit or stay?');
      
      if (choice.toLowerCase() === 'hit') {
        let card = getRandomNumber(2, 11);
        playerHand += card;
  
        alert(`You drew a ${card}. Your hand: ${playerHand}`);
  
        if (playerHand > 21) {
          playerBusted = true;
          alert('Busted! You lose.');
        }
      } else if (choice.toLowerCase() === 'stay') {
        break;
      }
    }
  
    while (!dealerBusted && dealerHand < 17) {
      let card = getRandomNumber(2, 11);
      dealerHand += card;
  
      alert(`Dealer drew a ${card}. Dealer's hand: ${dealerHand}`);
  
      if (dealerHand > 21) {
        dealerBusted = true;
        alert('Dealer busted! You win.');
      }
    }

    if (!playerBusted && !dealerBusted) {
      if (Math.abs(21 - playerHand) < Math.abs(21 - dealerHand)) {
        alert('You win!');
      } else if (Math.abs(21 - playerHand) > Math.abs(21 - dealerHand)) {
        alert('Dealer wins.');
      } else {
        alert('It\'s a tie!');
      }
    }
  
    alert('Game over.');
  }
  