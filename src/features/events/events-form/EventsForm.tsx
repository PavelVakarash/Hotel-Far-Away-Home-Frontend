import React, { useState, useRef } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import style from './EventsForm.module.css';

interface EventsFormProps {
  onClose: () => void;
}

function EventsForm({ onClose }: EventsFormProps): JSX.Element {
  const [eventText, setEventText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEventText(e.target.value);
  };

  function handleInputFocus(): void {
    if (eventText === '') {
      setEventText('');
    }
  }

  function handleInputBlur(): void {
    if (eventText === '') {
      setEventText('');
    }
  }

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  }

  function handleFileRemoveClick(): void {
    setSelectedFile(undefined);
  }

  function handleSubmit(): void { // для отправки данных
    if (selectedFile) {
      const formData = new FormData();
      formData.append('text', eventText);
      formData.append('created_at', new Date().toISOString());
      formData.append('author', (document.getElementById('authorName') as HTMLInputElement).value);
      formData.append('title', (document.getElementById('title') as HTMLInputElement).value);
      formData.append('file', selectedFile);

      setEventText('');
      setSelectedFile(undefined);
    }
  }

  const handleEmojiClick = (emojiObject: EmojiClickData): void => {
    setEventText(eventText + emojiObject.emoji);
  };

  const toggleEmojiPicker = (): void => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div id="eventsForm" className={style.eventsFormContainer} ref={formRef}>
      <div className={style.inputRow}>
        <label htmlFor="authorName" className={style.labelName}>
          Name
        </label>
        <input type="text" id="authorName" className={style.inputField} />
      </div>
      <div className={style.inputRow}>
        <label htmlFor="title" className={style.labelTitle}>
          Title
        </label>
        <input type="text" id="title" className={style.inputField} />
      </div>
      <button type="button" onClick={() => document.getElementById('fileInput')?.click()} className={style.fileButton}>
      🖼️
      </button>
      <span>{selectedFile && selectedFile.name}</span>
      {selectedFile && (
        <button type="button" onClick={handleFileRemoveClick} className={style.removeButton}>
          ⚔️
        </button>
      )}

      <div className={style.buttonContainer}>
        <button type="button" onClick={onClose} className={style.closeButton}>
          CLOSE
        </button>

        <button type="button" onClick={toggleEmojiPicker} className={style.emojiButton}>
          {showEmojiPicker ? '🙃' : '🙂'}
        </button>

        <input
          type="file"
          id="fileInput"
          className={style.fileInput}
          onChange={handleFileInputChange}
          style={{ display: 'none' }} // чтоб скрыть input
        />

        <button type="button" onClick={handleSubmit} className={style.submitButton}>
          SUBMIT
        </button>

      </div>
      {showEmojiPicker && (
        <div className={style.emojiPickerContainer}>
          <EmojiPicker height={350} width={365} onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <textarea
        id="eventText"
        value={eventText}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={style.inputFieldText}
      />
    </div>
  );
}

export default EventsForm;
