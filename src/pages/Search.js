
import { useEffect, useState } from 'react'
import SearchHeader from '../Components/SearchHeader'
import Result from '../Components/Result'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'



const useQuery = () => {
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    return sp.get('q');
}

const Search = () => {



    const ApiKey = "AIzaSyBU4iritl58gAvg-phfkS1kQJf92gLSDA8"
    const cx = "8ae7a6861560d728c"
    // https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures




    let history = useNavigate();

    const value = useQuery();

    const [state, setState] = useState(value)

    const [searchData, setSearchData] = useState({
        data: [],
        resultInfo: " "
    })


    const searchdata = () => {
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${ApiKey}&cx=${cx}&q=${value}
`).then(data => {
            
            setSearchData({
                ...searchData,
                data : data.data.items,
                resultInfo : data.data.searchInformation
            })

        }).catch(err => {
            console.log(err);
        })

    }

    useEffect(() => {
        searchdata();
    }, [value])

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            history(`/search?q=${state}`);
        }
    }



    return (
        <div className='bg-[#202124] w-full h-[100vh]'>
            <SearchHeader value={state} changState={setState} keyPress={keyPress} />
            <h1 className='ml-[200px] text-[#7CB4F8] pt-3'>About {searchData.resultInfo?.formattedTotalResults} results ({searchData.resultInfo?.formattedSearchTime} seconds) </h1>
            
            {searchData.data.map(item => {
                return <Result key={item.cacheId} {...item} />
            })}

        </div>
    )
}

export default Search