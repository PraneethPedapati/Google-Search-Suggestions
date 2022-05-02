import './index.css'

const SuggestionItem = props => {
  const {suggestionsItem, suggestionInput} = props
  const {suggestion} = suggestionsItem

  const fillSuggestionInput = () => {
    suggestionInput(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={fillSuggestionInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
