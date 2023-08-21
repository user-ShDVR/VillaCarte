import { FC } from 'react';
import RequestCall from '../request-call';
interface IProps {
    IdealForInvest: string;
    KiaraReverse: string;
    KRprice: string;
    Place: string;
    EndDateBuild: string;
    requestACall: string;
    phoneNumber: string;
    yourName: string;
    byClickingTheRequestACall: string;
}
const Masthead: FC<IProps> = ({
    IdealForInvest,
    KiaraReverse,
    KRprice,
    Place,
    EndDateBuild,
    requestACall,
    phoneNumber,
    yourName,
    byClickingTheRequestACall
}) => {
    return (
        <>
            <section className='kiara-reserve'>
                <div className='masthead'>
                    <div className='text'>
                        <p>{IdealForInvest}</p>
                        <span>
                            <h1>{KiaraReverse}</h1>
                            <h3>{KRprice}</h3>
                        </span>
                        <p>
                            {Place}<br className='masthead__mobileBreak' />{EndDateBuild}
                        </p>
                        <button className='masthead__mobileCall'>
                            {requestACall}
                        </button>
                    </div>
                    <RequestCall
                        phoneNumber={phoneNumber}
                        yourName={yourName}
                        byClickingTheRequestACall={byClickingTheRequestACall}
                        requestACall={requestACall}
                    />
                </div>
            </section>
        </>
    );
};

export default Masthead;
