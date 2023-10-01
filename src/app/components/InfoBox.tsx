export default function InfoBox(props: string) {

    function handleClick(url: string) {
        console.log("Button was pressed " + url);
        window.open(url, '_blank');
    }

    return(
        <div>
            <div className="container box-content h-64 w-64 p-4 border-2 bg-gray-500 rounded-md px-2 py-2">           
                <h3 className="font-bold text-white text-2xl">{props.title}</h3>
                <h5 className="italic text-white text-1xl">{props.desc}</h5>
                <br/>
                <div className="grid grid-cols-2 gap-4 place-content-between h-48 ...">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg" onClick={() => handleClick(props.repo)}>
                        GitHub
                    </button>
                </div>

            </div>
        </div>
    );
}