import React, { useState, useEffect } from "react";

function Operation() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [operation, setOperation] = useState("Addition"); // Example operation, can be passed as a prop or from state
    const username = "Mahesh"; // This should come from the registration data or context

    // Perform the operation when 'Calculate' is clicked
    const handleCalculate = () => {
        let result;
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers");
            return;
        }

        switch (operation) {
            case "Addition":
                result = num1 + num2;
                break;
            case "Subtraction":
                result = num1 - num2;
                break;
            case "Multiplication":
                result = num1 * num2;
                break;
            case "Division":
                if (num2 === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = 0;
        }

        setOutput(result);
    };

    useEffect(() => {
        // This would dynamically set the operation if it's passed from previous page
        // setOperation(operationFromContextOrProps);
    }, []);
    //tushar
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div
                style={{
                    border: "1px solid black",
                    padding: "20px",
                    width: "400px",
                    margin: "auto",
                }}
            >
                <h3>
                    You have registered for the <b>{operation}</b>
                </h3>
                <h4>Welcome {username}</h4>

                <div style={{ margin: "20px 0" }}>
                    <label>Input 1</label>
                    <br />
                    <input
                        type="number"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                </div>

                <div style={{ margin: "20px 0" }}>
                    <label>Input 2</label>
                    <br />
                    <input
                        type="number"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                </div>

                <div style={{ margin: "20px 0" }}>
                    <label>Output</label>
                    <br />
                    <input
                        type="text"
                        value={output}
                        readOnly
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                </div>

                <button onClick={handleCalculate} style={{ width: "100%" }}>
                    Calculate
                </button>
            </div>
        </div>
    );
}

export default Operation;
