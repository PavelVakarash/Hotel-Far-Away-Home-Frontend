import React, { useState, useRef } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import style from './EventsForm.module.css';

interface EventsFormProps {
  onClose: () => void;
}

function EventsForm({ onClose }: EventsFormProps): JSX.Element {
  const [eventText, setEventText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  function handleSubmit(): void {
    // Обработка отправки формы
  }

  const handleEmojiClick = (emojiObject: EmojiClickData): void => {
    setEventText(eventText + emojiObject.emoji);
  };

  const toggleEmojiPicker = (): void => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div id="eventsForm" className={style.eventsFormContainer} ref={formRef}>
      <label htmlFor="authorName">Name:</label>
      <input type="text" id="authorName" className={style.inputField} />
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" className={style.inputField} />

      <div className={style.buttonContainer}>
        <button type="button" onClick={onClose} className={style.closeButton}>
          CLOSE
        </button>
        <button type="button" onClick={toggleEmojiPicker} className={style.emojiButton}>
          {showEmojiPicker ? '🙃' : '🙂'}
        </button>
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
