import {BeDecoratedProps} from 'be-decorated/types';

export interface BeSpaceCasedVirtualProps{
    substitutions: {[key: string]: Substitution}
}

export interface Substitution{

}

export interface BeSpaceCasedProps extends BeSpaceCasedVirtualProps{
    proxy: Element & BeSpaceCasedVirtualProps;
}

export interface BeSpaceCasedActions{
    onSubsitutions(self: this): void;
}