import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Modal from './../../Modal';
import RegisterModal from './RegisterModal';
import notification from './../../../plugins/notification';
import { AuthService } from '../../../redux/services';
import { useDispatch } from 'react-redux';
import httpService from '../../../services/http.service';
import { setUser } from '../../../redux/actions/auth.action';

export default function LoginModal({ ...dist }) {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [fetching, setFetching] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    const loginRequest = () => {
        setFetching(true);
        AuthService.token({
            data: {
                username: username,
                password: password
            }
        })
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data))
                httpService.client.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access;

                AuthService.me()
                    .then(res => {
                        dispatch(setUser(res.data));
                        localStorage.setItem('user', JSON.stringify(res.data))
                        dist.handleClose();
                        notification.add('success', t('services.auth.token.success_title'), t('services.auth.token.success_content'))
                    })
                    .catch(err => {
                        notification.add('danger',  t('services.auth.token.went_wrong_title'), t('services.auth.token.went_wrong_content'))
                    })
                    .finally(() => {
                        setFetching(false);
                    });
            })
            .catch(err => {
                if (err["response"]["data"]["username"]) {
                    notification.add('danger', t('services.auth.token.required_field_missing'), t('services.auth.token.username_required'))
                } else if (err["response"]["data"]["password"]) {
                    notification.add('danger', t('services.auth.token.required_field_missing'), t('services.auth.token.password_required'))
                } else {
                    notification.add('danger', t('services.auth.token.failure_title'), t('services.auth.token.failure_content'))
                }
                setFetching(false);
            })
            .finally(() => {
            });
    }

    return (
        <>
            <Modal title={t("account.login")} {...dist}>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>{t("account.username")}</Form.Label>
                        <Form.Control required type="text" placeholder={t("account.username_placeholder")} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>{t("account.password")}</Form.Label>
                        <Form.Control required type="password" placeholder={t("account.password_placeholder")} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label={t("account.remember_me")} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        {username && password ?
                            <Button disabled={fetching ? true : false} variant="primary" className="block" type="submit" onClick={(e) => {
                                e.preventDefault();
                                loginRequest()
                            }}>
                                {t("account.login")}
                            </Button> :
                            <Button disabled={true} variant="primary" className="block" type="submit">
                                {t("account.login")}
                            </Button>}

                    </div>
                </Form>
                <div className="d-flex my-4">
                    <hr className="my-auto flex-grow-1" />
                    <div className="px-4">{t("account.modal_or")}</div>
                    <hr className="my-auto flex-grow-1" />

                </div>

                <div className="d-grid gap-2">
                    <Button variant="warning" className="block" type="submit" onClick={() => {
                        dist.handleClose()
                        setShow(true)
                    }}>
                        {t("account.register")}
                    </Button>
                </div>

            </Modal>
            <RegisterModal show={show} handleClose={handleClose}></RegisterModal>

        </>
    );
}
