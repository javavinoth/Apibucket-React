import React, { Component } from "react"

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <header>
        <a src="/" id="logo">APIBUCKET</a>
                    {/* <nav> */}
                        {/* <ul> */}
                            <a href="/">Home</a> <span></span>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        {/* </ul> */}
                    {/* </nav> */}
                </header>
            </div>
        );
    }
}
export default Home