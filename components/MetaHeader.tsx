import Head from 'next/head';

interface MetaHeaderProps {
  title: string;
  description: string;
  children?: object;
}

const MetaHeader = (props: MetaHeaderProps) => {
  const { title, description, children } = props;
  return (
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes, width=device-width"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
};

export default MetaHeader;
