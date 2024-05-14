import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import TableNoData from './table-no-data';
import UserTableRow from './user-table-row';
import UserTableHead from './user-table-head';
// import TableEmptyRows from './table-empty-rows';
// import UserTableToolbar from './user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from './utils';
import { Link } from 'react-router-dom';
import AddUser from './action/add-user';
import Edit from './action/edit-user';
import Delete from './action/delete-user';
import { useEffect } from 'react';
import { fetchAllUser } from '../../../../services/UserServices';

// ----------------------------------------------------------------------

const users = [
    {
        "name": "John Doe",
        "company": "ABC Company",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Jane Smith",
        "company": "XYZ Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "David Johnson",
        "company": "123 Enterprises",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Emily Brown",
        "company": "DEF Inc.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Michael Lee",
        "company": "456 Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "Sarah Taylor",
        "company": "GHI Ltd.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "James Wilson",
        "company": "789 Enterprises",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Emma Garcia",
        "company": "JKL Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "William Martinez",
        "company": "MNO Inc.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Olivia Lopez",
        "company": "QRS Ltd.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "John Doe",
        "company": "ABC Company",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Jane Smith",
        "company": "XYZ Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "David Johnson",
        "company": "123 Enterprises",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Emily Brown",
        "company": "DEF Inc.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Michael Lee",
        "company": "456 Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "Sarah Taylor",
        "company": "GHI Ltd.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "James Wilson",
        "company": "789 Enterprises",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Emma Garcia",
        "company": "JKL Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "": ""
    },
    {
        "name": "William Martinez",
        "company": "MNO Inc.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "": ""
    },
    {
        "name": "Olivia Lopez",
        "company": "QRS Ltd.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "": ""
    }
];
export default function UserPage() {
    const token = localStorage.getItem('jwtToken');
    const [propName, setPropName] = useState();
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [listUsers, setListUsers] = useState([]);
    const [userlenght, setUserLenght] = useState(0);
    const handleSort = (event, id) => {
        const isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = users.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const dataFiltered = applyFilter({
        inputData: users,
        comparator: getComparator(order, orderBy),
        filterName,
    });
    const hanldeAddUserShow = () => {
        setShow(true);
    }
    const hanldeAddUserClose = () => {
        setShow(false);
    }
    const hanldeEditUserShow = (event) => {
        console.log(">>>w>>", event);
        setPropName(event);
        setEditShow(true);
    }
    const hanldeEditUserClose = () => {
        setEditShow(false);
    }
    const handleDeleteUserShow = (event) => {
        console.log("propname: ", event)
        setPropName(event);
        setDeleteShow(true);
    }
    const handleDeleteUserClose = () => {
        setDeleteShow(false);
    }
    const notFound = !dataFiltered.length && !!filterName;

    useEffect(() => {
        fetchAllUser(token, page, rowsPerPage)
            .then(response => {
                console.log(response.data);
                setListUsers(response.data.content);
                setUserLenght(response.data.totalElements);
            })
            .catch(error => {
                console.log(error);
            });
    }, [page, rowsPerPage]);
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Users</Typography>

                <Button
                    onClick={hanldeAddUserShow}
                    variant="contained" color="inherit"
                >
                    New User
                </Button>
            </Stack>

            <Card>
                {/* <UserTableToolbar
                    numSelected={selected.length}
                    filterName={filterName}
                    onFilterName={handleFilterByName}
                /> */}

                {/* <Scrollbar> */}
                <TableContainer sx={{ overflow: 'unset' }}>
                    <Table sx={{ minWidth: 800 }}>
                        <UserTableHead
                            order={order}
                            orderBy={orderBy}
                            rowCount={users.length}
                            numSelected={selected.length}
                            onRequestSort={handleSort}
                            onSelectAllClick={handleSelectAllClick}
                            headLabel={[
                                { id: 'firstName', label: 'First Name' },
                                { id: 'lastName', label: 'Last Name' },
                                { id: 'mobileNumber', label: 'Phone Number' },
                                { id: 'email', label: 'Email' },
                                { id: '' },
                            ]}
                        />
                        <TableBody>
                            {listUsers
                                .map((row) => (
                                    <UserTableRow
                                        userId={row.userId}
                                        firstName={row.firstName}
                                        lastName={row.lastName}
                                        mobileNumber={row.mobileNumber}
                                        email={row.email}

                                        // avatarUrl={row.avatarUrl}
                                        // isVerified={row.isVerified}

                                        selected={selected.indexOf(row.name) !== -1}
                                        handleClick={(event) => handleClick(event, row.name)}
                                        handleDelete={handleDeleteUserShow}
                                        handleEdit={hanldeEditUserShow}

                                    />
                                ))}

                            {/* <TableEmptyRows
                                    height={77}
                                    emptyRows={emptyRows(page, rowsPerPage, users.length)}
                                /> */}

                            {/* {notFound && <TableNoData query={filterName} />} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </Scrollbar> */}

                <TablePagination
                    page={page}
                    component="div"
                    count={userlenght}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 15]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
            <AddUser show={show} handleClose={hanldeAddUserClose}></AddUser>
            <Edit show={editShow} handleClose={hanldeEditUserClose} propName={propName} ></Edit>
            <Delete show={deleteShow} handleClose={handleDeleteUserClose} propName={propName} ></Delete>
        </Container>
    );
}
