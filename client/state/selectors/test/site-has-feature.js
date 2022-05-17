import siteHasFeature from 'calypso/state/selectors/site-has-feature';

describe( 'selectors', () => {
	describe( '#siteHasFeature()', () => {
		test( 'should return False when no site id', () => {
			const active = [ 'feature_active_01', 'feature_active_02', 'feature_active_03' ];
			const state = {
				sites: {
					features: {
						123001: {
							data: {
								active,
							},
						},
					},
				},
			};

			const activeFeature = siteHasFeature( state );
			expect( activeFeature ).toEqual( false );
		} );

		test( 'should return False when site does not exist', () => {
			const active = [ 'feature_active_01', 'feature_active_02', 'feature_active_03' ];

			const state = {
				sites: {
					features: {
						123001: {
							data: {
								active,
							},
						},
					},
				},
			};

			const activeFeature = siteHasFeature( state, 0 );
			expect( activeFeature ).toEqual( false );
		} );

		test( 'should return False when feature param is not defined', () => {
			const active = [ 'feature_active_01', 'feature_active_02', 'feature_active_03' ];

			const state = {
				sites: {
					features: {
						123001: {
							data: {
								active,
							},
						},
					},
				},
			};

			const activeFeature = siteHasFeature( state, 123001 );
			expect( activeFeature ).toEqual( false );
		} );

		test( 'should return False when feature is not defined in the active array', () => {
			const active = [ 'feature_active_01', 'feature_active_02', 'feature_active_03' ];

			const state = {
				sites: {
					features: {
						123001: {
							data: {
								active,
							},
						},
					},
				},
			};

			const activeFeature = siteHasFeature( state, 123001, 'unknown-feature' );
			expect( activeFeature ).toEqual( false );
		} );

		test( 'should return True when feature is defined in the active array', () => {
			const active = [ 'feature_active_01', 'feature_active_02', 'feature_active_03' ];

			const state = {
				sites: {
					features: {
						123001: {
							data: {
								active,
							},
						},
					},
				},
			};

			const activeFeature = siteHasFeature( state, 123001, 'feature_active_01' );
			expect( activeFeature ).toEqual( true );
		} );
	} );
} );
