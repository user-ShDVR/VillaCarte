import { useEffect, useRef } from 'react';

const config = { handlers: [] };

export const useWheelEvent = () => {
	useEffect( () => {
		const scrollFunction = ( e: any ) => {
			e.preventDefault();
			const scrollEl = document.scrollingElement;

			let defaultBehavior = true;

			config.handlers.forEach( ( handler ) => {
				if ( defaultBehavior ) defaultBehavior = handler( e, scrollEl );

			} );

			if ( defaultBehavior ) {
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
			const rect = section.getBoundingClientRect();

			if ( rect.top >= 20 && rect.top < 180 ) {
				if ( e.deltaY < 0 ) {
					//up
					if ( textBlock.scrollTop !== 0 ) {
						scrollEl.scrollTop = section.offsetTop - 100;
						let scrollTop = textBlock.scrollTop + e.deltaY / 2;
						textBlock.scrollTop = scrollTop < 0 ? 0 : scrollTop;
					} else {
						return true;
					}
				} else {
					//down
					let maxScroll = textBlock.scrollHeight - textBlock.offsetHeight;
					if ( textBlock.scrollTop !== maxScroll ) {
						scrollEl.scrollTop = section.offsetTop - 100;
						let scrollTop = textBlock.scrollTop + e.deltaY / 2;
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

		config.handlers.push( scrollFunction );

		return () => {
			config.handlers = config.handlers.filter(
				handle => handle !== scrollFunction
			);
		};
	} );

	return [ _section, _textBlock ];
};