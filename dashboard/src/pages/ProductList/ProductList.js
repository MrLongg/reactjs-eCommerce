import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { productRows } from '../../dummyData';

const cx = classNames.bind(styles);

function ProductList() {
    const [data, setData] = useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cx('list-product')}>
                        <img className={cx('img')} src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
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
                    <Link to={'/product/' + params.row.id}>
                    <button className={cx('edit')}>Edit</button>
                    </Link>
                    <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} onClick={() => handleDelete(params.row.id)} />
                    </>
                    )
            }
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <DataGrid
                className={cx('table')}
                rows={data}
                columns={columns}
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
    )
}

export default ProductList