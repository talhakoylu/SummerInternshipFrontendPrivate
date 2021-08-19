import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Modal from './../../Modal';
import RegisterModal from './RegisterModal';

export default function LoginModal({ ...dist }) {
    const {t} = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal title={t("account.login")} {...dist}>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>{t("account.username")}</Form.Label>
                        <Form.Control type="text" placeholder={t("account.username_placeholder")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>{t("account.password")}</Form.Label>
                        <Form.Control type="password" placeholder={t("account.password_placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label={t("account.remember_me")} />
                    </Form.Group>
                    <div class="d-grid gap-2">
                        <Button variant="primary" className="block" type="submit">
                            {t("account.login")}
                        </Button>
                    </div>
                </Form>
                <div class="d-flex my-4">
                    <hr className="my-auto flex-grow-1" />
                    <div className="px-4">{t("account.modal_or")}</div>
                    <hr className="my-auto flex-grow-1" />

                </div>

                <div class="d-grid gap-2">
                    <Button variant="warning" className="block" type="submit" onClick={() => setShow(true)}>
                    {t("account.register")}
                    </Button>
                </div>

            </Modal>
            <RegisterModal show={show} handleClose={handleClose}></RegisterModal>

        </>
    );
}
