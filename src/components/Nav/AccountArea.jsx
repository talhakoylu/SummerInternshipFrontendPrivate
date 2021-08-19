import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from '../Nav/Modals/LoginModal'
import { useTranslation } from 'react-i18next';

export default function AccountArea() {
    const {t} = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={"user"} className="me-2"></FontAwesomeIcon>
                {t("account.account_management")}
            </Button>

            <LoginModal show={show} handleClose={handleClose}></LoginModal>
        </>
    )
}