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
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className={cx('item')}>
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className={cx('item')}>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={cx('button')}>Create</button>
            </form>
        </div>
    );
}

export default NewProduct;
