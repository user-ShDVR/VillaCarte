import React from 'react';
import styles from './styles.module.scss';
import IMoreThanTenYearsProps from './interface';

const MoreThan10Years: React.FC<IMoreThanTenYearsProps> = ({
    weHaveBeenTakingCare,
    inVillaCarteEveryDayWeWork,
}) => {
    return (
        <div className={styles.moreThan10Years}>
            <div className={styles.container}>
                <div className={styles.bgImage}>
                    <div className={styles.text}>
                        <h2 className='header2'>{weHaveBeenTakingCare}</h2>
                        <p className='paragraph3'>
                            {inVillaCarteEveryDayWeWork}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreThan10Years;
