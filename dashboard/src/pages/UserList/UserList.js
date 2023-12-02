import classNames from 'classnames/bind';
import styles from './UserList.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import { userRows } from '../../dummyData';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'Username',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={cx('list-user')}>
                        <img className={cx('img')} src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/user/' + params.row.id}>
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
    );
}

export default UserList;
