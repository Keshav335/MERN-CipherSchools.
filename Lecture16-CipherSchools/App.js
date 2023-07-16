import "/App.css";

function App(){
    const NAME = "CipherSchools";
    return(
        <div>
        <div>
            <h1 
                style={{
                color:"red",
                tectAlign:"center",
                }}
            >Hello from {NAME}</h1>
        </div>
        <div>
            <p>This is {NAME}</p>
        </div>
        </div>
    );
}
export default App;