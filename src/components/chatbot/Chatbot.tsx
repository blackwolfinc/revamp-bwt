// /* eslint-disable @next/next/no-async-client-component */
// 'use client'
// import React, { useEffect, useState } from 'react';
// import OpenAI from "openai";

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [inputMessage, setInputMessage] = useState('');

//     const openai = new OpenAI({
//         dangerouslyAllowBrowser: true,
//         apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//     });

//     const sendMessage = async (content) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "system", content: [{ type: "text", text: content }] }],
//                 temperature: 1,
//                 max_tokens: 50,
//                 top_p: 1,
//                 frequency_penalty: 0,
//                 presence_penalty: 0,
//             });
            
//             const botMessage = response.choices[0].message.content;
//             return botMessage;
//         } catch (error) {
//             console.error("Error sending message:", error);
//             return "Sorry, an error occurred while processing your request.";
//         }
//     }

//     const handleSendMessage = async () => {
//         if (!inputMessage.trim()) return;
        
//         const userMessage = { role: 'user', content: inputMessage };
//         const botMessage = await sendMessage(inputMessage);

//         setMessages([...messages, userMessage, { role: 'bot', content: botMessage }]);
//         setInputMessage('');
//     }

//     useEffect(() => {
//         handleSendMessage();
//     }, []);

//     const handleChangeInput = (e) => setInputMessage(e.target.value);

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') handleSendMessage();
//     }

//     return (
//         <div>
//             <div>
//                 {messages.map((message, index) => (
//                     <div key={index} style={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
//                         {message.content}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={inputMessage}
//                 onChange={handleChangeInput}
//                 onKeyDown={handleKeyDown}
//             />
//             <button onClick={handleSendMessage}>Send</button>
//         </div>
//     );
// };

// export default Chatbot;
