import { useTranslate } from 'i18n-calypso';
import { ReactElement, useState, useEffect } from 'react';
import useFetchDashboardSites from 'calypso/data/agency-dashboard/use-fetch-dashboard-sites';
import SiteContent from './site-content';
import SiteSearch from './site-search';

import './style.scss';

export default function SitesOverview(): ReactElement {
	const translate = useTranslate();
	const searchParam = new URLSearchParams( window.location.search ).get( 's' );

	const [ searchQuery, setSearchQuery ] = useState( searchParam );
	const { data, isError, isFetching, refetch } = useFetchDashboardSites( searchQuery );

	const handleSearch = ( query: string | null ) => {
		setSearchQuery( query );
	};

	useEffect( () => {
		refetch();
	}, [ refetch, searchQuery ] );

	return (
		<div className="sites-overview">
			<div className="sites-overview__page-title-container">
				<h2 className="sites-overview__page-title">{ translate( 'Dashboard' ) }</h2>
				<div className="sites-overview__page-subtitle">
					{ translate( 'Manage all your Jetpack sites from one location' ) }
				</div>
			</div>
			<SiteSearch searchQuery={ searchQuery } handleSearch={ handleSearch } />
			<SiteContent data={ data } isError={ isError } isFetching={ isFetching } />
		</div>
	);
}
