import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
        return(
                <div className='chatList'>
                        <span className='title'>Dashboard</span>
                        <Link to=''>Create a new Chat</Link>
                        <Link to=''>Explore Immeasurable AI</Link>
                        <Link to=''>Contact</Link>
                        <hr />
                        <div className='list'>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <Link to=''>My Chat Title</Link>
                                <hr />
                                <div className='upgrade'>
                                        <img src='/logo.png' alt='' />
                                        <div className="texts">
                                                <span>Upgrade to Immeasurable AI Pro</span>
                                                <span>Get unlimited access to pro features</span>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default ChatList