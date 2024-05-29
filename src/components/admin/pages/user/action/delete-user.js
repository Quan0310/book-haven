import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Delete(props) {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8088/api/admin/users/${props.propName}`, {
                headers: {
                    'Authorization': `Bearer ${props.token}`
                }
            });
            console.log(response.data);
            alert('User deleted successfully');
            props.handleClose();
            props.onDeleteSuccess(); // Call the callback to refresh the user list
        } catch (error) {
            console.error('There was an error deleting the user!', error);
            alert('Failed to delete user');
        }
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} style={{ top: '100px' }}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xóa người dùng với ID {props.propName}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Delete;
