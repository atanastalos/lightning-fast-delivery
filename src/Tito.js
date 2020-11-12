import useScript from "./hooks/useScript";

function Tito() {
    useScript('https://js.tito.io/v1');

    return (
        <>
            <div id="tito">
                <tito-widget event="demo/exampleconf"></tito-widget>
            </div>
        </>
    );
}

export default Tito;
