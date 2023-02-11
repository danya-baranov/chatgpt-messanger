'use client'

import useSWR from "swr"
import Select from 'react-select'


const fetchModels = () => fetch("/api/getEngines").then(res => res.json())


function ModelSelection() {
    const { data:models,isLoading} = useSWR('models',fetchModels)
    
    const { data:model,mutate: setModel} = useSWR('model',{
        fallbackData: 'text-davinci-003'
    })

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
   
  return (
    <div>
        <Select 
            className="mt-2 mb-2"
            options={models?.modelOptions}
            defaultValue={model}
            placeholder={model}
            isSearchable
            isLoading={isLoading}
            menuPosition="fixed"
            classNames={{
                control:(state)=> "bg-[#434654] border-[#434654]"
            }}
            onChange={(e) => setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection