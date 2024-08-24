import { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchFeedbackItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
      );
      if (!response.ok)
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
