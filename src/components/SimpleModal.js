import React, { Component } from 'react';
import Styled from 'styled-components';
import dialogPolyfill from 'dialog-polyfill';

const Dialog = Styled.dialog`
    &::backdrop {
        backgroundColor: 'rgba(0,0,0,.8)'
    }
`;

export default class SimpleModal extends Component{

    componentDidMount(){
        const dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);
        // With the polyfill in place  dialog acts like a native <dialog>.
    }

    render(){
        return (     
            <Dialog className="modal">
                {this.props.content}
                <form method="dialog">
                    <input type="submit" value="Close" />
                </form>
            </Dialog> 
        )
    }
}

