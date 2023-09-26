import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header title="Shapka"/>
                <Footer />
            </div>
        )
    }
}
export default App