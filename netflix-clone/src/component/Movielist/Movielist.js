
import Movie from "../Movie/Movie";
function Movielist(props) {
    return (
        <>
            <Movie data={props.data} />

        </>
    );
}
export default Movielist;