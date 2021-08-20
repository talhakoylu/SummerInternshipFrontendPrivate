import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/actions/auth.action';
import client from '../../services/http.service';

const languages = { "tr": "Türkçe", "en": "English" };

export default function LanguageDropdown() {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    return (
        <DropdownButton variant={"light"} title={languages[i18n.language]} align="end">
            {Object.keys(languages).filter(x => x !== i18n.language).map((language) => <Dropdown.Item key={language} onClick={() => {
                i18n.changeLanguage(language);
                dispatch(setLanguage(language));
                client.client.defaults.headers["Accept-Language"] = language;
                localStorage.setItem('lang', language)
            }}>{languages[language]}</Dropdown.Item>)}
        </DropdownButton>

    );
}