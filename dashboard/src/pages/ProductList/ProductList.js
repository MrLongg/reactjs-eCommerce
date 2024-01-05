import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteProduct, getProducts } from '../../redux/apiCalls';

const cx = classNames.bind(styles);

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    };

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cx('list-product')}>
                        <img className={cx('img')} src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <button className={cx('edit')}>Edit</button>
                        </Link>
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faTrashCan}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <DataGrid
                className={cx('table')}
                rows={products}
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 8, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}

export default ProductList;
