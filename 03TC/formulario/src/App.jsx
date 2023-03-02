import './App.scss'

export function App() {
    return (
        <>
            <header>
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </header>
            
            <main>
                <p>Try it free 7 days then $20/mo. thereafter</p>

                <form action="">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />

                    <button>claim your free trial</button>

                    <p>By clicking the button, you are agreeing to our Terms and Services</p>
                </form>
            </main>
        </>
    )
}