import React from 'react';
import Greeting from './component/Greeting.tsx';
import Counter from "./component/Counter.tsx";
import UserCard from "./component/UserCard.tsx";
import FetchData from "./component/FetchData.tsx";

class App extends React.Component {

    render() {
        return (
            <header>
                <Greeting name = {'Lili'}></Greeting>
                <Counter></Counter>
                <UserCard name = {'Lili'} age={15}></UserCard>
                {/*without any dependents*/}
                <UserCard ></UserCard>
                <FetchData></FetchData>
            </header>
        )
    }
}

export default App;