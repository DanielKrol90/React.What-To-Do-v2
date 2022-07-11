import './Footer.css'

const Content = ({length}) => {
    const today = new Date();

    return (
        <footer>
            <p>How many {length === 1 ? "item" : "items"} we got : {length} </p>
            <p>Copy Rights &copy; {today.getFullYear()}</p>
        </footer>
    );
}

export default Content;