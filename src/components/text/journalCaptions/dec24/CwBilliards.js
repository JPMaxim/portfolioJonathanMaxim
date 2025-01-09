export function CwBilliards() {
    return (
        <p>For this one, after completing a 7kyu kata: '<i>Three-cushion billiards</i>', I found an improvement from the most upvoted solution. It uses Javasript's <strong>Set() constructor</strong>.
        
        <br /><br />    
        Set objects are collections of values. <strong>A value in the set may only occur once</strong>; it is unique in the set's collection. Also you can iterate through the elements of a set in insertion order.
        
        <br /><br />    
        The upvoted solution made a good application of the Set object, where I instead used multiple conditional statements. Part of the solution involves creating a new list where duplications of any element are removed. Where my solution used if statements to avoid duplications, the Set() constructor effectively does this for you. If you <strong>add()</strong> an existing element it simply continues without pushing the element to the Set.
        </p>
    )
}