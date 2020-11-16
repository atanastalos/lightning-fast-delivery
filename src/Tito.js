import useScript from "./hooks/useScript";

function Tito() {
    useScript('https://js.tito.io/v1');

    return (
        <>
            <div id="tito">
                <tito-widget event="wmr/lightning-fast-delivery-december-2020"></tito-widget>
            </div>
        </>
    );
}

export default Tito;
