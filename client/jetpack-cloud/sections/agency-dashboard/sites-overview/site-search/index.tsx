import { useTranslate } from 'i18n-calypso';
import { ReactElement } from 'react';
import Search from 'calypso/components/search';
import useUrlSearch from 'calypso/lib/url-search/use-url-search';

import './style.scss';

export default function SiteSearch( {
	searchQuery,
	handleSearch,
}: {
	searchQuery: string | null;
	handleSearch: ( query: string ) => void;
} ): ReactElement {
	const translate = useTranslate();
	const { doSearch } = useUrlSearch();

	const handleSearchSites = ( query: string ) => {
		doSearch( query );
		handleSearch( query );
	};

	return (
		<div className="site-search">
			<Search
				isOpen
				hideClose={ ! searchQuery }
				initialValue={ searchQuery }
				onSearch={ handleSearchSites }
				placeholder={ translate( 'Search sites' ) }
				delaySearch={ true }
			/>
		</div>
	);
}
