export default function History({ list, clear }) {
    return (
      <>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <button onClick={clear}>Clear</button>
      </>
    )
  }
  