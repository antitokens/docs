import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("bg-dark", "twp", styles.heroBanner)}>
      <div className="container flex flex-col items-center">
        <img
          className="object-cover h-64 rounded"
          src="/img/distribution.jpeg"
        />

        <div className="align-left">
          <Heading as="h1" className="hero__title font-medium mt-12 font-ocr">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle font-sfmono">{siteConfig.tagline}</p>

          <div className="flex gap-4 mt-12">
            <a
              className="bg-accent-primary border border-accent-primary px-6 py-3 rounded-md text-normal font-sfmono font-bold cursor-pointer text-nowrap"
              href="/docs/intro"
            >
              Get Started
            </a>
            <a
              className="bg-cobalt-800 border border-gray-300 px-6 py-3 rounded-md text-normal font-sfmono font-bold cursor-pointer text-nowrap"
              href="/docs/category/whitepaper"
            >
              Read Whitepaper
            </a>
            <a
              className="bg-cobalt-500 border text-yellow-500 border-yellow-500 px-6 py-3 rounded-md text-normal font-sfmono font-bold cursor-pointer text-nowrap"
              href="/docs/category/yellowpaper"
            >
              Read Yellowpaper
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <div className="twp container mx-auto grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-3 my-10">
      <div className="flex flex-col justify-self-center">
        <p className="font-bold mb-2 font-ocr">Papers</p>
        <a
          className="text-accent-primary font-ocr"
          href="/docs/whitepaper/antitoken"
        >
          Antitoken <span className="text-gray-300 text-xs font-sfmono">(white)</span>
        </a>
        <a
          className="text-accent-primary font-ocr"
          href="/docs/yellowpaper/antitoken"
        >
          Antitoken <span className="text-yellow-500 text-xs font-sfmono">(yellow)</span>
        </a>
        <a
          className="text-accent-primary font-ocr"
          href="/docs/whitepaper/tachyon"
        >
          Tachyon
        </a>
      </div>

      <div className="flex flex-col justify-self-center">
        <p className="font-bold mb-2 font-ocr">Community</p>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://x.com/antitokens"
          target="_blank"
        >
          <span className="font-ocr">Twitter </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
        </a>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://t.me/antitokengroup"
          target="_blank"
        >
          <span className="font-ocr">Telegram </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
        </a>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://forum.antitoken.pro"
          target="_blank"
        >
          <span className="font-ocr">Forum </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
        </a>
      </div>

      <div className="flex flex-col justify-self-center">
        <p className="font-bold mb-2 font-ocr">Apps</p>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://lite.antitoken.pro"
          target="_blank"
        >
          <span className="font-ocr">Lite </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
          <span className="text-gray-500 text-xs font-sfmono">lite.antitoken.pro</span>
        </a>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://app.antitoken.pro"
          target="_blank"
        >
          <span className="font-ocr">Pro </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
          <span className="text-gray-500 text-xs font-sfmono">app.antitoken.pro</span>
        </a>
        <a
          className="text-accent-primary flex items-center gap-2"
          href="https://poll.antitoken.pro"
          target="_blank"
        >
          <span className="font-ocr">Poll </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
          <span className="text-gray-500 text-xs font-sfmono">poll.antitoken.pro</span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Quantum-inspired Token Pair for DeSci & Prediction Markets"
    >
      <HomepageHeader />
      <QuickLinks />
    </Layout>
  );
}
