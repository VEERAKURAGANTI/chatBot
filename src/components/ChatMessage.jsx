import RobotProfileImage from '../assets/Bot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {   //props inside () 
    // const message=props.message;    
    //const sender=props.sender;
    //const {message,sender}=props
    /*
                if(sender === 'robot'){
                    return(
                    <div>
                    <img src="Bot.png" alt="robot_img" width='50px'/>
                    {message}
                    </div>
                );  
            }
                */
    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img src={RobotProfileImage} alt="robot_img" className='chat-message-profile' />
            )}
            <div className='chat-message-text'>
                {message}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} alt="user_img" className='chat-message-profile' />
            )}
        </div>
    );
}
