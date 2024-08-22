import { useState } from 'react';
import { MAX_CHARACTHERS } from '../lib/constants';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const charCount = MAX_CHARACTHERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTHERS) return;
    setText(newText);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={handleChange}
        name=""
        id="feedback-textarea"
        placeholder="bla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
