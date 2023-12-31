import React from 'react';
import { Modal } from '@/components/common/Modal/Modal';
import { EModal_VisibleStore } from '@/types/modal';
import feedBackBg from '@/public/feedBackBg.webp';
import Image from 'next/image';
import flowerRight from '@/public/leavesRight.webp';
import FeedBackForm from '@/components/common/Forms/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';
import ModalCloseButton from '@/components/common/Buttons/ModalCloseButton';
import { hideModal } from '@/store/modal';
import { useTranslations } from 'next-intl';
interface IProps {
orderAPersonalSelection: string;
orderAPersonalSelection2: string;
ourManagerWillCallYou: string;
contactUsThroughOurMessengers: string;

}

const ModalCallRequest: React.FC<IProps>= ({
orderAPersonalSelection,
orderAPersonalSelection2,
ourManagerWillCallYou,
contactUsThroughOurMessengers
}) => {
	const t = useTranslations('Index');
	const toCloseModal = () => {
		hideModal( EModal_VisibleStore.CallRequest );
	};

	return (
		<Modal storeKey={ EModal_VisibleStore.CallRequest } wrapperClass={ 'feedBack-modal-wrapper' }>

			<div className={ 'feedBack-modal bgModal p-40' }>
				<div className={ 'feedBack-modal-bg' } style={ { backgroundImage: `url(${ feedBackBg.src })` } }/>

				<div className={ 'element-animation' }>
					<Image src={ flowerRight } alt={ '' } className={ 'flowerRight-modal' }/>
				</div>

				<div className={ 'pos feedBackBlock-content' }>
					<div>
						<div>
							<h2 className={ 'h2Subtitle twoStringTitle m-0' }>{orderAPersonalSelection}</h2>
							<h2 className={ 'h2Subtitle twoStringTitle m-0' }>{orderAPersonalSelection2 }</h2>
							<h6 className={ 'text300 colorText pt-8 mb-30 fz-14' }>
								{ ourManagerWillCallYou}
							</h6>
						</div>

						<FeedBackForm sourcePage={ '' } sourceForm={ 'modal_form' }/>
					</div>

					<div className={ 'ourMessengers-wrapper' }>
						<OurMessengers contactUsThroughOurMessengers={contactUsThroughOurMessengers} />
					</div>

				</div>
			</div>

			<ModalCloseButton onClick={ toCloseModal }/>
		</Modal>
	);
};

export default ModalCallRequest;