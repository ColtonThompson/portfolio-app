interface ProjectItem {
    id : number,
    name : string,
    description : string,
    repositoryURL : string
  }

export default function InfoBox(props: ProjectItem) {

    function handleClick(url: string) {
        console.log("Button was pressed " + url);
        window.open(url, '_blank');
    }

    return(
        <div>
            <div className="infobox box-content h-48 w-64 p-4 border-2 bg-gray-500 rounded-md">           
                <h3 className="font-bold text-2xl">{props.name}</h3>
                <h5 className="italic text-1xl">{props.description}</h5>
                <br/>
                <div className="grid grid-cols-2 gap-4 place-content-between h-48 ...">
                    <button className="info_button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg" onClick={() => handleClick(props.repositoryURL)}>
                        View Project
                    </button>
                </div>

            </div>
        </div>
    );
}