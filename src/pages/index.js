import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('bg-dark', 'twp', styles.heroBanner)}>
      <div className="container flex flex-col items-center">
        <img className="object-cover h-64 rounded" src="/img/distribution.jpeg" />

        <div className='align-left'>
          <Heading as="h1" className="hero__title font-medium mt-12">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className='flex gap-4 mt-12'>
            <a className='bg-accent-primary border border-accent-primary px-6 py-3 rounded text-sm font-bold cursor-pointer text-nowrap' href="/docs/intro">Get Started</a>
            <a className='bg-cobalt-800 border border-gray-500 px-6 py-3 rounded text-sm font-bold cursor-pointer text-nowrap' href="/docs/category/whitepaper">Read Whitepaper</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <div className="twp container mx-auto grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-3 my-10">
      <div className='flex flex-col justify-self-center'>
        <p className='font-bold mb-2'>Whitepaper</p>
        <a className='text-accent-primary font-medium' href="/docs/whitepaper/antitoken">Antitoken</a>
        <a className='text-accent-primary font-medium' href="/docs/whitepaper/tachyon">Tachyon</a>
      </div>

      <div className='flex flex-col justify-self-center'>
        <p className='font-bold mb-2'>Community</p>
        <a className='text-accent-primary font-medium flex items-center gap-2' href="https://x.com/antitokens" target='_blank'>
          Twitter
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
        <a className='text-accent-primary font-medium flex items-center gap-2' href="https://t.me/antitokengroup" target='_blank'>
          Telegram
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
        <a className='text-accent-primary font-medium flex items-center gap-2' href="https://forum.antitoken.pro" target='_blank'>
          Forum
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
      </div>

      <div className='flex flex-col justify-self-center'>
        <p className='font-bold mb-2'>Apps</p>
        <a className='text-accent-primary font-medium flex items-center gap-2' href="https://lite.antitoken.pro" target='_blank'>
          Lite
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
        <a className='text-accent-primary font-medium flex items-center gap-2' href='https://app.antitoken.pro' target='_blank'>
          Pro
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
        <a className='text-accent-primary font-medium flex items-center gap-2' href='https://poll.antitoken.pro' target='_blank'>
          Poll
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Quantum-inspired Token Pair for DeSci & Prediction Markets">
      <HomepageHeader />
      <QuickLinks />
    </Layout>
  );
}
