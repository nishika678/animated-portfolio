import "./contact.scss"

function Contact() {
  return (
    <div className="contact">
        <div className="text">
            <h1>Let's work together</h1>
            <div className="object">
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </div>
            <div className="object">
                <h2>Address</h2>
                <span>Hello street New York</span>
            </div>
            <div className="object">
                <h2>Phone</h2>
                <span>+1 234 5678</span>
            </div>
        </div>
        <div className="form1">
            <form>
                <input type="text" required placeholder="Name"/>
                <input type="text" required placeholder="Email"/>
                <textarea rows={8} placeholder="Message"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact