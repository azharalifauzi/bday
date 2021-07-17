import dynamic from 'next/dynamic';

const HomePageNoSSR = dynamic(() => import('../components/home-page'), {
  ssr: false,
});

const Home = () => <HomePageNoSSR />;

export default Home;
