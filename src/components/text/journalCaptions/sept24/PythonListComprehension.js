import screenshot from '../../../../images/pythonListComprehension.png'

export function PythonListComprehension() {
    return (
        <p>I've been brushing up on my python after not using it for a couple of years. Through doing a Codewars Kata with a Junior Dev friend(Tom), I learnt a nice bit of new knowledge about List Comprehenstion from him. <br /><br />
        Here's the kata description: <i>Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed.</i><br /><br />
        
        <img src={screenshot} className='w-60% ml-20% mb-1rem'></img>

        The above is my solution. What I did was split the given string into a list of individual words with the '.split()' method.
        <br />Then I defined a function which reversed the words with a length of 5 or more. I reversed the word by creating a new string and concatenating a letter at a time by iterating through a range. The range starts at the lat index and increments -1 until it reaches the first index.

        <br /><br />Okay, now in the return statement we see the topic of the joural entry, the list comprehenstion! List comprehension allows shorter syntax when creating a new list from an existing one. Rather than creating an empty one and appending each value at a time through iteration. I think it's great because it's much quicker and more easily readable. Finally I use the '" ".join()' method to stringify the new list with a space between each new or unchanged word.
        </p>
    )
}