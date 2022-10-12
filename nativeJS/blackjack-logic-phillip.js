let score = function (cards) {
    let results = [0]
    let totalScore = 0;
    let usedAces = 0;
    const numAces = cards.filter((card) => card.value === 1).length;
    const sortedCards = cards.sort((a, b) => {
      if (a.value > b.value) return -1
    });
    for (let n = 0; n < sortedCards.length; n++) {
      let value = 0;
      switch (sortedCards[n].value) {
        case 1:
          if (totalScore < 11 - (numAces - 1)) {
            value = 11
          } else {
            value = 1
          }
          break;
        case 11:
        case 12:
        case 13:
          value = 10;
          break;
        default:
          value = sortedCards[n].value;
      }
      totalScore += value;
    }
    return totalScore;
  };