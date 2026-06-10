import { useState } from 'react'
import Loading from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');


    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        // if (isLoading || inputText === '') {
        //     return;
        // }

        // setIsLoading(true);
        setInputText('');

        const newChatmessages = [...chatMessages,
        {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
        }
        ]

        setChatMessages(newChatmessages);
        setChatMessages([
            ...newChatmessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be remove later, when we add the response.
            {
                message: <img src={Loading} className='loading-spinner' />,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages(
            [...newChatmessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
            ]
        );

        setInputText('')
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
        else if (event.key === 'Escape') {
            setInputText('');
        }
    }
    return (
        <>
            <div className='chat-input-container'>
                <input
                    placeholder="Send a message to Chatbot"
                    size="30"
                    onChange={saveInputText}
                    onKeyDown={handleKeyDown}
                    value={inputText}
                    className="chat-input"
                />
                <button
                    onClick={sendMessage}
                    className="send-button">
                    send
                </button>
            </div>
        </>
    );
}