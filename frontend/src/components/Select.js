const Select = ({ max, setPartValue }) => {
  const arrayOption = []

  for (let i = 1; i <= max; i += 1) {
    arrayOption.push(i)
  }

  return (
    <select
      className="rounded-xl px-2 bg-[#E1DEE9] ring-2 ring-[#B6A6CA] focus:outline-none"
      onChange={(event) => setPartValue(event.target.value)}
    >
      {arrayOption.map((option, index) => {
        return <option key={index}>{option}</option>
      })}
    </select>
  )
}

export default Select
