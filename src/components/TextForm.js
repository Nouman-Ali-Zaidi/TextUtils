import React from 'react';


const TextForm = ({ heading, text, setText, handleUpClick, handleLowClick, handleSpaceClick, mode }) => {

    return (
        <>
            <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
                <h1 className='my-3'>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="mybox" rows="8"
                        value={text}
                        placeholder="Enter text here..."
                        onChange={(e) => {
                            setText(e.target.value)
                        }
                        }
                    >
                    </textarea>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleUpClick}
                >
                    Convert to UpperCase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLowClick}
                >
                    Convert to LowerCase
                </button>
                <button
                    className="btn btn-primary my-1"
                    onClick={handleSpaceClick}
                >
                    Remove extra spaces from text
                </button>
            </div>
            <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes needed to read this text.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
