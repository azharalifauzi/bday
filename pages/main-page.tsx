import dynamic from 'next/dynamic';

const MainPageNoSSR = dynamic(() => import('../components/main-page'), {
  ssr: false,
});

const Main = () => <MainPageNoSSR />;

export default Main;
