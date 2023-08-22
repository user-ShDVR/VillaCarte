import React from 'react';
import leavesTransparent from '@/public/leavesTransparent.webp';
import leavesLeft from '@/public/leavesLeft.webp';
import leavesRight from '@/public/leavesRight.webp';
import Image from 'next/image';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
interface IProps {
    joinThePrivateVillaCarteClub: string;
    youBecomeAClubMember: string;
    learnMoreSmall: string;
}
const JoinTheClub: React.FC<IProps> = ({
    joinThePrivateVillaCarteClub,
    youBecomeAClubMember,
    learnMoreSmall,
}) => {
    return (
        <div className={'joinTheClub pos z-5'}>
            {/* <div style={ { backgroundImage: `url(${ leavesTransparent.src })` } } className={ 'joinTheClub-bg' }/> */}
            <div className={'joinTheClub-bg'} />

            <Image
                src={leavesLeft}
                alt={''}
                className={'leavesLeft'}
            />

            <div
                className={
                    'container pt-60 mb-60 d-flex flex-column jc-center ai-center'
                }>
                <h2 className={'h2Subtitle ta-center ls--144'}>
                    {joinThePrivateVillaCarteClub}
                </h2>

                <p className={'text300 colorGrey ta-center'}>
                    {youBecomeAClubMember}
                </p>

                <HoveredButton
                    to={'/'}
                    text={learnMoreSmall}
                    variant={'arrow'}
                    className={'ta-center'}
                />
            </div>

            <Image
                src={leavesRight}
                alt={''}
                className={'leavesRight'}
            />
        </div>
    );
};

export default JoinTheClub;
