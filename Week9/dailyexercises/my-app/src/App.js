import './App.css';
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5
    const user = {
        firstName: 'Bob',
        lastName: 'Dylan',
        favAnimals : ['Horse','Turtle','Elephant','Monkey']
    };
    return (
        <div>
            <div>
                <p style={{
                    background: "#74C3E1",
                    padding: "20px",
                    margin: "20px"
                }}>
                    Hello, World
                </p>
            </div>
            <div>
                {myelement}
            </div>
        <div>
            <p>"React is {sum} times better with JSX"</p>
        </div>
            <h3>
                {user.firstName}
            </h3>
            <h3>
                {user.lastName}
            </h3>

            <div>
                <UserFavoriteAnimals items={user.favAnimals} />
            </div>
            <div>
                <Exercise/>
                </div>
        </div>
    );
}

export default App;