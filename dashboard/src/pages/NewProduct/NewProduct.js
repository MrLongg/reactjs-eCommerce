import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';

const cx = classNames.bind(styles);

function NewProduct() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>New Product</h1>
            <form className={cx('form')}>
                <div className={cx('item')}>
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className={cx('item')}>
                    <label>Title</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className={cx('item')}>
                    <label>Categories</label>
                    <input type="text" placeholder="jeans, male" />
                </div>
                <div className={cx('item')}>
                    <label>Price</label>
                    <input type="text" placeholder="100" /> 
                    {/* Nen de kieu number */}
                </div>
                <div className={cx('item')}>
                    <label>Description</label>
                    <input type="text" placeholder="Description" />
                </div>
                <div className={cx('item')}>
                    <label>Stock</label>
                    <select>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button className={cx('button')}>Create</button>
            </form>
        </div>
    );
}

export default NewProduct;
