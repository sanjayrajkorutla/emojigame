/* eslint-disable import/newline-after-import */
import './index.css'
const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
