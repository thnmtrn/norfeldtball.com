import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Norfeldt Ball</div>
            <div className="text-gray-500 dark:text-gray-400">NBL</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, recusandae? Sequi ducimus autem placeat vero dolore dolorem error, harum officiis aliquam natus culpa labore tenetur pariatur animi voluptate alias quis saepe. Similique numquam, labore ipsum at veritatis modi. Iure harum id debitis voluptates doloremque porro voluptatem veritatis eum! Amet, repellat!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit natus architecto beatae ea quod illum est, asperiores impedit nemo, necessitatibus inventore soluta accusamus perspiciatis omnis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
              placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem
              nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
