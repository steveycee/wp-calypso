import page from 'page';
import { addQueryArgs } from 'calypso/lib/route';
import { hideMasterbar } from 'calypso/state/ui/actions';
import Header from './header';
import JetpackComFooter from './jpcom-footer';
import JetpackComMasterbar from './jpcom-masterbar';

export function jetpackPricingContext( context: PageJS.Context, next: () => void ): void {
	const urlQueryArgs = context.query;
	const { lang } = context.params;
	const path = context.path;

	if ( context.pathname.endsWith( '/pricing' ) && urlQueryArgs.site ) {
		page.redirect( addQueryArgs( urlQueryArgs, `${ context.pathname }/${ urlQueryArgs.site }` ) );
		return;
	}

	context.store.dispatch( hideMasterbar() );
	context.nav = <JetpackComMasterbar pathname={ lang ? path.replace( `/${ lang }`, '' ) : path } />;
	context.header = <Header urlQueryArgs={ urlQueryArgs } />;
	context.footer = <JetpackComFooter />;
	next();
}
