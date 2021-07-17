import dynamic from 'next/dynamic';

const PasswordPageNoSSR = dynamic(() => import('../components/password-page'), {
  ssr: false,
});

const Password = () => <PasswordPageNoSSR />;

export default Password;
