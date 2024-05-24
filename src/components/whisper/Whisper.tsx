import { useState } from 'react';
import axios from 'axios';
import { ReactMic } from 'react-mic';


const Whisper = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [error, setError] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('Spanish'); // Default to Spanish, you can change this or make it dynamic
  
    const startRecording = () => setIsRecording(true);
    const stopRecording = () => setIsRecording(false);
  
    const onData = (recordedBlob) => {
      // This will be called while recording is in progress
    };
  
    const onStop = async (recordedBlob) => {
      setTranscription('');
      setTranslation('');
      setError('');
  
      try {
        const formData = new FormData();
        formData.append('audioData', recordedBlob.blob, 'audio.wav'); // Ensure proper key and file name
        formData.append('targetLanguage', targetLanguage);
  
        const response = await axios.post('https://api.openai.com/api/transcribe-and-translate', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
  
        setTranscription(response.data.transcribedText);
        setTranslation(response.data.translatedText);
      } catch (error) {
        setError('Error processing request');
      }
    };
  
    return (
      <div>
        <h1>Speech to Text and Translation</h1>
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <div>
          <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
          <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
        </div>
        <div>
          <label>
            Target Language:
            <input
              type="text"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            />
          </label>
        </div>
        {transcription && (
          <div>
            <h2>Transcription:</h2>
            <p>{transcription}</p>
          </div>
        )}
        {translation && (
          <div>
            <h2>Translation:</h2>
            <p>{translation}</p>
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
    );
}

export default Whisper