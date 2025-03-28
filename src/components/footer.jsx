export const Footer = () => {
    return (
        <footer className="footer flex flex-col w-full h-52 justify-between items-center p-12">
            <h2 className="text-3xl font-semibold">Let's Connect!</h2>
            
            <div className="flex flex-row justify-center items-center gap-12 text-3xl sm:text-5xl">
                <a href="https://github.com/Hydrohaven" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/joshua-micah-sullivan/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://drive.google.com/file/d/1ACQxFPxWlqQdKhoYce4om2xWKIa-FSva/view" target="_blank"><i className="fas fa-file-alt"></i></a>
                <a href="mailto:joshee.sullivan@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
        </footer>
    );
};