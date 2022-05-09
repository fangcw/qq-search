import React, { useState } from 'react'
import "./index.css"

interface InputProps {
    disabled?: boolean;
    keyword?: string;
    placeholder?: string;
    onSearch: Function;
}

const Search: React.FC<InputProps> = (props) => {
    const { keyword, disabled, placeholder, onSearch } = props

    const [value, setValue] = useState(keyword || '')

    const handleChange = (e?: any) => {
        const value = e?.target?.value || ''
        setValue(value)
    }

    const handleSearch = () => {
        if (!value) return
        onSearch(value)
    }

    return (
        <div className='search'>
            <svg className='search-icon' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path></svg>
            {/* QQ号现在一般为5-11位数字 */}
            <input className='search-input' type="number" min={10000} max={99999999999} value={value} onChange={handleChange} placeholder={placeholder || '请输入QQ号'} />
            <button className='search-btn' disabled={disabled} onClick={handleSearch}>搜索</button>
        </div>
    )
}

export default Search