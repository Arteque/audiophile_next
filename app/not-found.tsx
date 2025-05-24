import Button from '@/_components/Assets/Button'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-dark-100 text-light-100/75 gap-5'>
      <h2 className="text-[3rem] font-bold uppercase text-prime-100">404 - Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or return to the homepage.</p>
        <p>If you think this is a mistake, please contact support.</p>
      <Button href='/' variant='call' text='Go Back Home' />
    </div>
  )
}