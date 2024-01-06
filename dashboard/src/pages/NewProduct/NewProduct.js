import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../firebase';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleCategories = (e) => {
        setCategories(e.target.value.split(', '));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories: categories };
                    addProduct(product, dispatch);
                });
            },
        );
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>New Product</h1>
            <form className={cx('form')}>
                <div className={cx('item')}>
                    <label>Image</label>
                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className={cx('item')}>
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Apple Airpods" onChange={handleChange} />
                </div>
                <div className={cx('item')}>
                    <label>Description</label>
                    <input name="desc" type="text" placeholder="Description" onChange={handleChange} />
                </div>
                <div className={cx('item')}>
                    <label>Categories</label>
                    <input type="text" placeholder="jeans, male" onChange={handleCategories} />
                </div>
                <div className={cx('item')}>
                    <label>Price</label>
                    <input name="price" type="number" placeholder="100" onChange={handleChange} />
                </div>
                <div className={cx('item')}>
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleCreate} className={cx('button')}>
                    Create
                </button>
            </form>
        </div>
    );
}

export default NewProduct;
