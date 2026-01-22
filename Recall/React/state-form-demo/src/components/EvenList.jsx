function EvenList() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  
    return (
      <>
        <h3>Even Numbers</h3>
        <ul>
          {numbers
            .filter((num) => num % 2 === 0)
            .map((num) => (
              <li key={num}>{num}</li>
            ))}
        </ul>
      </>
    );
  }
  
  export default EvenList;
  