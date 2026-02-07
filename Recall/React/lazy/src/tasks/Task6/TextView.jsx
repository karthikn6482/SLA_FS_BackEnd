export default function TextView({ dark, size }) {
    return (
      <p style={{
        background: dark ? "#222" : "#eee",
        color: dark ? "#fff" : "#000",
        fontSize: size
      }}>
        Lazy Text View
      </p>
    )
  }
  