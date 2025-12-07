import React, { useState } from 'react'

function Accordion() {
    const accordionData = [
        {
            id: 1,
            title: "Section 1",
            content: "This is the dummy content for section 1."
        },
        {
            id: 2,
            title: "Section 2",
            content: "This is some placeholder text for section 2."
        },
        {
            id: 3,
            title: "Section 3",
            content: "More dummy content goes here for section 3."
        }
    ];

    const [currentState, setCurrentstate] = useState(null);

    function ShowtheData(index) {
        setCurrentstate(index ===currentState ? null :index)
    }
    return (
        <div>
            <h1>Accordion</h1>

            <div>
                {
                    accordionData.map((item, index) => {
                        return <div key={index} style={{
                            padding: "20px",
                            border: "1px solid red",
                            gap: "10px",
                            marginBottom: "10px"
                        }}>
                            <div>
                               <div>{item.title}</div>
                               {
                                currentState === index && (
                                    <div>{item.content}</div>
                                )
                               }
                                <button onClick={() => ShowtheData(index)}>Down</button>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default Accordion