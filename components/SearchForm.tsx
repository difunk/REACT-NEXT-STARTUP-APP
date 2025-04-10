import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({ query } : { query?: string }) => {

  return (
    <Form action="/" scroll={false} className="search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-2">
        <input
            name='query'
            defaultValue={query}
            className='search-input flex-1 font-bold placeholder:font-semibold text-black placeholder:text-black w-full h-auto outline-none'
            placeholder='Search'
            />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}
            </div>

            <button
                type='submit'
                className='search-btn text-white size-[50px] rounded-full bg-black flex justify-center items-center'
            >
                <Search className='size-5'/>
            </button>
    </Form>
  )
}

export default SearchForm