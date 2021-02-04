/**
 * External dependencies
 */
import { keyedReducer } from '@automattic/state-utils';

/**
 * Internal dependencies
 */
import { JITM_SET } from 'calypso/state/action-types';
import { combineReducers, withStorageKey } from 'calypso/state/utils';

export const storeJITM = ( state = {}, { type, jitms } ) => ( type === JITM_SET ? jitms : state );

const sitePathJITM = keyedReducer( 'keyedPath', storeJITM );

const combinedReducer = combineReducers( {
	sitePathJITM,
} );

export default withStorageKey( 'jitm', combinedReducer );
