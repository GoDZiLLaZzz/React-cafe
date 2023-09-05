import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Line.module.scss"

const Line = () => {
    return (
        <div className={styles.root}>
            <div className={styles.info}>
                <div>Стань тайным покупателем Neft Cafe и получи пиццу в подарок</div>
                <button className={styles.button}><a href='https://forms.yandex.ru/cloud/64f4b45843f74fbd2c538413/' target='_blank'>Оставить заявку</a></button>
            </div>
        </div>
    );
};

Line.propTypes = {
    
};

export default Line;