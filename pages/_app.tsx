import '@/static/styles/index.scss';
import React, { Suspense, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Spinner from '@/components/common/Spinner/Spinner';
import { appWithTranslation } from 'next-i18next';

function App( { Component, pageProps }: any ) {
	const [ queryClient ] = useState( () => new QueryClient() );

	return (
		<QueryClientProvider client={ queryClient }>
			<Hydrate state={ pageProps.dehydratedState }>
				{/*<ServiceModal/>*/ }
				{/*<ToTopButton/>*/ }
				<Component { ...pageProps } />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default appWithTranslation( App );