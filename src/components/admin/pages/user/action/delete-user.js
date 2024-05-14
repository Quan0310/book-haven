import { TextField } from '@mui/material';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useEffect } from 'react';
import { getUserById } from '../../../../../services/UserServices';
function Delete(props) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    useEffect(() => {
        getUserById(props.propName)
            .then(response => {
                console.log(response);
            })
            .catch(error => {

            })
    });
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} style={{ top: '100px' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có muốn xóa người dùng {props.propName}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Delete;