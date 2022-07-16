import {BeDecoratedProps} from 'be-decorated/types';

export interface BeSpaceCasedVirtualProps{
    
}

export interface Substitution{

}

export interface BeSpaceCasedProps extends BeSpaceCasedVirtualProps{
    proxy: Element & BeSpaceCasedVirtualProps;
}

export interface BeSpaceCasedActions{
    intro(proxy: Element & BeSpaceCasedVirtualProps, target: Element, beDecorProps: BeDecoratedProps): void;
}