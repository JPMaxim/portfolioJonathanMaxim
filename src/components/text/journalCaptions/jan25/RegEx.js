
import { Link } from "react-router-dom";
export function RegEx() {
    return (
        <p>
            In this note I wanted to give an example of how I made use Mozilla Web Docs and ChatGPT to solve a problem, improve my knowledge, and to write better and more accurate code. <br></br><br></br>

            As part of a codewars challenge I wanted to split a string using several seperators, something I had not really done before. <br></br>
            What I found after a quick search was that using a RegEx as the seperator in split() was going to be the best way. <br></br>
            Only I knew nothing about regular expressions...
            Looking at the <Link target='_blank' className='text-linkColour' to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions">Mozilla guide on regular expressions</Link> gave me a basic understanding of how to construct them and what they did. <br></br>
            Next I made an attempt myself, writing: <strong><i>.split(/[+-*=]/)</i></strong> <br></br>
            I ran into the error 'invalid regular expression'. <br></br>
            A quick google didn't reveal the solution, I chose to use chatGPT to generate the correct expression for me and compare where mine differed. <br></br>
            I find this a great application of ChatGPT as you get a working piece of code along with an explanation on what it does and why it works it worked. This allowed me to move forward with my code with more knowledge on regular expressions to utilize in future.<br></br><br></br>

            <strong>So what exactly did I learn then? </strong><br></br>
            Regular Expressions are used on strings to match characters in the string with a given pattern. You define a RegEx in this way: <br></br>
            <strong><i>const regex = /abc/</i></strong> <br></br>
            This particular example simply searching for an instance 'abc'. <br></br>
            Consider <strong><i>str.split(/([+\-*=])/)</i></strong> <br></br>
            The <strong>square brackets []</strong> define a character set, meaning it matches any one of the characters inside.<br></br>
            The <strong>parentheses ()</strong> define a capture group. This ensures that the separators (+, -, *, =) are included in the output.<br></br>
            Inside square brackets [], the <strong>hyphon -</strong> defines a range of characters ([0-9] searches 10 ints). So the <strong>- is escaped as \-</strong> to be treated as a literal.
            <br></br><br></br>

            **I was aware that using ai to assist me in the challenge was an aid that wouldn't be allowed in a controlled test. However I'm confident my use of it was for the purpose of learning and improving and not cheating. Furthermore I used gpt specifically for using a regex in a split method, not solving the challenge.
        </p>
    )
}