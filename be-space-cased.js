import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
export class BeSpaceCased {
    onSubsitutions(self) {
    }
}
const tagName = 'be-space-cased';
const ifWantsToBe = 'space-cased';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: ['substitutions']
        }
    },
    complexPropDefaults: {
        controller: BeSpaceCased
    }
});
register(ifWantsToBe, upgrade, tagName);
