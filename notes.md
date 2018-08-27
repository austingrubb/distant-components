# Redux

## What's the problem with distant components in React?
like the telephone game, it is unreliable to share data through to many middle man(by that i mean more of a chance for the human to mess up)
## What is Redux? Why/when do we use it?
redux is a global data store we use it whenever its less painful the props drilling(do not use all the time)
## What are the steps to add Redux to a React app?
* Steps for redux
  * READ
    * create store in store file
    * in index.js, use Provider and pass in store
    * use connect in ech component to read data from store 
  * WRITE
    * still connect component (same as before)
      * in component dispatch actions to store 
    * create reducer file 
      * create reducer function 
      * create action names 
      * make action creator functions
## What is a store?
a store holds data it also has a reducer. its like a grocery store with groceries and the reducer is the receiving department 
## What is a reducer? What does the reducer do for us in Redux?
a function that takes in some state as an action and outputs the new state 
## What is immutability? Why do we use it?
immutability is when we dont change data but instead make a copy and change the copy

we use it to check for a single change 
