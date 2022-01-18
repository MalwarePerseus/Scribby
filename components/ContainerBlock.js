import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta}) {
  const router = useRouter();
  const meta = {
      title: 'Scribby | Subscription Manager ',
      description: 'Scribby is a subscription manager which integrates all your subscriptions and lets you keep track of your use cycle to save as much as possible.',
      image : 'putimage',
      type: 'website',
      ...customMeta,
    };
  return (
      <div>
          <Head>
              <title>{meta.title}</title>
              <meta name="robots" content="follow,index" />
              <meta content={meta.description} name="description" />
              <meta
                property="og:url"
                content={`https://yourwebsite.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Scribby" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@malwareperseus" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                    )}
          </Head>

          <main className='dark:bg-gray-800 w-full'>
              <Navbar />
              <div>{children}</div>
              <Footer />
          </main>
      </div>
  );
}