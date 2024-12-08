```javascript
// pages/aboutSolution.js

export default function About() {
  const myVariable = 'This variable is defined';
  console.log(myVariable); //This will not cause an error
  return (
    <div>
      <h1>About Page</h1>
      <p>{myVariable}</p>
    </div>
  );
}
```