import './Footer.css'

const Content = () => {
    const today = new Date();

    return (
        <footer>
            <p>Copy Rights &copy; {today.getFullYear()}</p>
        </footer>
    );
}

export default Content;