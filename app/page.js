import Feed from "@components/Feed"
export default function Home() {
  return (
    <>
          <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>Discover and Share
            <br className='max-md:hidden'></br>
            <span className='orange_gradient'>AI-Powered Prompts</span>
            </h1>
            <p className='desc text-center'>
              Promptopia is an oprn-source AI promting tool for modern world to discover,creat
              and share creative prompts 
            </p>
          </section>
          <Feed/>
    </>
  )
}
