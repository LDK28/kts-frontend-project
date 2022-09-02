import Button from '@components/Button';
import Input from '@components/Input';
import MultiDropdown from '@components/MultiDropdown';
import { Option } from '@components/MultiDropdown/MultiDropdown';
import { ReactNode, useState } from 'react';
import './Search.scss';

export const Search = () => {
    const [searchText, setSearchText] = useState('Search property');
    return (
        <div className='search-container'>
            <Input value={searchText} onChange={(value: string) => setSearchText(value)}></Input>

            <Button>Find Now</Button>

            <div className='filter'>
                <MultiDropdown
                    options={[]}
                    value={[]}
                    onChange={(value: Option[]) => console.log("mdp taped!")}
                    pluralizeOptions={() => 'Filter'}></MultiDropdown>
            </div>
        </div>
    );
}

export default Search;