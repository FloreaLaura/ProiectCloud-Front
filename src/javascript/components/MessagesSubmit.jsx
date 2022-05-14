// MessagesSubmit.jsx
import React from 'react';
import axios from 'axios';
import { LANGUAGES_ARRAY} from '../utils/constants';

function MessagesSubmit() {

        const handleMessageSend = async (e) => {
        const language = e.target.value;
        const messageContent = document.getElementById('messageContent').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/messages/translate`,
                {
                    language,
                    messageContent
                });

                if(response.status === 200) {
                    alert(`\nMessage sent: ${response.data.translationData.translatedText}`);
                        
                }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div id="MessagesSubmit">
            <div className='text-xl font-bold mb-4'>Insert your text</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">

                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Insert text here!'} />
                    </div>
                </div>
            </form>

            {/* Create a button for each language from LANGUAGES_ARRAY */}
            {LANGUAGES_ARRAY.map((language, index) => {
                return (
                    <button
                        key={index}
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded m-3 capitalize"
                        onClick={handleMessageSend}
                        value={language}>
                        {language.toLowerCase()}
                    </button>
                )
            })}
        </div>
    );

}



export default MessagesSubmit;