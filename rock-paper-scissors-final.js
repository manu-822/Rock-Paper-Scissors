let score=JSON.parse(localStorage.getItem('score'));

      if(score===null)
      {
        score={
          wins:0,
          losses:0,
          ties:0
        };
      }

      displayScore();

      function playGame(playerMove)
      {
        
        const compMove=pickCompMove();

        let result='';

        if(playerMove==='rock')
        {
          if(compMove==='rock')
          {
            result='Tie.';
          }
          else if(compMove==='paper')
          {
            result='You lose.';
          }
          else if(compMove==='scissors')
          {
            result='You win.'
          }
        }

        else if(playerMove==='paper')
        {
          if(compMove==='rock')
          {
            result='You win.'
          }
          else if(compMove==='paper')
          {
            result='Tie.';
          }
          else if(compMove==='scissors')
          {
            result='You lose.';
          }
        }

        else if(playerMove==='scissors')
        {
          if(compMove==='rock')
          {
            result='You lose.'
          }
          else if(compMove==='paper')
          {
            result='You win.';
          }
          else if(compMove==='scissors')
          {
            result='Tie.';
          }
        }

        if(result==='You win.') score.wins+=1;
        else if(result==='You lose.') score.losses+=1;
        else if(result==='Tie.') score.ties+=1;

        localStorage.setItem('score',JSON.stringify(score));

        displayScore();

        document.querySelector('.js-result').innerHTML=
          `${result}`

        document.querySelector('.js-moves').innerHTML=
          `You 
          <img src="move-img/${playerMove}-emoji.png" class="move-icon"> 
          <img src="move-img/${compMove}-emoji.png" class="move-icon">
          Computer`;
    
      }

      function displayScore()
      {
        document.querySelector('.js-score').innerHTML=
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickCompMove()
      {
        const randomNo = Math.random();
        let compMove='';

        if(randomNo>=0 && randomNo<1/3)
        {
          compMove='rock';
        }
        else if(randomNo>=1/3 && randomNo<2/3)
        {
          compMove='paper';
        }
        else if(randomNo>=2/3 && randomNo<1)
        {
          compMove='scissors';
        }

        return compMove;
      }