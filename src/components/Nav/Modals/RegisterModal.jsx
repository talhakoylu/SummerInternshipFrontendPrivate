import React from 'react'
import { useTranslation } from 'react-i18next';
import Modal from './../../Modal';

export default function RegisterModal({ ...dist }) {
    const {t} = useTranslation();
    return (
        <Modal title={t("account.register")} {...dist}>
           İçerik
        </Modal>
    );
}
