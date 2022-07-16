import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeSpaceCasedActions, BeSpaceCasedProps, BeSpaceCasedVirtualProps} from './types';

export class BeSpaceCased implements BeSpaceCasedActions{
    intro(proxy: Element & BeSpaceCasedVirtualProps, target: Element, beDecorProps: BeDecoratedProps<any, any>): void {
        proxy.textContent = titleCase(proxy.textContent);
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
            virtualProps: [],
            intro: 'intro',
        },

    },
    complexPropDefaults:{
        controller: BeSpaceCased
    }
});

register(ifWantsToBe, upgrade, tagName);

//https://stackoverflow.com/questions/64489395/converting-snake-case-string-to-title-case
const titleCase = (s: string) =>
  s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
   .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_
