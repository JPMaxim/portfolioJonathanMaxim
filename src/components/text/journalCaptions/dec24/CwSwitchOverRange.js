export function CwSwitchOverRange() {
    return (
        <p>
            In this kata I build a class which simulates a game of ping pong.
            <br></br><br></br>
            <strong>Things I did well</strong> were 1.use of template literals, 2.use of modulus to set the player's turn, 3.use of a boolean value of true as the subject of a switch statement to effectively switch over a range.
            <br></br><br></br>
            <strong>Things I could optimise</strong> were 1.doing without an extra variable for active player, instead having the turn alternate from 1 to 2. And 2.using <i>Math.abs</i> to achieve x &lt;= (a - b) &lt;= y in a more clear and readable fashion
            {/* I wanted to have a switch statement which had a case of a range of integers. This is not possible with Javascript switch statements. However I found a clever method of making this work.

            <br></br><br></br>
            In the <strong>faulty</strong> method we switch over the difference between <i>a</i> and <i>b</i> where each case is a range.
            In the <strong>correct</strong> method we switch over a boolean value of true where each case is an expression. */}
            
            {/* Add diagrams of faulty and correct pieces of code to illustrate */}
        </p>
    )
}