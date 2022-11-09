import './Contact.css'

export default function Contact() {
  return (<div className='Contact' >
    <h1>Contact</h1>
    <div className='container'>
        <div className='links' >
            here
        </div>
        <div className='message-area' >
            <form>
                <input id='email' type='email' placeholder='Email' />
                <input id='text' type='text' placeholder='Message..' />
                <button>send</button>
            </form>
        </div>
    </div>
    
  </div>)
}
