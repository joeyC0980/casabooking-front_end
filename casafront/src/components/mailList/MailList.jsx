import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Plan Your All-Inclusive Escape</h1>
      <span className="mailDesc">Discover and learn why All-Inclusive is a great option for your next adventure.</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList