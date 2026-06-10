import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import'./App.css';

 function App() {

            // const [chatMessages, setChatMessages] = useState([{
            //     message: 'hello chatbot',
            //     sender: 'user',
            //     id: 'id1'
            // }, {
            //     message: 'hello! how can i help you ?',
            //     sender: 'robot',
            //     id: 'id2'
            // }, {
            //     message: 'can you get me today data ?',
            //     sender: 'user',
            //     id: 'id3'
            // }, {
            //     message: 'Today june 6',
            //     sender: 'robot',
            //     id: 'id4'
            // }

            // ]);
            // const[chatMessages,setChatMessages] =array;
            // const chatMessages = array[0];
            // const setChatMessages=array[1];
            const [chatMessages, setChatMessages] = useState([]);
            return (
                <>
                    <div className='app-container'>
                        {chatMessages.length === 0 && (
                            <p className='welcome-message'> Welcome to the project! send a message using the textbox below.</p>
                        )}
                        <ChatMessages
                            chatMessages={chatMessages}
                        />
                        <ChatInput
                            chatMessages={chatMessages}
                            setChatMessages={setChatMessages}
                        />
                    </div>
                </>
            );
        }

export default App
