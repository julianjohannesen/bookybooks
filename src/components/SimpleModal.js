import React, { Component } from 'react';
import cn from 'classnames';
import Styled from 'styled-components';
import dialogPolyfill from 'dialog-polyfill';

const Dialog = Styled.dialog`
    &::backdrop {
        background-color: rgba(0,0,0,0.8);
    };
    border-radius: 1em;
    border: none;
    font-size: 1.5em;
    max-width: 75%;
`;

const Form = Styled.form`
    display: flex;
    justify-content: center;
`;

const Input = Styled.input`
    margin-top: 1em;
`;

export default class SimpleModal extends Component{

    componentDidMount(){
        const dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);
        // With the polyfill in place  dialog acts like a native <dialog>.
    }

    render(){
        return (     
            <Dialog>
                {this.props.content}
                <Form method="dialog">
                    <Input className={cn("button", "is-primary", "is-large")} type="submit" value="Close" />
                </Form>
            </Dialog> 
        )
    }
}

