import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/choice_81/"> @choice_81 </a>/<a href="https://github.com/FelipeGomes-20"> FelipeGomes-20</a>
                </p>
            </div>
        </header>
    )
}

export default Header;