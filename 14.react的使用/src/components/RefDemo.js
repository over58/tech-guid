import React, {useRef, useState, useCallback } from 'react'

export default function RefDemo (props) {
    const [visible, setVisible] = useState(false)
    const pRef = useRef(null)

    const func =() => {
        console.log(pRef.current)
    }

    const change = () => {
        setVisible((visible) => !visible)
        func()
    }


    return (
        <div className="ref-demo">
            <p>ref-demo</p>
            <button onClick={change}>change</button>
            {
                visible && <p ref={pRef}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem est recusandae quidem, consequatur tempore illum autem repellendus omnis unde at quae itaque temporibus adipisci quos magnam quis in officia?
                </p>
            }
            
        </div>
    )
}