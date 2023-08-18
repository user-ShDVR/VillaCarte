import React from 'react';
import Image from 'next/image';
import photo from '@/public/kiara-reserve/Rectangle.png';

const VideoKiera: React.FC = () => {
    return (
        <div className='video-kiera'>
            <div className='video-kiera__container'>
                <Image
                    src={photo}
                    alt='photo'
                    width={2688 / 2}
                    height={1400 / 2}
                />
            </div>
        </div>
    );
};

export default VideoKiera;
