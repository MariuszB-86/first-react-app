import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchString(''));
    }, []);

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchString(title));
    setTitle('');
  };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
              <span className="fa fa-search" />
            </Button>  
        </form>
    );
  };

  export default SearchForm;