/**
 * External dependencies
 */
import { keyedReducer } from '@automattic/state-utils';

/**
 * Internal dependencies
 */
import { combineReducers } from 'calypso/state/utils';
import edits from './edits-reducer';
import list from './list-reducer';

export default combineReducers( {
	edits: keyedReducer( 'siteId', edits ),
	list,
} );
