import './index.css'

const Tags = props => {
  const {listItems, clickTab, isTrue} = props
  const {displayText, optionId} = listItems

  const clickActiveTab = () => {
    clickTab(displayText)
  }

  const addBgColor = isTrue === true ? 'activeTab' : ''

  return (
    <li className="list-tag">
      <button
        className={`btn-tag ${addBgColor}`}
        type="button"
        onClick={clickActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tags
