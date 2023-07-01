import { IFeedback } from '@/types/feedback';
import { apiPost } from '@/api';

export const postFeedback = async ( postData: IFeedback ) => {
	return await apiPost( { url: '/', postData } );
};