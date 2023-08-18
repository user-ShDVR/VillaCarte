import { useEffect, useRef } from 'react';

const config = { handlers: [] };

export const useWheelEvent = () => {
	useEffect( () => {
		const scrollFunction = ( e: any ) => {
			e.preventDefault();
			const scrollEl = document.scrollingElement;

			let defaultBehavior = true;

			config.handlers.forEach( ( handler ) => {
				if ( defaultBehavior ) {
					// @ts-ignore
					defaultBehavior = handler( e, scrollEl );
				}

			} );

			if ( defaultBehavior ) {
				// @ts-ignore
				scrollEl.scrollTop = scrollEl.scrollTop + e.deltaY;
			}
		};

		window.addEventListener( 'wheel', scrollFunction, { passive: false } );

		return () => {
			window.removeEventListener( 'wheel', scrollFunction );
		};
	} );
};

export const useSubscribeWheel = () => {
	const _section = useRef( null );
	const _textBlock = useRef( null );

	useEffect( () => {
		const section = _section.current;
		const textBlock = _textBlock.current;

		const scrollFunction = ( e: any, scrollEl: any ) => {
			// @ts-ignore
			const rect = section.getBoundingClientRect();

			if ( rect.top >= 20 && rect.top < 180 ) {
				if ( e.deltaY < 0 ) {
					//up
					// @ts-ignore
					if ( textBlock.scrollTop !== 0 ) {
						// @ts-ignore
						scrollEl.scrollTop = section.offsetTop - 100;
						// @ts-ignore
						let scrollTop = textBlock.scrollTop + e.deltaY / 2;
						// @ts-ignore
						textBlock.scrollTop = scrollTop < 0 ? 0 : scrollTop;
					} else {
						return true;
					}
				} else {
					//down
					// @ts-ignore
					let maxScroll = textBlock.scrollHeight - textBlock.offsetHeight;
					// @ts-ignore
					if ( textBlock.scrollTop !== maxScroll ) {
						// @ts-ignore
						scrollEl.scrollTop = section.offsetTop - 100;
						// @ts-ignore
						let scrollTop = textBlock.scrollTop + e.deltaY / 2;
						// @ts-ignore
						textBlock.scrollTop = scrollTop > maxScroll ? maxScroll : scrollTop;
					} else {
						return true;
					}
				}
			} else {
				return true;
			}

			return false;
		};

		// @ts-ignore
		config.handlers.push( scrollFunction );

		return () => {
			config.handlers = config.handlers.filter(
				handle => handle !== scrollFunction
			);
		};
	} );

	return [ _section, _textBlock ];
};