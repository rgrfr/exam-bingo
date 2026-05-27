
import { Helmet } from 'react-helmet-async';
import { CambridgeBingo } from '@/components/CambridgeBingo';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Exam Venue Bingo - Cambridge Buildings Game</title>
        <meta name="description" content="Play Exam Venue Bingo! Mark off lesser-known Cambridge university buildings you've visited in this 7x7 grid game. Print and play on A4." />
        <link rel="canonical" href="https://exam-venue-bingo.lovable.app/" />
        <meta property="og:url" content="/" />
      </Helmet>
      <main>
        <CambridgeBingo />
      </main>
    </>
  );
};

export default Index;
