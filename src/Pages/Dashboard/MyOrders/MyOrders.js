import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { IconButton, Typography } from '@mui/material';
import useFirebase from '../../../hooks/useFirebase';

const MyOrders = () => {
    const [orders, setOrders] = React.useState([]);
    const { user } = useFirebase();

    // load logged in users data 
    React.useEffect(() => {
        axios.get(`https://savon-server-sider-api.herokuapp.com/customers/?email=${user.email}`)
            .then(res => setOrders(res.data))
    }, [user.email]);

    // cancel order handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to cancel this order?');
        if (proceed) {
            axios.delete(`https://savon-server-sider-api.herokuapp.com/customers/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Order Cancelled Succesfully');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                });
        }
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Service Name
                            </TableCell>
                            <TableCell>
                                Appointment Date
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell>
                                Cancel
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={order._id}
                            >
                                <TableCell >
                                    {orders.indexOf(order) + 1}
                                </TableCell>
                                <TableCell >
                                    {order.soapTitle}
                                </TableCell>
                                <TableCell >
                                    {order.date}
                                </TableCell>
                                <TableCell >
                                    {order.status}
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={() => handleDelete(order._id)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!orders.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No Appointments
            </Typography>}
        </Paper >
    );
};

export default MyOrders;