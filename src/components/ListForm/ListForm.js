import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }

    return(
        <form className={styles.listForm} onSubmit={handleSubmit}>
          <label className={styles.description}>Title:</label><TextInput className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <label className={styles.description}>Description:</label><TextInput className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)} />
          <Button>Add list</Button>
        </form>
    );
};

export default ListForm;