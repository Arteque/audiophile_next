import PageHero from '@/_components/shared/PageHero'
import Items from '@/_components/shared/Items'

const page = () => {
  return (
    <>
      <PageHero pageTitle='Speakers'/>
      <Items category="speakers" />
    </>
  )
}

export default page
