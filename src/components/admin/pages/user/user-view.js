import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import UserTableRow from './user-table-row';
import UserTableHead from './user-table-head';
import { applyFilter, getComparator } from './utils';
import AddUser from './action/add-user';
import Edit from './action/edit-user';
import Delete from './action/delete-user';
import { fetchAllUser } from '../../../../services/UserServices';

export default function UserPage() {
    const token = localStorage.getItem('jwtToken');
    const [propName, setPropName] = useState(null);
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
    const [userLength, setUserLength] = useState(0);

    const handleSort = (event, id) => {
        const isAsc = orderBy === id && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(id);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = listUsers.map((n) => n.name);
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

    const handleAddUserShow = () => {
        setShow(true);
    };
    const handleAddUserClose = () => {
        setShow(false);
    };
    const handleEditUserShow = (event) => {
        setPropName(event);
        setEditShow(true);
    };
    const handleEditUserClose = () => {
        setEditShow(false);
    };
    const handleDeleteUserShow = (userId) => {
        setPropName(userId);
        setDeleteShow(true);
    };
    const handleDeleteUserClose = () => {
        setDeleteShow(false);
    };

    const dataFiltered = applyFilter({
        inputData: listUsers,
        comparator: getComparator(order, orderBy),
        filterName,
    });

    const notFound = !dataFiltered.length && !!filterName;

    const fetchUsers = () => {
        fetchAllUser(token, page, rowsPerPage)
            .then(response => {
                setListUsers(response.data.content);
                setUserLength(response.data.totalElements);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, [page, rowsPerPage]);

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Users</Typography>
                <Button onClick={handleAddUserShow} variant="contained" color="inherit">
                    New User
                </Button>
            </Stack>

            <Card>
                <TableContainer sx={{ overflow: 'unset' }}>
                    <Table sx={{ minWidth: 800 }}>
                        <UserTableHead
                            order={order}
                            orderBy={orderBy}
                            rowCount={listUsers.length}
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
                            {dataFiltered.map((row) => (
                                <UserTableRow
                                    key={row.userId}
                                    userId={row.userId}
                                    firstName={row.firstName}
                                    lastName={row.lastName}
                                    mobileNumber={row.mobileNumber}
                                    email={row.email}
                                    selected={selected.indexOf(row.name) !== -1}
                                    handleClick={(event) => handleClick(event, row.name)}
                                    handleDelete={handleDeleteUserShow}
                                    handleEdit={handleEditUserShow}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    page={page}
                    component="div"
                    count={userLength}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 15]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
            <AddUser show={show} handleClose={handleAddUserClose} />
            <Edit show={editShow} handleClose={handleEditUserClose} propName={propName} />
            <Delete show={deleteShow} handleClose={handleDeleteUserClose} propName={propName} onDeleteSuccess={fetchUsers} token={token} />
        </Container>
    );
}
