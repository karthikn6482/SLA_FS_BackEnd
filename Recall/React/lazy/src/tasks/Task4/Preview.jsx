export default function Preview({ dark, size }) {
    return (
      <div style={{
        background: dark ? "#000" : "#fff",
        color: dark ? "#fff" : "#000",
        fontSize: size
      }}>
        Preview Text
      </div>
    )
  }
  