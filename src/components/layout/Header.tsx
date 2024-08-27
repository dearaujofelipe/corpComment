import { useFeedbackItemsStore } from '../../stores/feedbackItemsStore';
import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import Pattern from '../Pattern';

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemtoList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
