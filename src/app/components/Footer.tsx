export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return(
        <div>
            <br/>
            <div className="container flex justify-center items-center mx-auto">
                <h4 className="text-slate-300">&copy; Colton Thompson {year}</h4>
            </div>
        </div>
    );
}