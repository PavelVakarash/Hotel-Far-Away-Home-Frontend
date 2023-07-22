import React, { useState, useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import style from './EventsForm.module.css';
import { LanguageContext } from '../../../LanguageContext';
import t from '../translation';

interface EventsFormProps {
  onClose: () => void;
}

function EventsForm({ onClose }: EventsFormProps): JSX.Element {
  const [eventText, setEventText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const formRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

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

  function handleSubmit(): void {
    if (selectedFile) {
      const credentials = {
        text: eventText,
        created_at: new Date(),
        author: (document.getElementById('authorName') as HTMLInputElement).value,
        title: (document.getElementById('title') as HTMLInputElement).value,
        file: selectedFile,
      };

      dispatch({ type: 'CREATE_EVENT', payload: credentials });

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

  const { language } = useContext(LanguageContext);

  return (
    <div id="eventsForm" className={style.eventsFormContainer} ref={formRef}>
      <div className={style.inputRow}>
        <label htmlFor="authorName" className={style.labelName}>
        {t('Name', language)}
        </label>
        <input type="text" id="authorName" className={style.inputField} />
      </div>
      <div className={style.inputRow}>
        <label htmlFor="title" className={style.labelTitle}>
        {t('Title', language)}
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
        {t('Close', language)}
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
        {t('Submit', language)}
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
