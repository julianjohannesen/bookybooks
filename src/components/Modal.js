import React, { Fragment } from 'react';
import dialogPolyfill from 'dialog-polyfill';

export default function Modal({title, content, footer, handleModalClose}) {

    return (
        <Fragment>
            <div className="modal-background">
            </div>
            <div className="modal-card">
                <header className="modal-card-head" style={footer ? {padding:'20px'} :{padding: 0}}>
                    {title ? <p className="modal-card-title">{title}</p> : null}
                    <button 
                        aria-label="close"
                        className={footer ? "delete" : "modal-close"}
                        onClick={handleModalClose} 
                    ></button>
                </header>
                <section className="modal-card-body">
                    <p>{content}</p> 
                </section>
                { footer ? <footer className="modal-card-foot">
                    <button className="button is-success">Okay</button>
                    <button
                        aria-label="close"
                        className="button" 
                        onClick={handleModalClose} 
                    >Cancel</button>
                </footer> : null }
            </div>
        </Fragment>
    )
}

