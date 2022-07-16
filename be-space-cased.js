import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
export class BeSpaceCased {
    intro(proxy, target, beDecorProps) {
        proxy.textContent = titleCase(proxy.textContent);
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
            virtualProps: [],
            intro: 'intro',
        },
    },
    complexPropDefaults: {
        controller: BeSpaceCased
    }
});
register(ifWantsToBe, upgrade, tagName);
//https://stackoverflow.com/questions/64489395/converting-snake-case-string-to-title-case
const titleCase = (s) => s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()); // First char after each -/_
