import Link from 'next/link';

import Img from '../../components/Img';

export default function FirstPost() {
  return (
    <div style={{ padding: 20 }}>
      <Link href="/">Go back</Link>
      <div>
        <Img
          alt="Next.js logo"
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          width={1200}
          height={400}
          external
        />
        <Img alt="Mountains" src="/images/shoes.jpeg" width="350" height="400" />
      </div>
    </div>
  );
}
