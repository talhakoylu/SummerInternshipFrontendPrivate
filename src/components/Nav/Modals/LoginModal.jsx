import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Modal from './../../Modal';
import RegisterModal from './RegisterModal';

export default function LoginModal({ ...dist }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal title={"Giriş Yap"} {...dist}>
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" placeholder="Kullanıcı adını giriniz" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" placeholder="Şifre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Beni Hatırla" />
                    </Form.Group>
                    <div class="d-grid gap-2">
                        <Button variant="primary" className="block" type="submit">
                            Giriş Yap
                        </Button>
                    </div>
                </Form>
                <div class="d-flex my-4">
                    <hr className="my-auto flex-grow-1" />
                    <div className="px-4">VEYA</div>
                    <hr className="my-auto flex-grow-1" />

                </div>

                <div class="d-grid gap-2">
                    <Button variant="warning" className="block" type="submit" onClick={() => setShow(true)}>
                        Kayıt Ol
                    </Button>
                </div>

            </Modal>
            <RegisterModal show={show} handleClose={handleClose}></RegisterModal>

        </>
    );
}
