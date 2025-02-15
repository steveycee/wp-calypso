import { generateSubjectFromMessage } from '../utils';

describe( 'utils', () => {
	describe( '#generateSubjectFromMessage', () => {
		test( 'should return empty string for empty string', () => {
			const str = generateSubjectFromMessage( '' );
			expect( str ).toEqual( '' );
		} );
		test( 'should return first 20 characters if input equals 20 characters', () => {
			const str = generateSubjectFromMessage( '12345678901234567890' );
			expect( str ).toEqual( '12345678901234567890' );
		} );
		test( 'should return first 40 characters in input has more than 40 characters', () => {
			const str = generateSubjectFromMessage(
				'12345678901234567890123456789012345678901234567890'
			);
			expect( str ).toEqual( '1234567890123456789012345678901234567890' );
		} );
	} );
} );
