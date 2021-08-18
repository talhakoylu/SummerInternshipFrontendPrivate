import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from '../Nav/Modals/LoginModal'

export default function AccountArea() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={"user"} className="me-2"></FontAwesomeIcon>
                Hesap Yönetimi
            </Button>

            <LoginModal show={show} handleClose={handleClose}></LoginModal>
        </>
    )
}