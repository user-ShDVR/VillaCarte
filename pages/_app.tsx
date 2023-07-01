import '@/static/styles/index.scss';
import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export default function App( { Component, pageProps }: any ) {
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
