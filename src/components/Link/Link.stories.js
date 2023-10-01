import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://saraanasim.github.io/portfolio-2023">Primary link</Link>
    <Link secondary href="https://saraanasim.github.io/portfolio-2023">
      Secondary link
    </Link>
  </StoryContainer>
);
