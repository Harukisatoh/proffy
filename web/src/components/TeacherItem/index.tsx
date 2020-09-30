import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

interface TeacherItemProps {
    classObject: {
        user_id: number,
        name: string,
        avatar: string,
        bio: string,
        whatsapp: string,
        subject: string,
        cost: number
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classObject }) => {
    function handleCreateConnection() {
        api.post('/connections', {
            user_id: classObject.user_id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={classObject.avatar} alt={classObject.name} />
                <div>
                    <strong>{classObject.name}</strong>
                    <span>{classObject.subject}</span>
                </div>
            </header>

            <p>{classObject.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {classObject.cost},00</strong>
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCreateConnection}
                    href={`https://wa.me/+55${classObject.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
