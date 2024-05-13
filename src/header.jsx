function Header (){
    return(
        <><div className="header">
            <div className="heading container">
                <div>
                    <span id="logo">SK News Papper</span>
                </div>
                <div className="login">
                    <a href="#">
                        <span>Login</span>
                    </a>
                    <a href="#">
                        <span>Register</span>
                    </a>
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </form>
                </div>
            </div>
        </div><nav>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Pages</a>
                </li>
                <li>
                    <a href="">Politics</a>
                </li>
                <li>
                    <a href="">Breaking News</a>
                </li>
                <li>
                    <a href="">Business</a>
                </li>
                <li>
                    <a href="">Technology</a>
                </li>
                <li>
                    <a href="">Health</a>
                </li>
                <li>
                    <a href="">sports</a>
                </li>
                <li>
                    <a href="">contact</a>
                </li>
            </nav></>
    )
}

export default Header