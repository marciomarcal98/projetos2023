import { useState } from 'react'

import './App.scss'

function App() {
    const [firstName, setFirstName] = useState("")

    function mudancaFirstName(event) {
        setFirstName(event.target.value)
    }

    console.log(firstName)

    return (
        <>
            <header>
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </header>
            <main>
                <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

                <form action="">
                    <input type="text" placeholder="First Name" onChange={(event) => mudancaFirstName(event)} />
                    <input type="text" placeholder="Last Name"  />
                    <input type="text" placeholder="Email Adress" />
                    <input type="text" placeholder="Password" />

                    <button>claim your free trial</button>

                    <p>By clicking the button, you are agreeing to our Terms and Services</p>
                </form>
            </main>
        </>
    )
}

export default App