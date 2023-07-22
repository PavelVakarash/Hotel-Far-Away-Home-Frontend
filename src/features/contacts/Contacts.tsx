import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Contacts.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Contacts(): JSX.Element {
    const navigate = useNavigate();
    function handleGoogleMapClick(): void {
        navigate('/googleMap');
    }
    function handlePhoneClick(): void {
        navigate('/phone');
    }
    function handleRequestCallClick(): void {
        navigate('/requestCall');
    }
    function handleGetDirectionClick(): void {
        window.location.href = 'https://goo.gl/maps/jYT8sKCbiSuxJnFRA';
    }

    const { language } = useContext(LanguageContext);

    return (
        <div className={style.contactsContainer}>
            <h1 className={style.contacts_text}>
            {t('contacts', language)}
            </h1>
            <div className={style.contactContainer}>
                <div className={style.contacts}>
                    <div className={style.contactsContent}>
                        <span className={style.contactsInfo}>{t('phone', language)}</span>
                        <span className={style.contactsTitle} onClick={handlePhoneClick}>
                            +0 123 456 78 90
                        </span>
                        <span className={style.requestCall} onClick={handleRequestCallClick}>
                        {t('requestCall', language)}
                        </span>
                        <span className={style.contactsInfo}>{t('address', language)}</span>
                        <span className={style.contactsTitle}>
                            Platz d. Deutschen Einheit 2, 20457 Hamburg
                        </span>
                        <span className={style.contactsInfo}>{t('reservation', language)}</span>
                        <span className={style.contactsTitle}>reservations@farawayhome.de</span>
                        <span className={style.contactsInfo}>{t('sales', language)}</span>
                        <span className={style.contactsTitle}>sales@farawayhome.de</span>
                        <span className={style.contactsInfo}>{t('marketing', language)}</span>
                        <span className={style.contactsTitle}>marketing@farawayhome.de</span>
                        <button className={style.contact_button} type="button" onClick={handleGetDirectionClick}>{t('directions', language)}</button>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.contactsContent} onClick={handleGoogleMapClick}>
                        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4741.88281426753!2d9.979920885675053!3d53.54096040713681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f0660b94e29%3A0x5eca8033f8b45f4d!2sThe%20Westin%20Hamburg!5e0!3m2!1sen!2sde!4v1687890524896!5m2!1sen!2sde" style={{ width: '100%', height: '100%', border: '0' }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
