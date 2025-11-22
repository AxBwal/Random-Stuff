import React, { useState } from 'react'

function Modal() {
    const [modalState, setModalState] = useState(false)

    function Modalcondtion() {
        setModalState(true)
    }
    function Modalcondtionclose() {
        setModalState(false)
    }
    return (
        <div>
            <div>Modal popUp</div>

            <button onClick={Modalcondtion}>open Moal</button>

            {
                modalState && (
                    <>
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                backdropFilter: "blur(5px)",
                                backgroundColor: "rgba(0,0,0,0.3)",
                                zIndex: 10,
                            }}

                        >

                        </div>

                        <div
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "white",
                                padding: "30px",
                                borderRadius: "10px",
                                zIndex: 20,
                                border: "2px solid red",
                            }}
                        >
                            <div>Modal header</div>
                            <p>This is the Modal Body</p>
                            <button onClick={Modalcondtionclose}>Close</button>
                        </div>
                    </>
                )
            }



        </div>
    )
}

export default Modal