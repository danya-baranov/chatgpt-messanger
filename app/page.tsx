import { SunIcon,BoltIcon,ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
        <h1 className="text-5xl font-bold mb-20">GhatGPT</h1>

        <div className='flex space-x-2 text-center'>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8"/>
              <h2>Examples</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What a different between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8"/>
              <h2>Capabilities</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What a different between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8"/>
              <h2>Limitations</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What a different between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage