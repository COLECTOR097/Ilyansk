import React, {FC} from 'react';

import ErrorIMG from '../assets/images/png/error.png'
const NotFound: FC = () => {
    return (
        <div className={"notFound"}>
            <div className={'notFound__title'}>ошибка</div>
            <div className={'notFound__error-code'}>
                <span>4</span>
                <img src={ErrorIMG} alt={ErrorIMG}/>
                <span>4</span>
            </div>
            <div className={'notFound__desc'}>Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</div>
        </div>
    );
};

export default NotFound;