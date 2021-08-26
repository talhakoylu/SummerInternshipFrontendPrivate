import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from '../Nav/Modals/LoginModal'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/auth.action';
import notification from './../../plugins/notification';
import localStorageClear from '../../plugins/localStorageClear';

export default function AccountArea() {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    return (
        <>
            {!user ? <Button onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={"user"} className="me-2"></FontAwesomeIcon>
                {t("account.account_management")}
            </Button> :
                <DropdownButton variant = "secondary" title={t("account.welcome") + ", " + user.username}>
                    <Dropdown.Item onClick={() => {
                        dispatch(setUser(null));
                        localStorageClear();
                        notification.add('info', t("account.log_out"), t("account.log_out_content"))
                    }}>{t("account.log_out")}</Dropdown.Item>
                </DropdownButton>
            }

            <LoginModal show={show} handleClose={handleClose}></LoginModal>
        </>
    )
}