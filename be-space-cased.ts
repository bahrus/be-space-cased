import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeSpaceCasedActions, BeSpaceCasedProps, BeSpaceCasedVirtualProps} from './types';

export class BeSpaceCased implements BeSpaceCasedActions{
    onSubsitutions(self: this): void {
        
    }
}

export interface BeSpaceCased extends BeSpaceCasedProps{}

const tagName = 'be-space-cased';

const ifWantsToBe = 'space-cased';

const upgrade = '*';

define<BeSpaceCasedProps & BeDecoratedProps<BeSpaceCasedProps, BeSpaceCasedActions>, BeSpaceCasedActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            virtualProps: ['substitutions']
        }
    },
    complexPropDefaults:{
        controller: BeSpaceCased
    }
});

register(ifWantsToBe, upgrade, tagName);