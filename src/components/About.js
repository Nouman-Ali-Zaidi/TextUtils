import React, { useState } from 'react'

const About = () => {
    const [btnText, setBtnText] = useState("Enable Light Mode");
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black"
    })
    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle(
                {
                    color: "black",
                    backgroundColor: "white"
                }
            )
            setBtnText("Enable Dark Mode");
        }
        else {
            setMyStyle(
                {
                    color: "white",
                    backgroundColor: "black"
                }
            )
            setBtnText("Enable Light Mode");
        };

    }
    return (
        <>
            <div className='container' style={myStyle}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze Your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or remove extra spaces from your text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to Use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils is a free characer counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the numbe of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Comptible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                {/* <button
                    className="btn btn-primary"
                    onClick={toggleStyle}
                    style={myStyle}
                >
                    {btnText}
                </button> */}

            </div>
        </>
    )
}

export default About;
