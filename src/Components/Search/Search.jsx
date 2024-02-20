import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import SearchDataFile from '../../Data/SearchDataFile'
import { FaSearch } from 'react-icons/fa';
import './Search.css'
import './SearchResult.css'


const Search = ({idKey, active, setActive, activeSearch, setActiveSearch}) => {
    // const [ activeSearch, setActiveSearch ] = useState(false);
    const [ search, setSearch ] = useState("")
    const [ searchData, setSearchData ] = useState([])
    let   [ selectedItem, setSelectedItem ] = useState( -1 )

    const handleChange = (e) => {
        setSearch(e.target.value)
    };
    const handleLinkClose = () => {  // OnBlur in input make u cant go to link in search !! 
        setSearch("")
        setSearchData([])
        setSelectedItem(-1)
        setActiveSearch(!activeSearch)
        setActive(!active)
    };

    const handleKeyDown = (e) => { // حل مشكلة زرار الانتر اللينكات مبتروحش علي مكانها بظبت
        if ( selectedItem < searchData.length ){
            if( e.key === "ArrowUp" && selectedItem > 0 ) {
                console.log("keyUp")
                setSelectedItem( prev => prev - 1 )
            }
            else if( e.key === "ArrowDown" && selectedItem < searchData.length - 1 ) {
                setSelectedItem( prev => prev + 1 )
            }
            else if( e.key === "Enter" && selectedItem >= 0 ) {
                    let linksGO = document.querySelectorAll(".search-result") 
                    linksGO[selectedItem].click()   
            }
        }
        else {
            setSelectedItem(-1)
        };
    };



    useEffect( () => {
        if ( search !== "" ){
            const FilteredData = SearchDataFile.filter( resultLink => {
                return resultLink.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
            setSearchData(FilteredData)
        }
        else if( search === "" ){
            setSearch("")
            setSearchData([])
            setSelectedItem(-1)
        }
    }, [search]);

    return (
        <>
            <div className="SearchWrapper">
                <label htmlFor={idKey} className="SearchLabel">
                    <FaSearch onClick={handleLinkClose} />
                </label>
                <input 
                type="search" 
                name="SearchName" 
                id={idKey}
                className={activeSearch ? "Search activeSearch" : "Search "} 
                placeholder="ابحث..." 
                autoComplete = "off" 
                value        = {search}
                onChange     = {handleChange}
                onKeyDown    = {handleKeyDown}
                // onBlur       = {handleLinkClose}
                />
            </div>
            <label htmlFor={idKey} className="results-list">
                {
                    searchData.map(( data, index ) => {
                        return (
                            <HashLink 
                            key={index} 
                            className={ selectedItem === index 
                            ? 'search-result activeLine' 
                            : 'search-result' } 
                            to={data.GoToPath} 
                            onClick={handleLinkClose}
                            >
                                { data.name }
                            </HashLink>
                        )
                    })
                }
            </label>
        </>
    )
}

export default Search