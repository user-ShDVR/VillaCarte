import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import ButtonBorderBlack from '@/ui/button-border-black';
import IJoinClubProps from './interface';

const JoinClub: React.FC<IJoinClubProps> = ({
    joinThePrivateVillaCarteClub,
    youBecomeAClubMember,
    learnMoreSmall
}) => {
    return (
        <div className={styles.joinClub}>
            <div className={styles.joinClubContainer}>
                <h2 className='header2'>{joinThePrivateVillaCarteClub}</h2>
                <p className='paragraph3'>{youBecomeAClubMember}</p>
                <ButtonBorderBlack
                    type='button'>
                    <span>{learnMoreSmall}</span>
                    <Image
                        src={`/main/8-join-club/arrow-blue.svg`}
                        alt='arrow'
                        width={28 / 2}
                        height={20 / 2}
                    />
                </ButtonBorderBlack>
            </div>
        </div>
    );
};

export default JoinClub;
