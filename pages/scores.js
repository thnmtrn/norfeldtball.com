import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import scoresData from '@/data/scoresData'
import Link from '@/components/Link'
import ScoreCard from '@/components/ScoreCard'
import { PageSeo } from '@/components/SEO'

export default function Scores() {
  return (
    <>
      <PageSeo
        title={`scores - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/scores`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            scores
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your scores with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {scoresData.map((d) => (
              <ScoreCard
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
