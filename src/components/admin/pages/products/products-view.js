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
// import TableEmptyRows from './table-empty-rows';
// import UserTableToolbar from './user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../user/utils';
import { Link } from 'react-router-dom';
import ProductTableHead from './product-table-head';
import ProductTableRow from './product-table-row';

// ----------------------------------------------------------------------

const users = [
    {
        "name": "John Doe",
        "company": "ABC Company",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "test": "10",
        "": ""
    },
    {
        "name": "Jane Smith",
        "company": "XYZ Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "test": "5",
        "": ""
    },
    {
        "name": "David Johnson",
        "company": "123 Enterprises",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "test": "6",
        "": ""
    },
    {
        "name": "Emily Brown",
        "company": "DEF Inc.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "test": "4",
        "": ""
    },
    {
        "name": "Michael Lee",
        "company": "456 Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "test": "7",
        "": ""
    },
    {
        "name": "Sarah Taylor",
        "company": "GHI Ltd.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "test": "6",
        "": ""
    },
    {
        "name": "James Wilson",
        "company": "789 Enterprises",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "test": "2",
        "": ""
    },
    {
        "name": "Emma Garcia",
        "company": "JKL Corporation",
        "role": "Employee",
        "isVerified": false,
        "status": "Inactive",
        "test": "1",
        "": ""
    },
    {
        "name": "William Martinez",
        "company": "MNO Inc.",
        "role": "Customer",
        "isVerified": true,
        "status": "Active",
        "test": "13",
        "": ""
    },
    {
        "name": "Olivia Lopez",
        "company": "QRS Ltd.",
        "role": "Admin",
        "isVerified": true,
        "status": "Active",
        "test": "15",
        "": ""
    }
];
export default function ProductsPage() {
    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

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

    const notFound = !dataFiltered.length && !!filterName;

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Products</Typography>

                <Button
                    component={Link}
                    to={"/add-user"}
                    variant="contained" color="inherit"
                >
                    New Product
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
                        <ProductTableHead
                            order={order}
                            orderBy={orderBy}
                            rowCount={users.length}
                            numSelected={selected.length}
                            onRequestSort={handleSort}
                            onSelectAllClick={handleSelectAllClick}
                            headLabel={[
                                { id: 'name', label: 'Name' },
                                { id: 'price', label: 'Price' },
                                { id: 'role', label: 'Role' },
                                { id: 'isVerified', label: 'Verified', align: 'center' },
                                { id: 'status', label: 'Status' },
                                { id: 'test', label: 'Test' },
                                { id: '' },
                            ]}
                        />
                        <TableBody>
                            {dataFiltered
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <ProductTableRow
                                        key={row.id}
                                        name={row.name}
                                        role={row.role}
                                        status={row.status}
                                        company={row.company}
                                        avatarUrl={row.avatarUrl}
                                        isVerified={row.isVerified}
                                        testa={row.test}
                                        selected={selected.indexOf(row.name) !== -1}
                                        handleClick={(event) => handleClick(event, row.name)}
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
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 25]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </Container>
    );
}
